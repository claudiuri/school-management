const express = require("express");
const cors = require("cors");
const { knex } = require("./knex");
const schoolsRoutes = require("./routes/schools")
const classesRoutes = require("./routes/classes")

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(schoolsRoutes);
app.use(classesRoutes);

knex.migrate.latest()
  .then(() => {
    app.listen(port, () => console.log(`Server on port: ${port}`));
  });


