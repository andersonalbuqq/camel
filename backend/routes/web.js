const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/HomeController")();
const ClienteController = require('../controllers/ClienteController')

router.get("/", HomeController.index);
router.put("/cliente/update/email", ClienteController.updateEmail);
router.put("/cliente/update/senha", ClienteController.updateSenha);
router.put("/cliente/update/cpf", ClienteController.updateCPF);
router.get("/cliente/:id", ClienteController.getCliente);
router.post("/cliente", ClienteController.create);

module.exports = router;
