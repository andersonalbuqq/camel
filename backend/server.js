const express = require("express");
const app = express();

const conn = require("./db/conn");

const webRouter = require("./routes/web");
const public_path = "public";
const views_path = "views";

//Interpreta as requisições no formato json
app.use(express.json())

app.use(express.static(public_path));
app.set("view engine", "ejs");
app.set("views", [views_path]);
app.use("/", webRouter);

const PORT = 3000;

conn
  .sync()
  // .sync({ force:true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
