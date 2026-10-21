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
│   │   │   ├── users.js             # Banco de usuários em memória (senhas com bcrypt)
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
- Bancos de dados em memória (substitua por um banco real em produção)
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

## Como Começar

### Backend

```bash
cd backend
npm install
npm start            # Inicia o servidor na porta 3000
# ou: node server.js
```

### Frontend

1. Inicie o backend primeiro (veja acima).
2. Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) do VS Code.
3. Clique com o botão direito em `frontend/inicio/index.html` e selecione "Open with Live Server".
4. Cadastre uma nova conta ou faça login com as credenciais de teste:
   - Email: `matheus@prepenem.com`
   - Senha: `123456`

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
