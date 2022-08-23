# challenge-backend-devio

## 📝 Descrição

Este é um projeto de api para um restaurante de fast-food criar e administrar os pedidos de seus clientes. Dentre as suas várias funções estão a visualização de produtos mais vendidos, a listagem de todos os pedidos em aberto e a inserção de vários tipos de pagamento.


## 🚀 Começando

Abaixo estão as instruções para rodar o projeto na sua máquina local, para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

É necessário o gerenciador de pacotes npm para seguir este passo a passo.

```sh
  npm install npm@latest -g
```

### 🔧 Rodando o projeto

Para instalar o projeto na sua máquina, siga os passos abaixo:

1. Clone o repositório na sua máquina:
```sh
   git clone https://github.com/https://github.com/lmtfn/challenge-backend-devio
```
2. Instale os pacotes NPM:
```sh
   npm install
```
3. Crie uma cópia do arquivo .envExample na raiz do projeto, chame-a de .env e insira nela os dados do banco de dados que você quer utilizar: 
```js
    DB_HOST = Nome ou link do servidor (exemplo: localhost)
    DB_USER = Usuário
    DB_PASS = Senha
    DB_NAME = Nome da base de dados
    DB_PORT = Porta
```
4. Com a conexão feita, crie a base de dados dentro do seu servidor:
```sh
   npx sequelize-cli db:create
```
5. Transpile os arquivos:
```sh
   npm run build
```
6. Crie as tabelas dentro do seu banco de dados:
```sh
   npm run setup:dev
```
7. Por fim, rode ligue o servidor:
```sh
   npm run dev
```

Com o servidor rodando, acesse plataformas como Postman ou Insomnia para fazer testes manuais e acessar dados da base de dados.


## ⚙️ Executando os testes

Foram feitos testes para cada endpoint do projeto. Eles podem ser rodados com o comando:
```sh  
   npm run test
```


## 💻 Usando a api

_Entenda como usar cada endpoint da documentação através da [Documentação](https://example.com)_


## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* TypeScript
* JavaScript
* NodeJs
* Sequelize
* Express
