# PrepEnEm - Plataforma de Estudos

Uma plataforma moderna de estudos para preparação para ENEM e Fuvest, com API backend em Node.js/Express e frontend estático em HTML/CSS/JS.

## Estrutura do Projeto

```
PrepEnem/
├── frontend/                        # Arquivos estáticos do frontend (camada de apresentação)
│   ├── inicio/                      # Páginas iniciais
│   │   ├── index.html               # Página inicial com hero, recursos e modal de login (conectado à API)
│   │   ├── cadastro.html            # Página de cadastro (conectado à API)
│   │   ├── style.css                # Estilos da página inicial
│   │   └── cadastro.css             # Estilos da página de cadastro
│   ├── menu/                        # Dashboard
│   │   ├── menu.html                # Tela principal com módulos e dicas de saúde
│   │   ├── menu.css                 # Estilos do dashboard
│   │   └── menu.js                  # JS específico do dashboard (acordeão de dicas, navegação)
│   ├── assets/                      # Recursos estáticos compartilhados
│   │   ├── css/
│   │   │   └── styles.css           # CSS compartilhado (variáveis, sidebar, header, footer, layout)
│   │   ├── js/
│   │   │   ├── main.js              # JS compartilhado (toggle da sidebar, LessonProgress, QuizManager)
│   │   │   └── api-client.js        # Cliente API para comunicação frontend-backend (JWT)
│   │   └── img/                     # Imagens e mídia
│   ├── cienciasdanatureza/          # Módulo de Ciências da Natureza (Biologia)
│   │   ├── natureza.html            # Página do módulo (5 aulas, desbloqueio progressivo)
│   │   └── questão1.html - questão5.html  # Páginas de exercícios
│   ├── matematica/                  # Módulo de Matemática
│   │   └── matematica.html          # Página unificada: 5 tópicos + quizzes + progressão
│   ├── portugues/                   # Módulo de Português (Linguagens)
│   ├── humanas/                     # Módulo de Ciências Humanas (História/Geografia)
│   ├── lingua_estrangeira/          # Módulo de Língua Estrangeira
│   ├── redacao/                     # Seção de Redação
│   ├── perfil/                      # Perfil do usuário
│   │   └── perfil.html              # Perfil com ranking, desafios e conquistas
│   └── "pagina inicial/"            # Página inicial alternativa
├── backend/                         # API Backend (Node.js + Express)
│   ├── server.js                    # Servidor Express (API + arquivos estáticos)
│   ├── package.json                 # Dependências do backend
│   ├── .env                         # Variáveis de ambiente (JWT secret, porta, CORS)
│   ├── .gitignore                   # Ignora node_modules
│   ├── src/
│   │   ├── data/
│   │   │   ├── users.js             # Usuários no MySQL (senhas com bcrypt)
│   │   │   ├── modules.js           # Definições de módulos e aulas
│   │   │   ├── questions.js         # 110 questões extraídas dos arquivos HTML
│   │   │   └── healthTips.js        # Dicas de saúde e bem-estar
│   │   ├── middleware/
│   │   │   └── auth.js              # Geração de tokens JWT e proteção de rotas
│   │   └── routes/
│   │       ├── auth.js              # POST /api/auth/register, POST /api/auth/login, GET /api/auth/me
│   │       ├── modules.js           # GET /api/modules, /api/modules/:id, /lessons/:id
│   │       ├── questions.js         # GET /api/questions/:moduleId/:lessonId, POST /submit
│   │       ├── progress.js          # GET/POST /api/progress/:moduleId (protegido por JWT)
│   │       ├── healthTips.js        # GET /api/health-tips, /api/health-tips/:id
│   │       ├── ranking.js           # GET /api/ranking
│   │       └── achievements.js      # GET /api/achievements, /challenges, /badges
│   └── data/                        # Diretório de dados em tempo de execução
├── .vscode/                         # Configuração do VS Code
└── README.md                        # Este arquivo
```

## Arquitetura

### Backend API
- **Node.js + Express** — API REST na porta 3000
- **Autenticação JWT** — tokens com expiração de 7 dias
- **bcryptjs** — hash de senhas
- **CORS** — habilitado para comunicação com o frontend
- **MySQL 8** — usuários de login/cadastro persistidos no banco `prepenem` (`mysql2/promise`)
- Progresso das aulas de redação em MySQL (`prepenem.redacao_progress`); questões e demais dados continuam em memória
- **110 questões** de quiz extraídas dos arrays JavaScript embutidos nos HTMLs e servidas via API

