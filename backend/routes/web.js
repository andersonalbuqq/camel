const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/HomeController")();
const ClienteController = require("../controllers/ClienteController");
const EnderecoController = require("../controllers/EnderecoController");

const ProdutoController =
  require("../controllers/ProdutoController").ProdutoController;
const CategoriaController = require("../controllers/CategoriaController");
const SubcategoriaController = require("../controllers/SubcategoriaController");

router.get("/", HomeController.index);

//Rotas de Produtos
router.post("/produto", ProdutoController.create);
router.get("/produto/:id", ProdutoController.getProduto);
router.get(
  "/produto/subcategoria/:id",
  ProdutoController.getProdutosBySubcategoria
);
router.put("/produto", ProdutoController.updateProduto);
router.delete("/produto/:id", ProdutoController.deleteProduto);

//Rotas de Clientes
router.post("/cliente", ClienteController.create);
router.get("/cliente/:id", ClienteController.getCliente);
router.put("/cliente/update/email", ClienteController.updateEmail);
router.put("/cliente/update/senha", ClienteController.updateSenha);
router.put("/cliente/update/cpf", ClienteController.updateCPF);
router.put("/cliente/update/telefone", ClienteController.updateTelefone);

router.post("/client/register", ClienteController.register); //atualizada
router.post("/client/login", ClienteController.login); //atualizada

router.delete("/cliente/:id", ClienteController.deleteCliente);

//Rotas dos Endereços
router.post("/endereco", EnderecoController.create);
router.put("/endereco/update", EnderecoController.updateEndereco);

router.get("/endereco/:id_cliente", EnderecoController.getEndereco);

//Rotas das Categorias
router.post("/categoria", CategoriaController.create);
router.get("/categoria/:id", CategoriaController.getCategoria);
router.get("/categorias", CategoriaController.getAllCategories); //atualizada
router.put("/categoria", CategoriaController.updateCategoria);
router.delete("/categoria/:id", CategoriaController.deleteCategoria);

//Rotas das Subcategorias
router.post("/subcategoria", SubcategoriaController.create);
router.get("/subcategoria/:id", SubcategoriaController.getSubcategoria);
router.put("/subcategoria", SubcategoriaController.updateSubcategoria);
router.delete("/subcategoria/:id", SubcategoriaController.deleteSubcategoria);

module.exports = router;
