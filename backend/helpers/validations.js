const Subcategoria = require("../models/subcategoria");
const Produto = require("../models/produto");
const Cliente = require("../models/cliente");
// const Endereco = require("../models/endereco");

// Validações do módulo de produto

function validateName(name) {
  if (!name) {
    return {
      status: 422,
      message: "O nome é obrigatório.",
    };
  }

  if (typeof name !== "string") {
    return {
      status: 422,
      message: "Informe uma string no campo de Nome.",
    };
  }

  return null;
}

function validatePrice(price) {
  if (!price) {
    return {
      status: 422,
      message: "O preço é obrigatório.",
    };
  }

  if (typeof price !== "number") {
    return {
      status: 422,
      message: "Informe um valor numérico no campo de Preço.",
    };
  }

  return null;
}

function validateDescription(description) {
  if (!description) {
    return {
      status: 422,
      message: "A descrição é obrigatória.",
    };
  }

  if (typeof description !== "string") {
    return {
      status: 422,
      message: "Informe uma string no campo de Descrição.",
    };
  }

  return null;
}

function validateDatasheet(datasheet) {
  if (!datasheet) {
    return {
      status: 422,
      message: "A ficha técnica é obrigatória.",
    };
  }

  if (typeof datasheet !== "string") {
    return {
      status: 422,
      message: "Informe uma string, na ficha técnica.",
    };
  }
  return null;
}

function validateBrand(brand) {
  if (!brand) {
    return {
      status: 422,
      message: "A marca é obrigatória.",
    };
  }

  if (typeof brand !== "string") {
    return {
      status: 422,
      message: "Informe uma string, no campo de Marca.",
    };
  }
  return null;
}

function validateAvailable(available) {
  if (typeof available !== "boolean" && !available) {
    return {
      status: 422,
      message: "A disponibilidade é obrigatória.",
    };
  }

  if (typeof available !== "boolean") {
    return {
      status: 422,
      message: "Informe um booleano, no campo de Disponibilidade.",
    };
  }
  return null;
}

async function validateSubcategory(subcategory) {
  if (!subcategory) {
    return {
      status: 422,
      message: "A subcategoria é obrigatória.",
    };
  }

  if (typeof subcategory !== "number") {
    return {
      status: 422,
      message: "Informe um valor numérico no campo de Subcategoria.",
    };
  }

  const hasSubcategory = await Subcategoria.findByPk(subcategory);
  if (!hasSubcategory) {
    return {
      status: 404,
      message: "Informe uma subcategoria válida",
    };
  }

  return null;
}

function validateId(id) {
  if (!id) {
    return {
      status: 422,
      message: "O id é obrigatório.",
    };
  }

  if (typeof id !== "number") {
    return {
      status: 422,
      message: "Informe um valor do tipo numérico no Id.",
    };
  }

  return null;
}

async function validateProduct(id) {
  const validateIdResult = validateId(id);
  if (validateIdResult) {
    return validateIdResult;
  }

  const hasProduct = await Produto.findByPk(id);
  if (!hasProduct) {
    return {
      status: 404,
      message: "Informe um produto válido",
    };
  }

  return null;
}

// Validações do módulo de cliente
// Faltando validar os campos email e comfirmaSenha

function validateEmail(email) {
  if (!email) {
    return {
      status: 422,
      message: "O email é obrigatório.",
    };
  }

  if (typeof email !== "string") {
    return {
      status: 422,
      message: "Informe uma string no campo de Email.",
    };
  }

  const regex = /\S+@\S+\.\S+/;
  if (!regex.test(email)) {
    return {
      status: 422,
      message: "Email inválido.",
    };
  }

  return null;
}

function validateString(nome) {
  if (!nome) {
    return {
      status: 422,
      message: "O nome é obrigatório",
      validationStatus: false,
    };
  }
  if (typeof nome != "string") {
    return {
      status: 422,
      message: "O Campo tem que ser do tipo Texto",
      validationStatus: false,
    };
  }
  return null;
}

function validatePassword(password) {
  if (!password) {
    return {
      status: 422,
      message: "A senha é obrigatória",
    };
  }

  const regex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,10})/;
  if (!regex.test(password)) {
    return {
      status: 422,
      message:
        "A senha deve possuir entre 4 e 10 dígitos, com letras maiúsculas e minúsculas e ao menos um número.",
    };
  }
  return null;
}

