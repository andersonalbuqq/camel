const ProductTestFunctions = require("./test-functions/product.js");

const formatMessageOutput = (func, parm, expectedStatus) => {
  const result = func(parm);

  if (result === null) {
    return `${expectedStatus === null ? "✅" : "❌"} Validation passed\n     > Valor Testado: ${parm}`;
  }

  const { validationStatus, message } = result;

  return `${validationStatus === expectedStatus ? "✅" : "❌"
    } Erro: ${message}\n     > Valor Testado: ${parm}`;
};

const {
  validateName,
  validatePrice,
  validateDescription,
  validateDatasheet,
  validateBrand,
  validateAvailable,
  validateSubcategory,
} = require("../helpers/validations");

module.exports = class ProductTests {
  static create() {
    console.log("\nMódulo de Produtos - Criação");
    console.log("\n----------------------------");
    console.log("🚩 Validação de Nome");
    console.log(
      `・ success with valid name: ${formatMessageOutput(
        validateName,
        "Lustre",
        null
      )}`
    );
    console.log(
      `・ fail with empty string: ${formatMessageOutput(
        validateName,
        "",
        false
      )}`
    );
    console.log(
      `・ fail with null value: ${formatMessageOutput(
        validateName,
        null,
        false
      )}`
    );
    console.log(
      `・ fail with undefined value: ${formatMessageOutput(
        validateName,
        undefined,
        false
      )}`
    );

    console.log("\n----------------------------");
    console.log("🚩 Validação de Preço");
    console.log(
      `・ success with valid value: ${formatMessageOutput(
        validatePrice,
        156.8,
        null
      )}`
    );
    console.log(
      `・ fail with unexpected value (string): ${formatMessageOutput(
        validatePrice,
        "cinquenta",
        false
      )}`
    );
    console.log(
      `・ fail with unexpected value (boolean): ${formatMessageOutput(
        validatePrice,
        true,
        false
      )}`
    );
    console.log(
      `・ fail with null value: ${formatMessageOutput(
        validatePrice,
        null,
        false
      )}`
    );
    console.log(
      `・ fail with undefined value: ${formatMessageOutput(
        validatePrice,
        undefined,
        false
      )}`
    );

    console.log("\n----------------------------");
    console.log("🚩 Validação de Descrição");
    console.log(
      `・ success with valid value: ${formatMessageOutput(
        validateDescription,
        "Lustre ...",
        null
      )}`
    );
    console.log(
      `・ fail with empty string: ${formatMessageOutput(
        validateDescription,
        "",
        false
      )}`
    );
    console.log(
      `・ fail with unexpected value: ${formatMessageOutput(
        validateDescription,
        true,
        false
      )}`
    );
    console.log(
      `・ fail with null value: ${formatMessageOutput(
        validateDescription,
        null,
        false
      )}`
    );
    console.log(
      `・ fail with undefined value: ${formatMessageOutput(
        validateDescription,
        undefined,
        false
      )}`
    );

    console.log("\n----------------------------");
    console.log("🚩 Validação da Ficha técnica");
    console.log(
      `・ success with valid value: ${formatMessageOutput(
        validateDatasheet,
        "Suporde para 6 lâmpadas...",
        null
      )}`
    );
    console.log(
      `・ fail with empty string: ${formatMessageOutput(
        validateDatasheet,
        "",
        false
      )}`
    );
    console.log(
      `・ fail with unexpected value: ${formatMessageOutput(
        validateDatasheet,
        false,
        false
      )}`
    );
    console.log(
      `・ fail with null value: ${formatMessageOutput(
        validateDatasheet,
        null,
        false
      )}`
    );
    console.log(
      `・ fail with undefined value: ${formatMessageOutput(
        validateDatasheet,
        undefined,
        false
      )}`
    );

    
    console.log("\n----------------------------");
    console.log("🚩 Validação de Marca");
    console.log(
      `・ success with valid name: ${formatMessageOutput(
        validateBrand,
        "Tramontina",
        null
      )}`
    );
    console.log(
      `・ fail with empty string: ${formatMessageOutput(
        validateBrand,
        "",
        false
      )}`
    );
    console.log(
      `・ fail with null value: ${formatMessageOutput(
        validateBrand,
        null,
        false
      )}`
    );
    console.log(
      `・ fail with undefined value: ${formatMessageOutput(
        validateBrand,
        undefined,
        false
      )}`
    );
    console.log(
      `・ fail with unexpected value: ${formatMessageOutput(
        validateBrand,
        true,
        false
      )}`
    );

    console.log("\n----------------------------");
    console.log("🚩 Validação de Disponibilidade");
    console.log(
      `・ success with valid value: ${formatMessageOutput(
        validateAvailable,
        true,
        null
      )}`
    );
    console.log(
      `・ fail with unexpected value: ${formatMessageOutput(
        validateAvailable,
        "Disponível",
        false
      )}`
    );
    console.log(
      `・ fail with unexpected value: ${formatMessageOutput(
        validateAvailable,
        35,
        false
      )}`
    );
    console.log(
      `・ fail with null value: ${formatMessageOutput(
        validateAvailable,
        null,
        false
      )}`
    );
    console.log(
      `・ fail with undefined value: ${formatMessageOutput(
        validateAvailable,
        undefined,
        false
      )}`
    );

   //O que fazer na validação de subcategoria? PROBLEMA: É necessário que haja um valor válido no BD para que os testes sejam executados a contento.
  }
};