### Frontend
- HTML/CSS/JS estático servido a partir de `frontend/`
- `api-client.js` fornece a classe `PrepEnemAPI` (exposta globalmente em `window`) para comunicação transparente com o backend
- Formulários de login e cadastro agora chamam a API em vez de usar links estáticos
- Tokens JWT armazenados no `localStorage` (`prepenem_token`, `prepenem_user`)
- `main.js` original continua lidando com toggle da sidebar, progresso de aulas e renderização de quizzes

## Endpoints da API

| Método | Endpoint | Descrição | Auth |
|--------|----------|-------------|------|
| GET    | `/api/health`             | Verificação de status         | Não  |
| POST   | `/api/auth/register`      | Registrar novo usuário        | Não  |
| POST   | `/api/auth/login`         | Login com email e senha       | Não  |
| GET    | `/api/auth/me`            | Obter perfil do usuário atual | Sim  |
| GET    | `/api/modules`            | Listar todos os módulos       | Não  |
| GET    | `/api/modules/:id`        | Detalhes de um módulo         | Não  |
| GET    | `/api/modules/:id/lessons`| Listar aulas de um módulo     | Não  |
| GET    | `/api/questions/:m/:l`    | Obter questões de um quiz     | Não  |
| POST   | `/api/questions/:m/:l/submit` | Enviar respostas do quiz | Não  |
| GET    | `/api/progress`           | Obter todo o progresso        | Sim  |
| POST   | `/api/progress/:moduleId` | Salvar progresso de módulo    | Sim  |
| GET    | `/api/health-tips`        | Listar dicas de saúde         | Não  |
| GET    | `/api/health-tips/:id`    | Obter uma dica específica     | Não  |
| GET    | `/api/ranking`            | Obter ranking de usuários     | Não  |
| GET    | `/api/achievements`       | Listar conquistas + desafios  | Não  |
| GET    | `/api/achievements/challenges` | Listar desafios apenas     | Não  |
| GET    | `/api/achievements/badges`  | Listar emblemas apenas      | Não  |
| GET    | `/api/redacao/content`      | Conteúdo dos módulos/aulas (sem login) | Não  |
| GET    | `/api/redacao/modules`      | Módulos/aulas + progresso do aluno | Sim  |
| GET    | `/api/redacao/progress`     | Resumo do progresso em redação | Sim  |
| POST   | `/api/redacao/lessons/:lessonId/complete` | Marcar/desmarcar aula | Sim  |
| POST   | `/api/redacao/modules/:moduleId/complete` | Concluir/desfazer módulo inteiro | Sim  |

## Como Começar

Na raiz do projeto:

```bash
npm install     # instala as dependências do back end automaticamente (postinstall)
npm run db:setup # cria o banco MySQL (ou execute backend/sql/schema.sql no Workbench)
npm start       # inicia o servidor na porta 3000
```

Se preferir trabalhar apenas dentro de `backend/`:

```bash
cd backend
npm install
npm start            # Inicia o servidor na porta 3000
# ou: node server.js
```

### Frontend

1. Inicie o backend primeiro (veja acima).
2. Acesse `http://localhost:3000` (o próprio servidor entrega o frontend) ou use o Live Server (qualquer porta local, inclusive a padrão 5500).
3. Se usar o Live Server, clique com o botão direito em `frontend/index.html` e selecione "Open with Live Server".
4. Cadastre uma nova conta ou faça login com as credenciais de teste:
   - Email: `matheus@prepenem.com`
   - Senha: `123456`

## Login e cadastro (`frontend/index.html`)

Os formulários da página inicial enviam os dados para a API em `http://localhost:3000/api`.

### Cadastro — `POST /api/auth/register`

```json
{ "name": "Ana Souza", "email": "ana@teste.com", "password": "senha123", "goal": "Fuvest", "terms": true }
```

- Senha: mínimo de 8 caracteres, com letras e números.
- E-mail já cadastrado retorna `409`.
- Sucesso retorna `201` com `user` (sem senha) e `token`.
- O frontend salva esse token e os dados do usuário e oferece **"Começar a estudar"**, entrando no app já com a conta recém-criada.
- O `menu.html` exibe o nome/email reais do usuário logado (via `prepenem_user` e `GET /api/auth/me`); o botão **Sair** encerra a sessão e volta para `index.html`.

### Login — `POST /api/auth/login`

```json
{ "email": "ana@teste.com", "password": "senha123", "remember": true }
```

