const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const conn = require("./db/conn");

app.use(cors({ credentials: true}))

const webRouter = require("./routes/web");
const public_path = "public";
const views_path = "views";

//Interpreta as requisições no formato json
app.use(express.json());

app.use(express.static(public_path));
app.set("view engine", "ejs");
app.set("views", [views_path]);
app.use("/", webRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 5000;

conn
  .sync()
  // .sync({ force:true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
