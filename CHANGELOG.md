# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.1.0"></a>
# [1.1.0](https://github.com/danielso2007/angular-graphcool-chat/compare/v1.0.0...v1.1.0) (2018-12-15)


### Bug Fixes

* Erro ao gravar mensagens repetidas no chache do apollo. ([5bf460f](https://github.com/danielso2007/angular-graphcool-chat/commit/5bf460f))


### Features

* 'Reload' da Query feita na Resolve Guard usando acesso ao cache. ([a97bf50](https://github.com/danielso2007/angular-graphcool-chat/commit/a97bf50))
* Ajustando monitoramento da lista de Chats. ([e2c5020](https://github.com/danielso2007/angular-graphcool-chat/commit/e2c5020))
* Alterando fetchPolicy da lista de mensagens do Chat. ([07abfdb](https://github.com/danielso2007/angular-graphcool-chat/commit/07abfdb))
* Apollo Cache Persist e dica sobre recursos Offline com Apollo. ([09cbc6b](https://github.com/danielso2007/angular-graphcool-chat/commit/09cbc6b))
* Apollo SubscribeToMore: atualizando lista de mensagens recebida e correção de mensagens duplicadas. ([c75f2ed](https://github.com/danielso2007/angular-graphcool-chat/commit/c75f2ed))
* Apollo SubscribeToMore: atualizando lista de mensagens recebida. ([9898954](https://github.com/danielso2007/angular-graphcool-chat/commit/9898954))
* Atualizando lista de Chats do usuário com Subscription Data. ([0b46a3d](https://github.com/danielso2007/angular-graphcool-chat/commit/0b46a3d))
* Atualizando lista de Usuários em tempo real com subscriptions. ([a49574b](https://github.com/danielso2007/angular-graphcool-chat/commit/a49574b))
* Atualizando última mensagem enviada para o Chat. ([21b91b8](https://github.com/danielso2007/angular-graphcool-chat/commit/21b91b8))
* Autenticação com WebSockets. ([373c8a2](https://github.com/danielso2007/angular-graphcool-chat/commit/373c8a2))
* ChatAddGroupComponent para criar novos grupos de conversa. ([52e93d9](https://github.com/danielso2007/angular-graphcool-chat/commit/52e93d9))
* Criado o pipe readFile. ([4952c6f](https://github.com/danielso2007/angular-graphcool-chat/commit/4952c6f))
* FabButton e MatMenu para adicionar novos grupos. ([875c0f7](https://github.com/danielso2007/angular-graphcool-chat/commit/875c0f7))
* fetchPolicy e CachePersistor para ajustar uso do apollo cache persist> ([9e157e8](https://github.com/danielso2007/angular-graphcool-chat/commit/9e157e8))
* Instalando pacotes NPM e configurando WebSocketLink. ([eebd3c4](https://github.com/danielso2007/angular-graphcool-chat/commit/eebd3c4))
* melhorando tratamento de erros quando o token for inváli. ([8bef34d](https://github.com/danielso2007/angular-graphcool-chat/commit/8bef34d))
* Monitorando lista de chats do usuário no ChatTabComponent. ([cea31ef](https://github.com/danielso2007/angular-graphcool-chat/commit/cea31ef))
* Monitorando lista de usuários fora do ChatUsersComponent. ([59a09ea](https://github.com/danielso2007/angular-graphcool-chat/commit/59a09ea))
* Monitorando Query da lista de chats com watchQuery. ([ccedca7](https://github.com/danielso2007/angular-graphcool-chat/commit/ccedca7))
* Otimizando tempo de exibição na tela com Optimistic UI. ([258eb0b](https://github.com/danielso2007/angular-graphcool-chat/commit/258eb0b))
* Scroll automático da tela ao criar novas mensagens. ([e5874fd](https://github.com/danielso2007/angular-graphcool-chat/commit/e5874fd))
* SubscribeToMore: exibindo última mensagem dos chats em tempo. ([6eb76d4](https://github.com/danielso2007/angular-graphcool-chat/commit/6eb76d4))
* SubscribeToMore: exibindo última mensagem dos chats em tempo> ([ced022c](https://github.com/danielso2007/angular-graphcool-chat/commit/ced022c))
* Subscription para receber novas mensagem em tempo real. ([b573c32](https://github.com/danielso2007/angular-graphcool-chat/commit/b573c32))
* Tornando fromNowPipe impuro. ([a0f2f4d](https://github.com/danielso2007/angular-graphcool-chat/commit/a0f2f4d))
* Tratando reconnect para enviar token atualizado. ([e6ce3c6](https://github.com/danielso2007/angular-graphcool-chat/commit/e6ce3c6))
* Tratando unsubscribe por meio de eventos do Roteador do Angular. ([730998f](https://github.com/danielso2007/angular-graphcool-chat/commit/730998f))
* Tratanto multiplos subscribes do ChatTab e nova chamada no Chat. ([d6b7ea2](https://github.com/danielso2007/angular-graphcool-chat/commit/d6b7ea2))
* Usando watchQuery para novas mensagens. ([f99e84b](https://github.com/danielso2007/angular-graphcool-chat/commit/f99e84b))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/danielso2007/angular-graphcool-chat/compare/v0.2.0...v1.0.0) (2018-12-13)


### Bug Fixes

* Correção do parâmetro do método getChatByIdOrUsers. ([1a74240](https://github.com/danielso2007/angular-graphcool-chat/commit/1a74240))


### Features

* Apollo Devtools e normalização do ID no Apollo Cache In Memory. ([ae493f6](https://github.com/danielso2007/angular-graphcool-chat/commit/ae493f6))
* Capturando o Chat no ChatWindowComponent. ([b341440](https://github.com/danielso2007/angular-graphcool-chat/commit/b341440))
* ChatMessageComponent para cada mensagem com Angular CLI. ([6e63bd8](https://github.com/danielso2007/angular-graphcool-chat/commit/6e63bd8))
* ChatService com Angular CLI. ([2ec1087](https://github.com/danielso2007/angular-graphcool-chat/commit/2ec1087))
* ChatService: buscando Chat por id ou por usuários na mesma requ. ([645d01b](https://github.com/danielso2007/angular-graphcool-chat/commit/645d01b))
* ChatWindowComponent para troca de mensagens. ([ca3a26b](https://github.com/danielso2007/angular-graphcool-chat/commit/ca3a26b))
* ChatWindowComponent: interface para enviar novas mensagens. ([a278080](https://github.com/danielso2007/angular-graphcool-chat/commit/a278080))
* Configurando Resolve Guard na rota. ([83da1f0](https://github.com/danielso2007/angular-graphcool-chat/commit/83da1f0))
* Criando ChatModel e MessageModel. ([f0e52bd](https://github.com/danielso2007/angular-graphcool-chat/commit/f0e52bd))
* Criando novo Chat privado ao enviar nova mensagem. ([fbaa461](https://github.com/danielso2007/angular-graphcool-chat/commit/fbaa461))
* Dica: loading antes de exibir o nome. ([438d964](https://github.com/danielso2007/angular-graphcool-chat/commit/438d964))
* Exibindo nome do usuário ou titulo do chat na toolbar. ([59541f7](https://github.com/danielso2007/angular-graphcool-chat/commit/59541f7))
* FromNowPipe para formatar data da mensagem. ([8098deb](https://github.com/danielso2007/angular-graphcool-chat/commit/8098deb))
* FromNowPipe: tratando atrasos e avanços do relógio. ([744125f](https://github.com/danielso2007/angular-graphcool-chat/commit/744125f))
* Graphql Fragments. ([3767356](https://github.com/danielso2007/angular-graphcool-chat/commit/3767356))
* Identificando se o id da rota é do Chat ou do Usuário. ([d6ae0ef](https://github.com/danielso2007/angular-graphcool-chat/commit/d6ae0ef))
* Listando Chats no ChatListComponent ([376d05d](https://github.com/danielso2007/angular-graphcool-chat/commit/376d05d))
* Listando mensagens do Chat no ChatWindowComponent. ([722422f](https://github.com/danielso2007/angular-graphcool-chat/commit/722422f))
* MessageService com Angular CLI. ([94995df](https://github.com/danielso2007/angular-graphcool-chat/commit/94995df))
* Método no ChatService para buscar lista de chats. ([131eb31](https://github.com/danielso2007/angular-graphcool-chat/commit/131eb31))
* Método para criar novas mensagens. ([d9aafe5](https://github.com/danielso2007/angular-graphcool-chat/commit/d9aafe5))
* Ordenando Chats pela última mensagem ou data de criação. ([b2f43e0](https://github.com/danielso2007/angular-graphcool-chat/commit/b2f43e0))
* Otimizando renderização do ngFor com trackByFunction. ([2e11994](https://github.com/danielso2007/angular-graphcool-chat/commit/2e11994))
* Query na API para listar mensagens de determinado Chat. ([c503d10](https://github.com/danielso2007/angular-graphcool-chat/commit/c503d10))
* Usando AvatarComponent na lista de chats e de usuários. ([1349889](https://github.com/danielso2007/angular-graphcool-chat/commit/1349889))
* UserService: método para buscar usuário por id. ([6757bed](https://github.com/danielso2007/angular-graphcool-chat/commit/6757bed))


### BREAKING CHANGES

* Atualização para o angular 7.1.3



<a name="0.2.0"></a>
# [0.2.0](https://github.com/danielso2007/angular-graphcool-chat/compare/v0.1.0...v0.2.0) (2018-12-12)


### Bug Fixes

* Correção do graphql e apollo. ([12b347f](https://github.com/danielso2007/angular-graphcool-chat/commit/12b347f))


### Features

* Adicionando menu no DashboardHeader usando Input Property. ([4b3c408](https://github.com/danielso2007/angular-graphcool-chat/commit/4b3c408))
* Aguardando carregamento da lista de usuários. ([6284cab](https://github.com/danielso2007/angular-graphcool-chat/commit/6284cab))
* Ajustando login e condigurando rota. ([deaa5b8](https://github.com/danielso2007/angular-graphcool-chat/commit/deaa5b8))
* Arquivo auth.graphql para chamada ao endpoitn do graphcool. ([596b1de](https://github.com/danielso2007/angular-graphcool-chat/commit/596b1de))
* Atualização no auth.guard.ts ([b02b8d0](https://github.com/danielso2007/angular-graphcool-chat/commit/b02b8d0))
* Atualizando o statdo de login nas chamadas REST. ([59a11b2](https://github.com/danielso2007/angular-graphcool-chat/commit/59a11b2))
* Autenticação inicial com ReplaySubject. ([3541ebb](https://github.com/danielso2007/angular-graphcool-chat/commit/3541ebb))
* Auto Login no AuthService e chamada no AppComponent. ([679444e](https://github.com/danielso2007/angular-graphcool-chat/commit/679444e))
* AutoLoginGuard com CanActivate para rota de login. ([1cd0563](https://github.com/danielso2007/angular-graphcool-chat/commit/1cd0563))
* Carregando ChatModule com Lazy Loading. ([0c8482d](https://github.com/danielso2007/angular-graphcool-chat/commit/0c8482d))
* ChatListComponent para exibir lista de chats. ([726b96e](https://github.com/danielso2007/angular-graphcool-chat/commit/726b96e))
* ChatModule e ChatRoutingModule com Angular CLI. ([24c25a8](https://github.com/danielso2007/angular-graphcool-chat/commit/24c25a8))
* ChatTabComponent para agrupar seções do Chat. ([1132750](https://github.com/danielso2007/angular-graphcool-chat/commit/1132750))
* ChatUsersComponent para exibir lista de usuários do Chat. ([a6ad2ad](https://github.com/danielso2007/angular-graphcool-chat/commit/a6ad2ad))
* Component para exibir links para outros módulos. ([bbb3063](https://github.com/danielso2007/angular-graphcool-chat/commit/bbb3063))
* Component para Header da aplicação. ([e321db6](https://github.com/danielso2007/angular-graphcool-chat/commit/e321db6))
* Configurando rota interna para o ChatTabComponent. ([ab11d8d](https://github.com/danielso2007/angular-graphcool-chat/commit/ab11d8d))
* Configurando rotas e router outlet para lista de usuários e chats. ([66c86bb](https://github.com/danielso2007/angular-graphcool-chat/commit/66c86bb))
* Content Project e Output Property no DashboardResources. ([40ae369](https://github.com/danielso2007/angular-graphcool-chat/commit/40ae369))
* Criado o arquivo AuthGuard. ([09e9f53](https://github.com/danielso2007/angular-graphcool-chat/commit/09e9f53))
* Criando a tela de login. ([34a555f](https://github.com/danielso2007/angular-graphcool-chat/commit/34a555f))
* DashboardHomeComponent para apresentação do módulo ([8688273](https://github.com/danielso2007/angular-graphcool-chat/commit/8688273))
* DashboardHomeComponent para apresentação do módulo. ([1312fd0](https://github.com/danielso2007/angular-graphcool-chat/commit/1312fd0))
* DashboardModule e DashboardRoutingModule com Angular CLI. ([1c24165](https://github.com/danielso2007/angular-graphcool-chat/commit/1c24165))
* Desenvolvimento do Authorization intercept. ([6c567bf](https://github.com/danielso2007/angular-graphcool-chat/commit/6c567bf))
* Exempl ode inject. ([cfed7c0](https://github.com/danielso2007/angular-graphcool-chat/commit/cfed7c0))
* Exibindo NoRecordComponent condicionalmente. ([6f1d2b8](https://github.com/danielso2007/angular-graphcool-chat/commit/6f1d2b8))
* Finalizado rememberMe. ([234a814](https://github.com/danielso2007/angular-graphcool-chat/commit/234a814))
* Gerando LoginModule e LoginRoutingModule. ([7d9d59c](https://github.com/danielso2007/angular-graphcool-chat/commit/7d9d59c))
* ID do usuário logado no AuthService. ([af375d3](https://github.com/danielso2007/angular-graphcool-chat/commit/af375d3))
* Implementando keepSigned e rememberMe. ([f17427d](https://github.com/danielso2007/angular-graphcool-chat/commit/f17427d))
* Implementando método para logout. ([8094b25](https://github.com/danielso2007/angular-graphcool-chat/commit/8094b25))
* Listando usuários no ChatUsersComponent. ([f846113](https://github.com/danielso2007/angular-graphcool-chat/commit/f846113))
* Manipulando título da aplicação no Header. ([87241b3](https://github.com/danielso2007/angular-graphcool-chat/commit/87241b3))
* Método para buscar usuários cadastrados com Query allUsers. ([6fd6db8](https://github.com/danielso2007/angular-graphcool-chat/commit/6fd6db8))
* Método para cadastrar novos usuários na API GraphQL. ([2338dbc](https://github.com/danielso2007/angular-graphcool-chat/commit/2338dbc))
* **Ajuste inicial:** ID do usuário logado no AuthService. ([00557eb](https://github.com/danielso2007/angular-graphcool-chat/commit/00557eb))
* **test:** Criado serviço de autenticação de usuário. ([4a8936e](https://github.com/danielso2007/angular-graphcool-chat/commit/4a8936e))
* Método para validar token do usuário. ([8ffeb4c](https://github.com/danielso2007/angular-graphcool-chat/commit/8ffeb4c))
* NoRecordComponent para mensagem de lista vazia. ([68a7849](https://github.com/danielso2007/angular-graphcool-chat/commit/68a7849))
* Omitindo usuário logado da lista. ([0a4eb0c](https://github.com/danielso2007/angular-graphcool-chat/commit/0a4eb0c))
* Organizando AppComponent e CoreModule. ([6df98bf](https://github.com/danielso2007/angular-graphcool-chat/commit/6df98bf))
* StorageKeys para salvar informações no Local Storage. ([8dde04d](https://github.com/danielso2007/angular-graphcool-chat/commit/8dde04d))
* UserService com Angular CLI. ([d721df4](https://github.com/danielso2007/angular-graphcool-chat/commit/d721df4))



<a name="0.1.0"></a>
# 0.1.0 (2018-12-02)


### Bug Fixes

* Implementando a Permission Query. Ajuste no User.read. ([4785371](https://github.com/danielso2007/angular-graphcool-chat/commit/4785371))
* Operation authenticated para o Chat. ([1bade21](https://github.com/danielso2007/angular-graphcool-chat/commit/1bade21))
* Permissoes para relacionamento entre tipos. Ajuste no MessagesOnUser. ([dfa6fb1](https://github.com/danielso2007/angular-graphcool-chat/commit/dfa6fb1))


### Features

* Adicionado o Angular Material e documentação no README.md. ([b075d68](https://github.com/danielso2007/angular-graphcool-chat/commit/b075d68))
* ApolloClient Dev Tools. ([ef18326](https://github.com/danielso2007/angular-graphcool-chat/commit/ef18326))
* ApolloClient: Criando novo registro com Mutations. ([abdb0fa](https://github.com/danielso2007/angular-graphcool-chat/commit/abdb0fa))
* ApolloClient: Testando comunicação por meio de Queries. ([695d65f](https://github.com/danielso2007/angular-graphcool-chat/commit/695d65f))
* Configurando o Apollo Client. ([f361013](https://github.com/danielso2007/angular-graphcool-chat/commit/f361013))
* Configurtação e documentação do Graphcool. ([be7628d](https://github.com/danielso2007/angular-graphcool-chat/commit/be7628d))
* CoreModule e SharedModule. ([22e8c94](https://github.com/danielso2007/angular-graphcool-chat/commit/22e8c94))
* Definindo permissões para Chat. ([00c9916](https://github.com/danielso2007/angular-graphcool-chat/commit/00c9916))
* Definindo permissões para File. ([2cfdaf5](https://github.com/danielso2007/angular-graphcool-chat/commit/2cfdaf5))
* Definindo permissões para Message. ([2d4b1db](https://github.com/danielso2007/angular-graphcool-chat/commit/2d4b1db))
* Definindo permissões para User. ([4c47499](https://github.com/danielso2007/angular-graphcool-chat/commit/4c47499))
* Exemplo de consulta ao Graphcool usando HttpClient. ([0b3c031](https://github.com/danielso2007/angular-graphcool-chat/commit/0b3c031))
* Exemplo de utilização de mutation usando HttpCliente do Angular. ([ce4c6d6](https://github.com/danielso2007/angular-graphcool-chat/commit/ce4c6d6))
* First commit. ([84e59b3](https://github.com/danielso2007/angular-graphcool-chat/commit/84e59b3))
* Identificando usuário logado com loggedInUser. ([7f30530](https://github.com/danielso2007/angular-graphcool-chat/commit/7f30530))
* Implementando a Permission Query. ([aec7fe0](https://github.com/danielso2007/angular-graphcool-chat/commit/aec7fe0))
* Implementando authenticateUser. ([54b9c42](https://github.com/danielso2007/angular-graphcool-chat/commit/54b9c42))
* Implementando signupUser e gerando tokens. ([8458b7d](https://github.com/danielso2007/angular-graphcool-chat/commit/8458b7d))
* Manipulando erros com Apollo Link Error. ([accff13](https://github.com/danielso2007/angular-graphcool-chat/commit/accff13))
* Modelando o Chat no Graphcool. ([bf8acb6](https://github.com/danielso2007/angular-graphcool-chat/commit/bf8acb6))
* Permissoes para relacionamento entre tipos. ([621c9fd](https://github.com/danielso2007/angular-graphcool-chat/commit/621c9fd))
* Testes dos componentes do Angular Material. ([2329001](https://github.com/danielso2007/angular-graphcool-chat/commit/2329001))
* Travis-ci instalado e configurado. ([5b9df76](https://github.com/danielso2007/angular-graphcool-chat/commit/5b9df76))
* Usando templates com Graphcool CLI. ([dabdd53](https://github.com/danielso2007/angular-graphcool-chat/commit/dabdd53))
