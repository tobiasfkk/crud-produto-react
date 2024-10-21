# Sistema de Gerenciamento de Produtos

Este é um sistema web simples para gerenciar produtos, permitindo inserir, atualizar, buscar e listar produtos. O projeto é construído usando React e Axios para consumir uma API REST.

###  API disponível em:
```sh
    https://github.com/tobiasfkk/crud-produto-spring-boot
```

## Funcionalidades

- **Inserir Produto**: Permite inserir um novo produto com nome e preço.
- **Buscar Produto por ID**: Permite buscar um produto pelo seu ID.
- **Atualizar Produto por ID**: Permite atualizar o nome e preço de um produto pelo seu ID.
- **Listar Todos os Produtos**: Exibe uma lista de todos os produtos.

## Estrutura do Projeto

- `src/App.js`: Componente principal que configura as rotas e o layout do aplicativo.
- `src/App.css`: Arquivo de estilos CSS para o layout e componentes.
- `src/components/InsertProduct.js`: Componente para inserir um novo produto.
- `src/components/GetProductById.js`: Componente para buscar um produto pelo ID.
- `src/components/UpdateProductById.js`: Componente para atualizar um produto pelo ID.
- `src/components/ProductList.js`: Componente para listar todos os produtos.

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd seu-repositorio
    ```

3. Instale as dependências:
    ```sh
    npm install
    ```

4. Inicie o servidor de desenvolvimento:
    ```sh
    npm start
    ```

## Uso

1. Abra o navegador e acesse `http://localhost:3000`.
2. Use o menu lateral para navegar entre as funcionalidades:
    - **Inserir Produto**: Preencha os campos e clique em "Inserir".
    - **Buscar Produto por ID**: Insira o ID do produto e clique em "Buscar".
    - **Atualizar Produto por ID**: Preencha os campos e clique em "Atualizar".
    - **Listar Todos os Produtos**: Veja a lista de todos os produtos.

## API

A aplicação consome uma API REST disponível em `http://localhost:8080/api/produtos`. As rotas utilizadas são:

- `POST /api/produtos`: Insere um novo produto.
- `GET /api/produtos/:id`: Busca um produto pelo ID.
- `POST /api/produtos/updateProdutoById`: Atualiza um produto pelo ID.
- `GET /api/produtos/returnAllProdutos`: Retorna todos os produtos.