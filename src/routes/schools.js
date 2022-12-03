const { Router } = require("express");
const { knex } = require("../knex");

const SchoolController = require("../controllers/school");
const Repository = require("../repositories");

const routes = Router();

const repository = new Repository(knex, "schools");

const schoolController = new SchoolController(repository);

routes.get("/schools", schoolController.get);
routes.get("/schools/:id", schoolController.getById);
routes.post("/schools", schoolController.create);
routes.put("/schools/:id", schoolController.update);
routes.delete("/schools/:id", schoolController.delete);

module.exports = routes;