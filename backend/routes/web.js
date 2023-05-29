const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/HomeController")();
const ClienteController = require("../controllers/ClienteController");
const EnderecoController = require("../controllers/EnderecoController");

router.get("/", HomeController.index);

//Rotas do Cliente
router.post("/cliente", ClienteController.create);
router.get("/cliente/:id", ClienteController.getCliente);
router.put("/cliente/update/email", ClienteController.updateEmail);
router.put("/cliente/update/senha", ClienteController.updateSenha);
router.put("/cliente/update/cpf", ClienteController.updateCPF);
router.put("/cliente/update/telefone", ClienteController.updateTelefone);

router.delete("/cliente/:id", ClienteController.deleteCliente)

//Rotas dos Endereços
router.post("/endereco", EnderecoController.create);
router.put("/endereco/update", EnderecoController.updateEndereco);
router.get("/endereco/:id_cliente", EnderecoController.getEndereco);
module.exports = router;
