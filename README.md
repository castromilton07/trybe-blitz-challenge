# Boas Vindas ao Repositório App Ebyrt ToDo List
### [trybe-blitz-challenge]

---
## Contexto do Projeto

Este projeto consiste em desafio técnico para uma vaga de Desenvolvedor Full-Stack na empresa Ebyrt, e foi motivado por uma necessidade da empresa em aumentar a produtividade de seus colaboradores e proporcionar uma melhor organização de suas tarefas individuais.
A ideia central consistia em desenvolver um app de lista de tarefas (ToDo List) que permite:
- Visualizar as tarefas;
    - Permitir a ordenação de forma ascendente e descendente por: Título, Status e Data de Criação.
- Criar novas tarefas;
- Remover uma tarefa;
- Atualizar o status de uma tarefa.
A aplicação precisava ser desenvolvida na Stack principal da empresae, MERN (Mongo-Express-React-Node) utilizando o conceito de arquitetura em camadas.

---
## Como instalar

### Pre-requisitos:
- node e NPM (gerenciador de pacotes do node)
- mongoDB (estar com o serviço do MongoDB inicializado)
Ex Linux: `mongod --dbpath ~/data/db`

1. Clone o repositório (HTTPS ou SSH) e entrar na pasta do projeto
- HTTPS `git clone https://github.com/castromilton07/trybe-blitz-challenge.git`
- SSH `git clone git@github.com:castromilton07/trybe-blitz-challenge.git`.
- `cd trybe-blitz-challenge`

2. Instalar dependências e iniciar o Back-end
    - A partir da raiz do projeto:
- `cd back-end`
- `npm install`
- `npm start`

3. Instalar dependências e iniciar o Front-end
    - A partir da raiz do projeto:
- `cd front-end`
- `npm install`
- `npm start`

Obs.:
- O back-end está configurado para rodar na porta 3001. Caso deseje utilizar outra porta utilize o arquivo `.env.example` para trocar para a porta desejada. Após a alteração renomeie o arquivo para `.env`
- O front-end está configurado por padrão para rodar na porta 3000.

---
## Rotas do Back-end
    - Ex: http://localhost:3001/tasks -> GET: Listar todas as tarefas
- CRUD
    -  `/tasks` [`GET`]  Listar todas as tarefas
    -  `/tasks` [`POST`]  Criar uma nova tarefa
        - Passar no body do JSON: title, status e createdAt  
    -  `/tasks/:id` [`GET`]  Listar uma tarefa específica através do ID
    -  `/tasks` [`PUT`]  Atualizar uma tarefa específica através do ID
        - Passar no body do JSON: title e status ou somente o status
    - `/tasks/:id` [`DELETE`]  Deletar uma tarefa específica através do ID
    - `/tasks/clear` [`DELETE`]  Deletar todas as tarefas
- Ordenação
    -  `/tasks/title/asc` [`GET`]  Lista em ordem Ascendente por Title
    -  `/tasks/title/desc` [`GET`]  Lista em ordem Descendente por Title
    -  `/tasks/status/asc` [`GET`]  Lista em ordem Ascendente por Status
    -  `/tasks/status/desc` [`GET`]  Lista em ordem Descendente por Status
    -  `/tasks/created/asc` [`GET`]  Lista em ordem Ascendente por CreatedAt
    -  `/tasks/created/desc` [`GET`]  Lista em ordem Descendente por CreatedAt

---
## Deploy da aplicação no Heroku
- Front-end
    -  [Ebyrt ToDo List Front-end](https://todo-list-fe-castromilton07.herokuapp.com)
        - https://todo-list-fe-castromilton07.herokuapp.com
<p align="center">
  <img src="https://bit.ly/EbyrtToDoListFrontEnd" alt="Imagem Ilustrativa do Front-end" width="600px">
</p>

- Back-end
    -  [Ebyrt ToDo List Back-end](https://todo-list-be-castromilton07.herokuapp.com/tasks)
        - https://todo-list-be-castromilton07.herokuapp.com/tasks
<p align="center">
  <img src="https://bit.ly/EbyrtToDoListBackEnd" alt="Imagem Ilustrativa do Back-end" width="600px">
</p>

---
## Próximos passos
- Implementação dos testes (unitários e integração);
- Atingir no mínimo 30% de cobertura de testes;
- Implementação de um sistema de Login com Token de acesso;
- Aperfeiçoar a experiência do usuário;
- Implementação do Swagger para documentação da API.

---
## Contatos

Milton Castro

[![Perfil](https://bit.ly/perfil_150px)](https://www.linkedin.com/in/milton-castro/)

[![LinkedIn](https://bit.ly/linkedin_30px)](https://www.linkedin.com/in/milton-castro/)
[![Github](https://bit.ly/github_30)](https://github.com/castromilton07)
[![Behance](https://bit.ly/behance_30px)](http//be.net/milton-castro)
[![Email](https://bit.ly/3rUsCz0)](castro.milton07@gmail.com)
[![Currículo](https://bit.ly/cv_30px)](bit.ly/miltoncastro-cv-4)
