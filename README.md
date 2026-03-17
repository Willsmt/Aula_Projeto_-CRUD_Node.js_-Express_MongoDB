
---

# 🚀 Projeto CRUD Node.js com Express & MongoDB

Este é um projeto de estudo completo que abrange desde a manipulação básica de arquivos com o módulo nativo `fs` até a criação de uma API robusta com **Node.js**, **Express**, **EJS** e **Mongoose**.



## 📋 Funcionalidades

* **API REST**: Endpoints para Criar, Ler, Atualizar e Deletar usuários (CRUD).
* **Banco de Dados**: Conexão com MongoDB Atlas usando Mongoose.
* **SSR (Server Side Rendering)**: Renderização de visualizações dinâmicas utilizando o motor de busca **EJS**.
* **Middlewares**: Log de requisições personalizado.
* **File System**: Scripts de exemplo para manipulação de pastas e arquivos de forma assíncrona.

## 🛠️ Tecnologias Utilizadas

* **Runtime:** Node.js
* **Framework Web:** Express
* **Banco de Dados:** MongoDB (via Mongoose)
* **Template Engine:** EJS
* **Variáveis de Ambiente:** Dotenv

## 📂 Estrutura do Projeto

```text
├── src/
│   ├── database/
│   │   └── connect.js     # Configuração da conexão com MongoDB
│   ├── models/
│   │   └── user.model.js  # Schema do Usuário (Mongoose)
│   └── views/
│       ├── INDEX.ejs      # Página principal de listagem
│       └── partials/      # Componentes reutilizáveis (head, navbar)
├── modules/
│   └── express.js         # Configuração das rotas e servidor Express
├── index.js               # Ponto de entrada (Main)
└── .env                   # Variáveis sensíveis (não enviado ao Git)
```

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do projeto e adicione suas credenciais:
    ```env
    MONGODB_USERNAME=seu_usuario
    MONGODB_PASSWORD=sua_senha
    ```

4.  **Inicie o servidor:**
    ```bash
    npm start
    ```
    O servidor estará rodando em `http://localhost:8080`!

## 🛣️ Endpoints da API

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **GET** | `/users` | Retorna todos os usuários (JSON) |
| **POST** | `/users` | Cria um novo usuário |
| **PATCH** | `/users/:id` | Atualiza um usuário pelo ID |
| **DELETE** | `/users/:id` | Remove um usuário pelo ID |
| **GET** | `/views/users` | Renderiza a página HTML com a lista de usuários |

---

### 📝 Próximos Passos (Melhorias sugeridas)
* [ ] Adicionar validação de dados com `Joi` ou `Zod`.
* [ ] Implementar criptografia de senhas com `bcrypt`.
* [ ] Adicionar tratamento de erros global.

---
