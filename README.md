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

- [Angular Graphcool Chat](#angular-graphcool-chat)
  - [Development server](#development-server)
  - [Code scaffolding](#code-scaffolding)
  - [Build](#build)
  - [Running unit tests](#running-unit-tests)
  - [Running end-to-end tests](#running-end-to-end-tests)
  - [Further help](#further-help)
- [Padrão de mensagem de commit (CHANGELOG automatizados):](#padr%C3%A3o-de-mensagem-de-commit-changelog-automatizados)
  - [Gerando o CHANGELOG do projeto](#gerando-o-changelog-do-projeto)
  - [Referências:](#refer%C3%AAncias)
- [Baseado no curso](#baseado-no-curso)
- [Inciando novo projeto](#inciando-novo-projeto)
- [Angular Material](#angular-material)
- [Sobre GraphQL](#sobre-graphql)
- [GraphQL - Documentação, Referências, Artigos](#graphql---documenta%C3%A7%C3%A3o-refer%C3%AAncias-artigos)
- [Graphcool](#graphcool)
- [Instalando o Graphcool](#instalando-o-graphcool)
  - [DOC](#doc)
  - [Iniciando e criando o projeto backend com Graphcool](#iniciando-e-criando-o-projeto-backend-com-graphcool)
- [Plugin para Visual Studio - GraphQL for VSCode](#plugin-para-visual-studio---graphql-for-vscode)
- [Exemplo de chamada para o endpoint GraphQl usando HttpCliente do Angular](#exemplo-de-chamada-para-o-endpoint-graphql-usando-httpcliente-do-angular)
- [Usando o Apollo GraphQl Client](#usando-o-apollo-graphql-client)
  - [Apollo Link Error](#apollo-link-error)
  - [Apollo Client Devtools](#apollo-client-devtools)
- [Modularização no Angular](#modulariza%C3%A7%C3%A3o-no-angular)
  - [Gerando o CoreModule](#gerando-o-coremodule)
  - [Gerando o SharedModule](#gerando-o-sharedmodule)
- [Novas atualizações com ng update](#novas-atualiza%C3%A7%C3%B5es-com-ng-update)
- [Autenticação com Graphcool](#autentica%C3%A7%C3%A3o-com-graphcool)
  - [Instalando o template](#instalando-o-template)
- [Graphcool - File Management](#graphcool---file-management)
- [Graphcool - Permission Queries](#graphcool---permission-queries)
- [Guarda de rotas no Angular](#guarda-de-rotas-no-angular)

----

# Angular Graphcool Chat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Padrão de mensagem de commit (CHANGELOG automatizados):

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

## Gerando o CHANGELOG do projeto

```sh
npm run release -- --release-as 1.0.0
```

## Referências:
[Standard Version](https://github.com/conventional-changelog/standard-version/blob/master/README.md)

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)

# Baseado no curso

https://github.com/plinionaves/angular-graphcool-chat

# Inciando novo projeto

`ng new angular-graphcoll-chat --style=scss`

# Angular Material

[Material Design components for Angular](https://material.angular.io/)

`ng add @angular/material`

# Sobre GraphQL

- __Type system__: Sistema de tipos que usamos para descrever nossos dados;
- __Queries__: Obtém dados da nossa API (read);
- __Mutations__: Fas alterações nos dados da nossa API (write);
- __Subcriptions__: Permite ouvir mudanças em "tempo real" (real-time);
- __Schema__: Define o "Esquema" da nossa API, pense nele com um container para todos os tipos da nossa API (SDL).

# GraphQL - Documentação, Referências, Artigos

- __Documentação Oficial__: http://graphql.org
- __Referência__: https://howtographql.com
- __Apollo GraphQL__: https://www.apollographql.com
- __Blog Apollo Data__: https://dev-blog.apollodata.com

# Graphcool

Necessário criar uma conta no Graphcool

https://www.graph.cool/

# Instalando o Graphcool

`npm -g i graphcool`

## DOC

https://www.graph.cool/docs/reference/graphcool-cli/commands-aiteerae6l

## Iniciando e criando o projeto backend com Graphcool

Criar dentro do próprio projeto, apenas para estudo. Em projetos oficiais, criar fora do projeto frontend.

Será criado um diretório graphcool dentro do projeto.

`graphcool init graphcool`

# Plugin para Visual Studio - GraphQL for VSCode

[GraphQL for VSCode](https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode)

# Exemplo de chamada para o endpoint GraphQl usando HttpCliente do Angular

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

# Usando o Apollo GraphQl Client

[apollographql.com](https://www.apollographql.com/)

[Docs](https://www.apollographql.com/docs/?no-cache=1)

[Angular Doc](https://www.apollographql.com/docs/angular/)

Já há suporte ao `ng add`

`ng add apollo-angular`

## Apollo Link Error

O Apollo Link é um sistema de componentes modulares para redes GraphQL. 

`npm i -E -S apollo-link-error`

## Apollo Client Devtools

[apollo-client-devtools](https://github.com/apollographql/apollo-client-devtools)


Os devtools aparecem como uma guia "Apollo" no seu inspetor do Google Chrome, ao lado das guias "Elementos" e "Console". Existem atualmente 3 principais características dos devtools:

- __GraphiQL__: Envie consultas para o seu servidor através da interface de rede da Apollo ou consulte o cache da Apollo para ver quais dados são carregados.
- __Inspetor de armazenamento normalizado__: visualize sua loja GraphQL da maneira que o Apollo Client a vê e pesquise por nomes ou valores de campo.
- __Inspetor de consulta assistida__: visualize consultas e variáveis ​​ativas e localize os componentes da interface do usuário associados.

# Modularização no Angular

CoreModule   | SharedModule
--------- | ------
Singleton Services | CommonModule
Single-instance components | FormsModule
O que o AppComponent precisa | Components/Pipes/Directives
 x | Dump Components

## Gerando o CoreModule

- Gera sem modificação:

`ng g m core --dryRun`

- Gera o core:

`ng g m core`

## Gerando o SharedModule

- Gera sem modificação:

`ng g m shared --dryRun`

- Gera o core:

`ng g m shared`

# Novas atualizações com ng update

`ng update`

`ng update @angular/core`

`ng update @angular/material`

# Autenticação com Graphcool

Use os modelos Graphcool para inserir rapidamente a funcionalidade predefinida em seu próprio serviço Graphcool.

(graphcool-templates)[https://github.com/prisma-archive/graphcool-templates]

## Instalando o template

`gcf add-template auth/email-password`

# Graphcool - File Management

https://www.graph.cool/docs/reference/graphql-api/file-management-eer4wiang0

https://www.graph.cool/docs/reference/graphql-api/file-management-eer4wiang0#file-upload-and-permissions

https://www.graph.cool/docs/reference/graphql-api/file-management-eer4wiang0#file-upload-and-permissions

# Graphcool - Permission Queries

https://www.graph.cool/docs/reference/auth/authorization/permission-queries-iox3aqu0ee

# Guarda de rotas no Angular

- __CanActivate__: Intermedia a nagevação para uma rota;
- __CanActiveChild__: intermedia a navegação para uma rota filha;
- __CanDeactivate__: Intermedia a navegação "para fora" da rota atual;
- __CanLoad__: Intermedia a navegação para um módulo "Lazy Loading";
- __Resolve__: Para executar a "recuperação" de dados (ex id) antes de ativar a rota;
