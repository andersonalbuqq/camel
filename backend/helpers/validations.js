// const Subcategoria = require("../models/subcategoria");
// const Cliente = require("../models/cliente");
// const Endereco = require("../models/endereco");

// Validações do módulo de produto

function validateName(name) {
  if (!name) {
    return {
      status: 422,
      message: "O nome é obrigatório.",
      validationStatus: false,
    };
  }

  if (typeof name !== "string") {
    return {
      status: 422,
      message: "Informe uma string no campo de Nome.",
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

  if (typeof price !== "number") {
    return {
      status: 422,
      message: "Informe um valor numérico no campo de Preço.",
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

  if (typeof description !== "string") {
    return {
      status: 422,
      message: "Informe uma string no campo de Descrição.",
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

  if (typeof datasheet !== "string") {
    return {
      status: 422,
      message: "Informe uma string, na ficha técnica.",
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

  if (typeof brand !== "string") {
    return {
      status: 422,
      message: "Informe uma string, no campo de Marca.",
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
      message: "É esperado um valor booleano, no campo de Disponibilidade.",
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

  // const hasSubcategory = await Subcategoria.findByPk(subcategory);
  // if (!hasSubcategory) {
  //   return {
  //     status: 404,
  //     message: "Informe uma subcategoria válida",
  //     validationStatus: false,
  //   };
  // }

  return null;
}



function validateId(id) {
  if (!id) {
    return {
      status: 422,
      message: "O id é obrigatório.",
      validationStatus: false,
    };
  }

  if (typeof id !== "number") {
    return {
      status: 422,
      message: "O id deve ser do tipo number",
      validationStatus: false,
    };
  }

  return null;
}

// Validações do módulo de cliente
// Faltando validar os campos email e comfirmaSenha

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

function validatePassword(senha) {
  if (!senha) {
    return {
      status: 422,
      message: "A senha é obrigatória",
      validationStatus: false,
    };
  }
  if (senha.length < 4) {
    return {
      status: 422,
      message: "Senha muito curta",
      validationStatus: false,
    };
  }

  if (senha.length > 16) {
    return {
      status: 422,
      message: "Senha muito grande",
      validationStatus: false,
    };
  }
  return null;
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
  if (typeof (bairro) !== 'string') {
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
      validationStatus: false

    }
  } return null
}

function validateCep(cep) {
  if (!cep) {
    return {
      status: 422,
      message: "O CEP deve ser informado",
      validationStatus: false
    }
  }

  //verifica se apenas de números informados
  if (!/^[0-9]+$/.test(cep)) {
    return {
      status: 422,
      message: "Informe apenas os números do CEP.",
      validationStatus: false
    }
  }

  //verifica a quantidade de dígitos
  if (cep.toString().length !== 8) {
    return {
      status: 422,
      message: "CEP incorreto.",
      validationStatus: false
    }
  } return null
}
function validateRua(rua) {
  if (!rua) {
    return {
      status: 422,
      message: "A rua deve ser informada",
      validationStatus: false
    }
  }
  if (typeof (rua) !== 'string') {
    return {
      status: 422,
      message: "O Campo rua tem que ser do tipo String",
      validationStatus: false
    }
  }
  return null
}

function validateUf(uf) {
  if (!uf) {
    return {
      status: 422,
      message: "O estado deve ser informado",
      validationStatus: false
    }
  }
  if (uf.length !== 2) {
    return {
      status: 422,
      message: "Informe apenas a sigla do estado",
      validationStatus: false
    }
  } return null
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
  validateString,
  validatePassword,
  validateIdCliente,
  validateCep,
  validateRua,
  validateBairro,
  validateNumero,
  validateCidade,
  validateEstado,
  validateGet,
  validateUf
};
