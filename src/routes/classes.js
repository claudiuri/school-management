const { Router } = require("express");
const { knex } = require("../knex");

const ClassController = require("../controllers/classes");
const Repository = require("../repositories");

const routes = Router();

const repository = new Repository(knex, "classes");

const classController = new ClassController(repository);

routes.get("/classes", classController.get);
routes.get("/classes/:id", classController.getById);
routes.post("/classes", classController.create);
routes.put("/classes/:id", classController.update);
routes.delete("/classes/:id", classController.delete);

module.exports = routes;