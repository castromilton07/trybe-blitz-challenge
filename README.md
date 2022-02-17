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
    -  `/tasks` [`POST`]  Listar todas as tarefas
    -  `/tasks/:id` [`GET`]  Listar todas as tarefas
