[![Build Status](https://travis-ci.org/danielso2007/angular-graphcool-chat.svg?branch=master)](https://travis-ci.org/danielso2007/angular-graphcool-chat)
![version](https://img.shields.io/badge/version-0.0.0-blue.svg)
![GitHub package version](https://img.shields.io/github/package-json/v/danielso2007/angular-graphcool-chat.svg)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/danielso2007/angular-graphcool-chat.svg)](https://github.com/danielso2007/angular-graphcool-chat/pulls)
[![GitHub issues](https://img.shields.io/github/issues/danielso2007/angular-graphcool-chat.svg)](https://github.com/danielso2007/angular-graphcool-chat/issues?q=is%3Aopen+is%3Aissue)
![GitHub last commit](https://img.shields.io/github/last-commit/danielso2007/angular-graphcool-chat.svg)
[![GitHub issue/pull request author](https://img.shields.io/github/issues/detail/u/danielso2007/angular-graphcool-chat/1.svg)](https://github.com/danielso2007/angular-graphcool-chat/pulls)
![GitHub contributors](https://img.shields.io/github/contributors/danielso2007/angular-graphcool-chat.svg)
![GitHub top language](https://img.shields.io/github/languages/top/danielso2007/angular-graphcool-chat.svg)
[![GitHub](https://img.shields.io/github/license/danielso2007/angular-graphcool-chat.svg)](https://github.com/danielso2007/angular-graphcool-chat)
[![GitHub All Releases](https://img.shields.io/github/downloads/danielso2007/angular-graphcool-chat/total.svg)](https://github.com/danielso2007/angular-graphcool-chat/archive/master.zip)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

----
- [1. Angular Graphcool Chat](#1-angular-graphcool-chat)
  - [1.1. Development server](#11-development-server)
  - [1.2. Code scaffolding](#12-code-scaffolding)
  - [1.3. Build](#13-build)
  - [1.4. Running unit tests](#14-running-unit-tests)
  - [1.5. Running end-to-end tests](#15-running-end-to-end-tests)
  - [1.6. Further help](#16-further-help)
- [2. Padrão de mensagem de commit (CHANGELOG automatizados):](#2-padr%C3%A3o-de-mensagem-de-commit-changelog-automatizados)
  - [2.1. Gerando o CHANGELOG do projeto](#21-gerando-o-changelog-do-projeto)
  - [2.2. Referências:](#22-refer%C3%AAncias)
- [3. Baseado no curso](#3-baseado-no-curso)
- [4. Inciando novo projeto](#4-inciando-novo-projeto)
- [5. Angular Material](#5-angular-material)
- [6. Sobre GraphQL](#6-sobre-graphql)
- [7. GraphQL - Documentação, Referências, Artigos](#7-graphql---documenta%C3%A7%C3%A3o-refer%C3%AAncias-artigos)
- [8. Graphcool](#8-graphcool)
- [9. Instalando o Graphcool](#9-instalando-o-graphcool)
  - [9.1. DOC](#91-doc)
  - [9.2. Iniciando e criando o projeto backend com Graphcool](#92-iniciando-e-criando-o-projeto-backend-com-graphcool)
- [10. Plugin para Visual Studio - GraphQL for VSCode](#10-plugin-para-visual-studio---graphql-for-vscode)
- [11. Exemplo de chamada para o endpoint GraphQl usando HttpCliente do Angular](#11-exemplo-de-chamada-para-o-endpoint-graphql-usando-httpcliente-do-angular)
- [12. Usando o Apollo GraphQl Client](#12-usando-o-apollo-graphql-client)
  - [12.1. Apollo Link Error](#121-apollo-link-error)
  - [12.2. Apollo Client Devtools](#122-apollo-client-devtools)
- [13. Modularização no Angular](#13-modulariza%C3%A7%C3%A3o-no-angular)
  - [13.1. Gerando o CoreModule](#131-gerando-o-coremodule)
  - [13.2. Gerando o SharedModule](#132-gerando-o-sharedmodule)
- [14. Novas atualizações com ng update](#14-novas-atualiza%C3%A7%C3%B5es-com-ng-update)
- [15. Autenticação com Graphcool](#15-autentica%C3%A7%C3%A3o-com-graphcool)
  - [15.1. Instalando o template](#151-instalando-o-template)
- [16. Graphcool - File Management](#16-graphcool---file-management)
- [17. Graphcool - Permission Queries](#17-graphcool---permission-queries)
- [18. Guarda de rotas no Angular](#18-guarda-de-rotas-no-angular)
- [19. Lazy Loading Feature Modules](#19-lazy-loading-feature-modules)
- [20. Angular Routing & Navigation](#20-angular-routing--navigation)
- [21. World Clock API](#21-world-clock-api)
- [22. Graphql Fragments](#22-graphql-fragments)
- [23. Apollo Using Fragments](#23-apollo-using-fragments)
- [24. Apollo Client developer tools](#24-apollo-client-developer-tools)
- [25. Apollo Queries](#25-apollo-queries)
- [26. Apollo Direct Cache Access](#26-apollo-direct-cache-access)
- [27. Apollo Optimistic UI](#27-apollo-optimistic-ui)
- [Apollo What is QueryRef](#apollo-what-is-queryref)

----

# 1. Angular Graphcool Chat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

## 1.1. Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## 1.2. Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## 1.3. Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## 1.4. Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## 1.5. Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## 1.6. Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# 2. Padrão de mensagem de commit (CHANGELOG automatizados):

O projeto terá o controle de versão e a geração do CHANGELOG automatizados com mensagens de confirmação  convencionais seguindo o padrão estabelecido por este documento.

`Lembrando: A mensagem de commit será pré-estabelecida no issue`

Para os commites do projeto, se o mensagem do commite não for definida no issue, usar o padrão definido abaixo:

_Para bugs:_

```sh
git commit -m "fix: texto_do_que_foi_feito_no_issue (número_do_issue_com_#)"
```

_Para os demais:_

```sh
git commit -m "feat: texto_do_que_foi_feito_no_issue (número_do_issue_com_#)"
```

_Para escopo opcional de um commit:_

```sh
git commit -m "feat(optional_scope): texto_do_que_foi_feito_no_issue (número_do_issue_com_#)"
```

_Algumas regras:_

1. Commits deve ser prefixado com um tipo, o qual consiste de um substantivo, `feat`, `fix`, etc, seguida de dois pontos e um espaço.
2. O tipo `feat`DEVE ser usado quando um commit adiciona um novo recurso ao seu aplicativo ou biblioteca.
3. O tipo `fix` DEVE ser usado quando um commit representa uma correção de bug para seu aplicativo.
4. Um escopo opcional pode ser fornecido após um tipo. Um escopo é uma frase que descreve uma seção da base de código entre parênteses, por exemplo, `fix(parser)`:

## 2.1. Gerando o CHANGELOG do projeto

```sh
npm run release -- --release-as 1.0.0
```

## 2.2. Referências:
[Standard Version](https://github.com/conventional-changelog/standard-version/blob/master/README.md)

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)

# 3. Baseado no curso

https://github.com/plinionaves/angular-graphcool-chat

# 4. Inciando novo projeto

`ng new angular-graphcoll-chat --style=scss`

# 5. Angular Material

[Material Design components for Angular](https://material.angular.io/)

`ng add @angular/material`

# 6. Sobre GraphQL

- __Type system__: Sistema de tipos que usamos para descrever nossos dados;
- __Queries__: Obtém dados da nossa API (read);
- __Mutations__: Fas alterações nos dados da nossa API (write);
- __Subcriptions__: Permite ouvir mudanças em "tempo real" (real-time);
- __Schema__: Define o "Esquema" da nossa API, pense nele com um container para todos os tipos da nossa API (SDL).

# 7. GraphQL - Documentação, Referências, Artigos

- __Documentação Oficial__: http://graphql.org
- __Referência__: https://howtographql.com
- __Apollo GraphQL__: https://www.apollographql.com
- __Blog Apollo Data__: https://dev-blog.apollodata.com

# 8. Graphcool

Necessário criar uma conta no Graphcool

https://www.graph.cool/

# 9. Instalando o Graphcool

`npm -g i graphcool`

## 9.1. DOC

https://www.graph.cool/docs/reference/graphcool-cli/commands-aiteerae6l

## 9.2. Iniciando e criando o projeto backend com Graphcool

Criar dentro do próprio projeto, apenas para estudo. Em projetos oficiais, criar fora do projeto frontend.

Será criado um diretório graphcool dentro do projeto.

`graphcool init graphcool`

# 10. Plugin para Visual Studio - GraphQL for VSCode

[GraphQL for VSCode](https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode)

# 11. Exemplo de chamada para o endpoint GraphQl usando HttpCliente do Angular

```javascript
constructor(private http: HttpClient) {
    // this.createUser();
    this.allUsers();
  }

  allUsers(): void {
    const body = {
      query: `
        query {
          allUsers {
            id
            name
            email
          }
        }
      `
    };

    this.http.post(this.apiUrl, body).subscribe(res => {
      console.log(res);
    });
  }

  createUser(): void {
    const body = {
      query: `
        mutation CreatenewUser($name: String!, $email: String!, $password: String!) {
          createUser(name: $name, email: $email, password: $password) {
            id
            name
            email
          }
        }
      `,
      variables: {
        name: 'Black Panther',
        email: 'panther@email.com',
        password: '123456'
      }
    };

    this.http.post(this.apiUrl, body).subscribe(res => {
      console.log('Mutations: ', res);
    });
  }
```

# 12. Usando o Apollo GraphQl Client

[apollographql.com](https://www.apollographql.com/)

[Docs](https://www.apollographql.com/docs/?no-cache=1)

[Angular Doc](https://www.apollographql.com/docs/angular/)

Já há suporte ao `ng add`

`ng add apollo-angular`

## 12.1. Apollo Link Error

O Apollo Link é um sistema de componentes modulares para redes GraphQL. 

`npm i -E -S apollo-link-error`

## 12.2. Apollo Client Devtools

[apollo-client-devtools](https://github.com/apollographql/apollo-client-devtools)


Os devtools aparecem como uma guia "Apollo" no seu inspetor do Google Chrome, ao lado das guias "Elementos" e "Console". Existem atualmente 3 principais características dos devtools:

- __GraphiQL__: Envie consultas para o seu servidor através da interface de rede da Apollo ou consulte o cache da Apollo para ver quais dados são carregados.
- __Inspetor de armazenamento normalizado__: visualize sua loja GraphQL da maneira que o Apollo Client a vê e pesquise por nomes ou valores de campo.
- __Inspetor de consulta assistida__: visualize consultas e variáveis ​​ativas e localize os componentes da interface do usuário associados.

# 13. Modularização no Angular

CoreModule   | SharedModule
--------- | ------
Singleton Services | CommonModule
Single-instance components | FormsModule
O que o AppComponent precisa | Components/Pipes/Directives
 x | Dump Components

## 13.1. Gerando o CoreModule

- Gera sem modificação:

`ng g m core --dryRun`

- Gera o core:

`ng g m core`

## 13.2. Gerando o SharedModule

- Gera sem modificação:

`ng g m shared --dryRun`

- Gera o core:

`ng g m shared`

# 14. Novas atualizações com ng update

`ng update`

`ng update @angular/core`

`ng update @angular/material`

# 15. Autenticação com Graphcool

Use os modelos Graphcool para inserir rapidamente a funcionalidade predefinida em seu próprio serviço Graphcool.

(graphcool-templates)[https://github.com/prisma-archive/graphcool-templates]

## 15.1. Instalando o template

`gcf add-template auth/email-password`

# 16. Graphcool - File Management

https://www.graph.cool/docs/reference/graphql-api/file-management-eer4wiang0

https://www.graph.cool/docs/reference/graphql-api/file-management-eer4wiang0#file-upload-and-permissions

https://www.graph.cool/docs/reference/graphql-api/file-management-eer4wiang0#file-upload-and-permissions

# 17. Graphcool - Permission Queries

https://www.graph.cool/docs/reference/auth/authorization/permission-queries-iox3aqu0ee

# 18. Guarda de rotas no Angular

- __CanActivate__: Intermedia a nagevação para uma rota;
- __CanActiveChild__: intermedia a navegação para uma rota filha;
- __CanDeactivate__: Intermedia a navegação "para fora" da rota atual;
- __CanLoad__: Intermedia a navegação para um módulo "Lazy Loading";
- __Resolve__: Para executar a "recuperação" de dados (ex id) antes de ativar a rota;

# 19. Lazy Loading Feature Modules

[angular.io/guide/lazy-loading-ngmodules](https://angular.io/guide/lazy-loading-ngmodules)

# 20. Angular Routing & Navigation

- The __CanActivate__ guard (verificando o acesso à rota).
- The __CanActivateChild__ guard (verificando o acesso da rota filho).
- The __CanDeactivate__ guard (peça permissão para descartar as alterações não salvas).
- The __Resolve__ guard (pré-busca de dados de rota).
- The __CanLoad__ guard (verifique antes de carregar os recursos do módulo de recursos).

# 21. World Clock API

REST Services that will return current date/time in JSON for any registered time zone.

http://worldclockapi.com/


# 22. Graphql Fragments

Digamos que tenhamos uma página relativamente complicada em nosso aplicativo, o que nos permite ver dois heróis lado a lado, junto com os amigos deles. Você pode imaginar que essa consulta poderia se complicar rapidamente, porque precisaríamos repetir os campos pelo menos uma vez - um para cada lado da comparação.

É por isso que o GraphQL inclui unidades reutilizáveis ​​chamadas fragmentos . Os fragmentos permitem que você construa conjuntos de campos e os inclua em consultas onde você precisa.

[graphql.org/learn/queries/#fragments](https://graphql.org/learn/queries/#fragments)

# 23. Apollo Using Fragments

Um fragmento GraphQL é uma parte compartilhada da lógica de consulta.

[apollographql.com/docs/angular/features/fragments](https://www.apollographql.com/docs/angular/features/fragments.html)

[github.com/facebook/graphql](https://github.com/facebook/graphql/issues/204)


# 24. Apollo Client developer tools

Chrome extension for Apollo Client developer tools

[apollographql/apollo-client-devtools](https://github.com/apollographql/apollo-client-devtools)

[chrome.google.com/webstore/detail/apollo-client-developer-t](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm)

# 25. Apollo Queries

Nesta página, você pode aprender a usar o Apollo para anexar os resultados da consulta GraphQL à sua interface de usuário angular. Este guia pressupõe alguma familiaridade com o próprio GraphQL. Você pode ler em detalhes as consultas do GraphQL em graphql.org .

Um dos nossos principais valores é “é apenas GraphQL”. Ao usar o Apollo Client, você não precisa aprender nada de especial sobre a sintaxe da consulta, já que tudo é apenas GraphQL padrão. Qualquer coisa que você pode digitar no IDE de consulta do GraphQL, você também pode colocar em seu código do Apollo Client.

[apollographql.com/docs/angular/basics/queries](https://www.apollographql.com/docs/angular/basics/queries.html)

# 26. Apollo Direct Cache Access

O Apollo Client normaliza todos os seus dados, de modo que, se quaisquer dados que você buscou anteriormente em seu servidor GraphQL forem atualizados em uma busca posterior de dados do seu servidor, seus dados serão atualizados com a verdade mais recente do seu servidor.

[apollographql.com/docs/angular/features/caching](https://www.apollographql.com/docs/angular/features/caching.html)

# 27. Apollo Optimistic UI

Conforme explicado na seção de mutações , a UI otimista é um padrão que você pode usar para simular os resultados de uma mutação e atualizar a interface do usuário antes mesmo de receber uma resposta do servidor. Quando a resposta é recebida do servidor, o resultado otimista é descartado e substituído pelo resultado real.

A interface do usuário otimista fornece uma maneira fácil de fazer com que sua interface do usuário responda de maneira muito mais rápida, garantindo que os dados se tornem consistentes com a resposta real quando ela chegar.

[apollographql.com/docs/angular/features/optimistic-ui](https://www.apollographql.com/docs/angular/features/optimistic-ui.html)

# Apollo What is QueryRef

Como você sabe, o Apollo.querymétodo retorna um Observável que emite um resultado, apenas uma vez. Apollo.watchQuerytambém faz o mesmo, exceto que pode emitir vários resultados. (A própria consulta GraphQL ainda é enviada apenas uma vez, mas a watchQuery observação também pode ser atualizada se, por exemplo, outra consulta fizer com que o objeto seja atualizado no cache global do Apollo Client.)

Então, por que não Apollo.watchQueryexpor um Observable?

O serviço Apollo e o ApolloClient compartilham praticamente a mesma API. Isso torna as coisas fáceis de entender e usar. Não há razão para mudar isso.

Em ApolloClient.watchQueryretorna um Observable, mas não um padrão, ele contém muitos métodos úteis (como refetch()) para manipular a consulta assistida. Um Observável normal, tem apenas um método subscribe().

Para usar o Apollo's Observable em RxJS, teríamos que abandonar esses métodos. Como eles são necessários para usar o Apollo em todo o seu potencial, tivemos que encontrar uma solução.

É por isso que nós criamos QueryRef.

[apollographql.com/docs/angular/basics/queries](https://www.apollographql.com/docs/angular/basics/queries.html#queryref)
