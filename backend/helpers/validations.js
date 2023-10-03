const Subcategoria = require("../models/subcategoria");

function validateName(name) {
  if (!name) {
    return {
      status: 422,
      message: "O nome é obrigatório.",
      validationStatus: false,
    };
  }
  return null;
}

function validatePrice(price) {
  if (!price) {
    return {
      status: 422,
      message: "O preço é obrigatório.",
      validationStatus: false,
    };
  }

  if (typeof(price) !== "number") {
    return {
      status: 422,
      message: "Informe um valor numérico.",
      validationStatus: false,
    };
  }

  return null;
}

function validateDescription(description) {
  if (!description) {
    return {
      status: 422,
      message: "A descrição é obrigatória.",
      validationStatus: false,
    };
  }

  if (typeof(description) !== "string") {
    return {
      status: 422,
      message: "Informe uma string",
      validationStatus: false,
    };
  }

  return null;
}

function validateDatasheet(datasheet) {
  if (!datasheet) {
    return {
      status: 422,
      message: "A ficha técnica é obrigatória.",
      validationStatus: false,
    };
  }
  return null;
}

function validateBrand(brand) {
  if (!brand) {
    return {
      status: 422,
      message: "A marca é obrigatória.",
      validationStatus: false,
    };
  }

  if (typeof(brand) !== "string") {
    return {
      status: 422,
      message: "Informe uma string",
      validationStatus: false,
    };
  }
  return null;
}

function validateAvailable(available) {
  if (!available) {
    return {
      status: 422,
      message: "A disponibilidade é obrigatória.",
      validationStatus: false,
    };
  }

  if (typeof available !== "boolean") {
    return {
      status: 422,
      message: "É esperado um valor booleano.",
      validationStatus: false,
    };
  }
  return null;
}

async function validateSubcategory(subcategory) {
  if (!subcategory) {
    return {
      status: 422,
      message: "A subcategoria é obrigatória.",
      validationStatus: false,
    };
  }

  if (isNaN(subcategory)) {
    return {
      status: 422,
      message: "A subcategoria deve ser um number.",
      validationStatus: false,
    };
  }

  const hasSubcategory = await Subcategoria.findByPk(subcategory);
  if (!hasSubcategory) {
    return {
      status: 404,
      message: "Informe uma subcategoria válida",
      validationStatus: false,
    };
  }

  return null;
}

module.exports = {
  validateName,
  validatePrice,
  validateDescription,
  validateDatasheet,
  validateBrand,
  validateAvailable,
  validateSubcategory,
};