- `remember: true` → token por 30 dias, salvo no `localStorage`.
- `remember: false` → token por 1 dia, salvo no `sessionStorage`.
- Sucesso retorna `200` com `user` e `token`; credenciais inválidas retornam `401`.
- Após o login, o navegador é redirecionado para `menu.html` (relativo à página atual).

### Perfil — `GET /api/auth/me`

Enviar o header `Authorization: Bearer <token>`.

> Usuários ficam persistidos no MySQL (`prepenem.users`). Questões e demais dados continuam em memória.

## Redação — módulos de aprendizagem

A tela `frontend/Redacao.html` carrega os 6 módulos e as 21 aulas a partir da API. Todos os módulos ficam liberados; o que muda é o progresso do aluno (`concluida`, `atual` ou `nao-iniciada`), calculado no backend a partir das aulas concluídas.

- `GET /api/redacao/content` → devolve módulos e aulas sem exigir login (a página abre mesmo sem token).
- `GET /api/redacao/modules` → devolve módulos, aulas e o resumo `progress` do aluno logado.
- `POST /api/redacao/lessons/aula-1-1/complete` com `{"completed": true}` (ou `false` para desmarcar) → salva no MySQL e devolve o progresso atualizado.
- `POST /api/redacao/modules/modulo-1/complete` com `{"completed": true}` → conclui o módulo inteiro de uma vez. Quando todas as aulas de um módulo são concluídas, o backend devolve `completed: true` e `completedAt`, e o card do módulo exibe o selo **Concluído**.
- `GET /api/redacao/progress` → somente o resumo (totais, percentual, próxima aula e última atividade).

Para **salvar** o progresso é necessário estar logado: o frontend envia `Authorization: Bearer <token>`. Sem login, os módulos ainda aparecem, mas "Marcar como concluída" pede login. As redações em si (rascunhos, fotos e notas) continuam salvas no `localStorage` (`prepenem-redacao`).

A tabela `redacao_progress` é criada por `npm run db:setup` (ou executando `backend/sql/schema.sql` novamente no Workbench).

## Banco de dados (MySQL)

### Opção 1 — MySQL Workbench
1. Abra a conexão **Local instance MySQL80** (`localhost:3306`, usuário `root`).
2. Menu `File > Open SQL Script...` e selecione `backend/sql/schema.sql`.
3. Execute (`⚡`). O script cria o banco `prepenem`, a tabela `users`, o usuário `prepenem_app` e 3 usuários de teste (senha `123456`).

### Opção 2 — linha de comando

```bash
npm run db:setup     # usa DB_ROOT_PASSWORD do backend/.env
```

### Configuração (`backend/.env`)

```
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=prepenem_app
DB_PASSWORD=prepenem123
DB_NAME=prepenem
DB_ROOT_PASSWORD=<senha do root, usada apenas pelo db:setup>
```

A aplicação usa o usuário `prepenem_app` (permissões apenas de SELECT/INSERT/UPDATE/DELETE em `prepenem.*`). A senha do `root` não é usada em tempo de execução.

## Paleta de Cores

| Variável               | Valor    | Uso                              |
|------------------------|----------|----------------------------------|
| `--primary-blue`       | #4169E1  | Cabeçalho, sidebar, botões, links|
| `--primary-blue-dark`  | #3155b9  | Estados de hover em botões       |
| `--secondary-green`    | #00CC99  | Estados de sucesso/conclusão     |
| `--enem-yellow`        | #FBCB0A  | Texto "ENEM", acentos, rodapé     |
| `--text-dark`          | #333     | Texto primário                    |
| `--text-light`         | #fff     | Texto claro em fundos escuros    |
| `--locked-gray`        | #ccc     | Lições/itens bloqueados           |

## Navegação entre Módulos

- Comece em `frontend/inicio/index.html` (página inicial)
- Clique "ENTRAR E ESTUDAR" ou "Quero estudar!" para se cadastrar/logar via API
- Após autenticação, acesse `frontend/menu/menu.html` (dashboard)
- Clique "Acessar" em qualquer módulo para entrar na página de aulas
- Complete aulas para desbloquear exercícios (progresso salvo no localStorage)

## Módulos

1. **Linguagens, Códigos e suas Tecnologias** (`portugues/`) — Língua Portuguesa
2. **Matemática e suas Tecnologias** (`matematica/`) — Matemática
3. **Ciências da Natureza e suas Tecnologias** (`cienciasdanatureza/`) — Biologia
4. **Língua Estrangeira** (`lingua_estrangeira/`) — Inglês/Espanhol
5. **Ciências Humanas e suas Tecnologias** (`humanas/`) — História/Geografia
