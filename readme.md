##  taskAdmin
<br>

<div align="center">

  <!-- HTML
  <a href="https://www.w3schools.com/tags/tag_doctype.asp" target="_blank">
    <img alt="HTML" src="https://img.shields.io/badge/HTML5%20-USED-%23435FB6">
  </a> -->

  <!-- CSS -->
  <a href="https://devdocs.io/css/" target="_blank">
    <img alt="CSS" src="https://img.shields.io/badge/CSS%20-USED-%232D40D2">
  </a>

  <!-- JavaScript -->
  <a href="https://www.javascript.com/" target="_blank">
    <img alt="JavaScript" src="https://img.shields.io/badge/TypeScript%20-USED-%23FFCF40">
  </a>

  <!-- ReactJS -->
  <a href="https://nodejs.org/en/" target="_blank">
    <img alt="React.js" src="https://img.shields.io/badge/ReactJS%20-USED-%2359c7ee">
  </a>

  <!-- Redux -->
  <a href="https://redux.js.org/" target="_blank">
    <img alt="Redux" src="https://img.shields.io/badge/Redux%20-USED-%23764abc">
  </a>

  <!-- Redux Persist -->
  <a href="https://github.com/rt2zz/redux-persist" target="_blank">
    <img alt="Redux persist" src="https://img.shields.io/badge/ReduxPersist%20-USED-%23835CC2">
  </a>

  <!-- RaioneNascimento -->
  <a href="https://raionenascimento.com.br">
    <img alt="Made by raionenascimento" src="https://img.shields.io/badge/made%20by-raionedeveloper-ed145b">
  </a>

</div>

<h3 align=center>

Move-it é uma aplicação desenvolvida para a empresa **Verzel** durante o processo seletivo.

</h3>

<h1 align=center>
  <img width="1000px"src="./assets/../src/assets/homepage.png" alt="Tela Web"/>
</h1>


## 🔎 **Veja o projeto**
Acesse a aplicação por aqui **[taskAdmin](https://taskadmin.raionenascimento.com.br/).**


## 🚀 **Objetivo**

<p align=justify>

A proposta desse teste é validar os conhecimentos técnicos em desenvolvimento frontend, lógica de programação e
entendimento da demanda do candidato.

**Proposta de solução:**
Desenvolver um sistema para cadastro de tarefas.
Tecnologias obrigatórias:
- React
- Redux
- Redux persist
  

Requisitos:
  - Home page igual a página do github
  - navbar com botão de entrar ou nome do usuário se estiver logado;
  - form de cadastro por cima do banner;
  - form de cadastro deve possuir os campos (nome, email, data de nascimento, cpf, cep, endereço, numero, senha);
  - os campos nome, email, data de nascimento e senha são obrigatórios os outros são opcionais;
  - apenas usuários maiores de 12 anos podem se cadastrar;
  - o campo de CPF deve possuir mascara e validação de CPF;
  - o CEP deve ser validado e possuir autocomplete de endereço;
  - Após logar no sistema:
  - deve exibir uma listagem de tarefas cadastradas;
  - deve possuir um botão para cadastro de novas tarefas;
  - cada registro da listagem deve possuir as ações (editar, excluir, visualizar, concluir)
  - a ação de concluir deve ser apenas para tarefas em aberto (não finalizadas), deve solicitar confirmação para concluir uma
  tarefa;
  - deve solicitar confirmação do usuário para excluir uma tarefa;
  - o cadastro de tarefa deve possuir os campos (nome, data de entrega, data de conclusão);
  - os campos nome e data de entrega são obrigatórios os outros são opcionais;
  - cada usuário logado deve visualizar apenas as suas tarefas;
  - Todos os dados devem ser persistidos no storage do browser;
  - Escrever no readme os detalhes para setup da aplicação;
  - Prazo para entrega 5 dias corridos a partir da data de recebimento do mesmo;
</p>

<br>

### 📑 **Tecnologias utilizadas**

  **Back-end**
  - express
  - nodemon 
  - knex 
  - sqlite3 
  - cors
  - jest (Teste de integração)
  
  **Front-end**
  - axios
  - formik
  - gerador-validador-cpf
  - react
  - react-dom
  - react-icons
  - react-input-mask
  - react-redux
  - react-router-dom
  - react-scripts
  - redux
  - redux-persist
  - web-vitals
  
<br>

### 👨🏽‍💻  **Utilitários**
  - Deploy: **[Vercel](https://vercel.com/)**
  - Editor: **[Visual Studio Code](https://code.visualstudio.com/download)** 
  - Imsomnia: **[Imsomnia](https://insomnia.rest/download/)**
  - Fontes: **[Roboto](https://fonts.google.com/specimen/Roboto)**


### **Configurações Iniciais**

Primeiro, você precisa ter o [Node.js](https://nodejs.org/en/download/) e o [Git](https://git-scm.com/) instalados na sua máquina. 

Se você estiver utilizando o **Linux** ou **MacOS**, você pode optar por instalar o **Node** através do gerênciador de versões através do [link](https://nodejs.org/en/download/package-manager/) para facilitar o processo de mudança da versão quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse [yarn](https://yarnpkg.com/), ou através do [link](https://classic.yarnpkg.com/pt-BR/docs/install/#debian-stable).


## 💾 **Clonando aplicação**

```sh
# Faça o clone dos arquivos:
$ git clone https://github.com/RaioneNascimento/taskAdmin.git

# Acesse a pasta raiz da aplicação:
$ cd taskAdmin
```

## 💽 **Instalação das dependências**

Aqui iremos instalar as dependências contidas nos arquivos `package.json`, que podemos encontrar na raíz do repositório. Para instalar as dependências, basta abrir o terminal dentro de **taskAdmin** e digitar os comandos:

```sh
# Instale as dependencias da API executando o comando:
$ yarn install ou npm i

# Faça a mesma coisa na pasta Frontend:
$ yarn install ou npm i

# Iniciando a api:
# Lembre-se de deixar executando em um terminal a parte.
$ yarn dev ou npm dev

# Iniciando o Website:
$ yarn start ou npm start
```
Para os testes, utilize o comando na API: 

```sh
# Testes de integração 
$ yarn test
```

**“Sua única limitação é você mesmo!”**.


`made with 💜 by raionedeveloper © 2020`
