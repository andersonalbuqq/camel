const ProductTests = require("./product.spec");
const ClientTests = require("./cliente.spec");
const EnderecoTests = require("./endereco.spec");

ProductTests.create();
ProductTests.update();

ClientTests.testes();

EnderecoTests.create();

console.log("\n");
