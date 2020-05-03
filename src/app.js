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
  const { title, url, techs } = request.body;

  const repository = { title, url, techs };

  // Verificando se possui algum repositório com id informado
  if (repositories.id !== id) {
    return response.json({ error: 'Not have a project with this ID'})
  }

  repositories[id].splice(repository, 1);

  return response.json(repository)

});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
