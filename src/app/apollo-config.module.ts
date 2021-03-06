import { Inject, NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, Operation } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { getOperationAST } from 'graphql';

import { SubscriptionClient } from 'subscriptions-transport-ws';
import { CachePersistor } from 'apollo-cache-persist';
import { WebSocketLink } from 'apollo-link-ws';

import { environment } from '../environments/environment';
import { StorageKeys } from './storage-keys';
import {
  GRAPHCOOL_CONFIG,
  GraphcoolConfig
} from './core/providers/graphcool-config.provider';

@NgModule({
  imports: [HttpClientModule, ApolloModule, HttpLinkModule]
})
export class ApolloConfigModule {
  cachePersistor: CachePersistor<any>;
  private subscriptionClient: SubscriptionClient; // Tratando "reconnect" para enviar token atualizado

  constructor(
    private apollo: Apollo,
    @Inject(GRAPHCOOL_CONFIG) private graphcoolConfig: GraphcoolConfig, // Exemplo de injeção
    private httpLink: HttpLink
  ) {
    const uri = this.graphcoolConfig.simpleAPI;
    const http = httpLink.create({ uri });

    const authMiddleware: ApolloLink = new ApolloLink((operation, forward) => {
      console.log('Context: ', operation.getContext());
      operation.setContext({
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.getAuthToken()}`
        })
      });
      return forward(operation);
    });

    const linkError = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      }

      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }
    });

    const ws = new WebSocketLink({ // Instalando pacotes NPM e configurando WebSocketLink
      uri: this.graphcoolConfig.subscriptionsAPI,
      options: {
        reconnect: true,
        timeout: 30000,
        connectionParams: () => ({ // Autenticação com WebSockets
          Authorization: `Bearer ${this.getAuthToken()}`
        })
      }
    });

    this.subscriptionClient = (<any>ws).subscriptionClient; // Tratando "reconnect" para enviar token atualizado

    const cache = new InMemoryCache({
      dataIdFromObject: (object: any) => {
        // console.log('InMemoryCache ==> ', object);
        return object.id;
      }
    });

    this.cachePersistor = new CachePersistor({
      cache,
      storage: window.localStorage // fetchPolicy e CachePersistor para ajustar uso do apollo cache persist
    }); // Bônus: Apollo Cache Persist e dica sobre recursos Offline com Apollo

    apollo.create({
      link: ApolloLink.from([
        linkError,
        ApolloLink.split( // Instalando pacotes NPM e configurando WebSocketLink
          (operation: Operation) => {
            const operationAST = getOperationAST(
              operation.query,
              operation.operationName
            );
            return !!operationAST && operationAST.operation === 'subscription';
          },
          ws,
          authMiddleware.concat(http)
        )
      ]),
      cache,
      connectToDevTools: !environment.production
    });
  }

  closeWebSocketConnection(): void { // Tratando "reconnect" para enviar token atualizado
    this.subscriptionClient.close(true, true);
  }

  private getAuthToken(): string {
    return window.localStorage.getItem(StorageKeys.AUTH_TOKEN);
  }
}
