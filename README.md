# CRUD de Produtos

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Docker](https://www.docker.com/products/docker-desktop) (para executar o PostgreSQL)
- [Docker Compose](https://docs.docker.com/compose/install/) (para orquestrar os contêineres Docker)

## Configuração do Backend

Para começar, siga os passos abaixo:

- **Clonar o projeto:**
  ```bash
  git clone https://github.com/Kassiaavieira/products-backend.git

- **Crie um Arquivo .env**
  Crie um arquivo .env na raiz do projeto products-backend e adicione suas variáveis de ambiente. Exemplo de conteúdo:
  ```bash
  POSTGRES_USER=postgres
  POSTGRES_PASSWORD=postgres
  POSTGRES_DB=products_db

- **Instalação de Dependências:**
  ```bash
  npm install
  # ou
  yarn
- **Execute o Docker Compose**
    ```bash
    docker-compose up -d
- **Crie as Tabelas no Banco de Dados**
    ```bash
    npx sequelize-cli db:migrate
- **Executar em Ambiente de Desenvolvimento e Compilar para Produção:**
    ```bash
    npm run start:dev

    # Compilar para Produção
    npm run build
    yarn build
- **Iniciar Servidor de Produção:**
    ```bash
    npm start
    yarn start