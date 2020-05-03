const express = require("express");
const cors = require("cors");

const { uuid, isUuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repository = { id: uuid(), title, url, techs, likes: 0 };

  if(!isUuid(repository.id)) {
    return response.status(400).json({ error: 'Not have a valid ID'});
  };

  repositories.push(repository);

  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;

  // Armazenando as requisições do body em trÊs variáveis
  const { title, url, techs } = request.body;


  // Busca o projeto de acordo com o id informado na rota
  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  // Verifica se existe algum projeto com o id informado na rota para selecionar e editar algum projeto
  if(repositoryIndex < 0) {
    return response.status(400).json({ error: 'Not have a project with this ID'});
  };

  // Unificando as três variáveis do body em um objeto chamado "project"
  const repository = { 
    id: uuid(),
    title, 
    url, 
    techs
  };

  // atribuindo os novos valores para um projeto presente no array
  repositories[repositoryIndex] = repository;

  return response.json(repository);

});

app.delete("/repositories/:id", (request, response) => {
  const  id  = request.params;

  const repositoryIndex = repositories.findIndex( repository => repository.id === id.id );

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: 'Dont have any repository using this ID'})
  };

  const deletedRepository = repositories.splice(repositoryIndex, 1);

  return response.status(204).json(deletedRepository);
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