function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) {
    return {
      status: 422,
      message: "A confirmação da senha é obrigatória",
    };
  }

  if (password !== confirmPassword) {
    return {
      status: 422,
      message: "A confirmação da senha deve ser igual a senha.",
    };
  }
  return null
}

async function isEmailAvailable(email){
  const emailAvailable = await Cliente.findOne({ where: { email: email } });

  if (emailAvailable) {
    return {
      status: 422,
      message: "O email informado já está em uso.",
    };
  }

  return null
}

// Validações do módulo de endereço

function validateIdCliente(id_cliente) {
  if (!id_cliente) {
    return {
      status: 422,
      message: "O usuário é obrigatório.",
      validationStatus: false,
    };
  }

  return null;
}

function validateBairro(bairro) {
  if (!bairro) {
    return {
      status: 422,
      message: "O bairro deve ser informada",
      validationStatus: false,
    };
  }
  if (typeof bairro !== "string") {
    return {
      status: 422,
      message: "O Campo bairro tem que ser do tipo String",
      validationStatus: false,
    };
  }
  return null;
}

function validateNumero(numero) {
  if (!numero) {
    return {
      status: 422,
      message: "O número deve ser informado",
      validationStatus: false,
    };
  }
  if (typeof numero != "number") {
    return {
      status: 422,
      message: "O Campo número tem que ser do tipo Númerico",
      validationStatus: false,
    };
  }
  //verifica se apenas de números informados
  if (!/^[0-9]+$/.test(numero)) {
    return {
      status: 422,
      message: "Informe apenas números",
      validationStatus: false,
    };
  }
  return null;
}

function validateCidade(cidade) {
  if (!cidade) {
    return {
      status: 422,
      message: "A cidade deve ser informada",
      validationStatus: false,
    };
  }
  if (typeof cidade !== "string") {
    return {
      status: 422,
      message: "O Campo cidade tem que ser do tipo String",
      validationStatus: false,
    };
  }
  return null;
}
function validateEstado(uf) {
  if (!uf) {
    return {
      status: 422,
      message: "O estado deve ser informado",
      validationStatus: false,
    };
  }
  if (uf.length !== 2) {
    return {
      status: 422,
      message: "Estado inválido",
      validationStatus: false,
    };
  }
  if (typeof uf !== "string") {
    return {
      status: 422,
      message: "O Campo estado tem que ser do tipo String",
      validationStatus: false,
    };
  }
  return null;
}

function validateGet(endereco) {
  if (!endereco) {
    return {
      status: 422,
      message: "O usuário não possui endereço cadastrado!",
      validationStatus: false,
    };
  }
  return null;
}

function validateCep(cep) {
  if (!cep) {
    return {
      status: 422,
      message: "O CEP deve ser informado",
      validationStatus: false,
    };
  }

  //verifica se apenas de números informados
  if (!/^[0-9]+$/.test(cep)) {
    return {
      status: 422,
      message: "Informe apenas os números do CEP.",
      validationStatus: false,
    };
  }

  //verifica a quantidade de dígitos
  if (cep.toString().length !== 8) {
    return {
      status: 422,
      message: "CEP incorreto.",
      validationStatus: false,
    };
  }
  return null;
}
function validateRua(rua) {
  if (!rua) {
    return {
      status: 422,
      message: "A rua deve ser informada",
      validationStatus: false,
    };
  }
  if (typeof rua !== "string") {
    return {
      status: 422,
      message: "O Campo rua tem que ser do tipo String",
      validationStatus: false,
    };
  }
  return null;
}

function validateUf(uf) {
  if (!uf) {
    return {
      status: 422,
      message: "O estado deve ser informado",
      validationStatus: false,
    };
  }
  if (uf.length !== 2) {
    return {
      status: 422,
      message: "Informe apenas a sigla do estado",
      validationStatus: false,
    };
  }
  return null;
}

module.exports = {
  validateId,
  validateName,
  validatePrice,
  validateDescription,
  validateDatasheet,
  validateBrand,
  validateAvailable,
  validateSubcategory,
  validateProduct,
  validateString,
  validatePassword,
  validateConfirmPassword,
  validateIdCliente,
  validateCep,
  validateRua,
  validateBairro,
  validateNumero,
  validateCidade,
  validateEstado,
  validateGet,
  validateUf,
  validateEmail,
  isEmailAvailable
};
