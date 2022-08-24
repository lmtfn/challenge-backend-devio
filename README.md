# challenge-backend-devio: Fast Food

## 📝 Descrição

Este é um projeto de API para um restaurante de fast food, voltado para a gestão de pedidos de clientes. Dentre as suas várias funções estão a visualização de produtos mais vendidos, a listagem de todos os pedidos em aberto e a inserção de vários tipos de pagamento. Esta API pode ser acessada através do link: [Fast Food - lmtfn](https://challenge-devio-lmtfn.herokuapp.com/). 

_O deploy foi feito através da plataforma Heroku e a base de dados está armazenada na AWS. É importante ressaltar que este projeto foi feito com banco de dados relacional (linguagem SQL)._


## 🚀 Começando

Abaixo estão as instruções para rodar o projeto na sua máquina local, para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

É necessário ter o gerenciador de pacotes NPM para seguir este passo a passo.

```sh
  npm install npm@latest -g
```

### 🔧 Rodando o projeto

Para instalar o projeto na sua máquina, siga os passos abaixo:

1. Clone o repositório na sua máquina:
```sh
   git clone https://github.com/lmtfn/challenge-backend-devio.git
```
2. Instale os pacotes NPM:
```sh
   npm install
```
3. Crie uma cópia do arquivo _.envExample_ na raiz do projeto, chame-a de _.env_ e insira nela os dados do banco de dados que você quer utilizar: 
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
6. Crie as tabelas dentro do seu banco de dados e adicione dados a elas:
```sh
   npm run setup:dev
```
7. Por fim, ligue o servidor:
```sh
   npm run dev
```

Com o servidor rodando, acesse plataformas como Postman ou Insomnia para fazer testes manuais e acessar dados da base de dados.


## ⚙️ Executando os testes

Foram feitos testes para cada endpoint do projeto. Eles podem ser rodados com o comando:
```sh  
   npm run test
```


## 💻 Usando a API

_Entenda como usar cada endpoint da documentação através da [Documentação](https://documenter.getpostman.com/view/21580193/VUqrPHWX)_


## 🛠️ Construído com

Principais ferramentas usadas no projeto:

* TypeScript
* JavaScript
* NodeJs
* Sequelize
* Express

## ✒️ Autora

Laura Neves - [LinkedIn](https://www.linkedin.com/in/laura-neves-26908346/) - [GitHub](https://github.com/lmtfn)
