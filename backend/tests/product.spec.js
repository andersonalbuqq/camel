const Subcategoria = require("../models/subcategoria");

const {
  validateName,
  validatePrice,
  validateDescription,
  validateDatasheet,
  validateBrand,
  validateAvailable,
  validateSubcategory,
} = require("../helpers/validations");

describe("Módulo de Produtos - Criação", () => {
  it("Validação de Nome - success with valid name", () => {
    const result = validateName("Lustre");

    expect(result).toBe(null);
  });

  it("Validação de Nome - empty field", () => {
    const result = validateName("");

    expect(result).toStrictEqual({
      status: 422,
      message: "O nome é obrigatório.",
    });
  });

  it("Validação de Nome - null value", () => {
    const result = validateName(null);

    expect(result).toStrictEqual({
      status: 422,
      message: "O nome é obrigatório.",
    });
  });

  it("Validação de Nome - undefined value", () => {
    const result = validateName(undefined);

    expect(result).toStrictEqual({
      status: 422,
      message: "O nome é obrigatório.",
    });
  });

  it("Validação de Nome - invalid value of numeric type", () => {
    const result = validateName(26);

    expect(result).toStrictEqual({
      status: 422,
      message: "Informe uma string no campo de Nome.",
    });
  });

  it("Validação de Nome - invalid value of boolean type", () => {
    const result = validateName(true);

    expect(result).toStrictEqual({
      status: 422,
      message: "Informe uma string no campo de Nome.",
    });
  });

  /* ---------------------------------------- Preço ---------------------------------------- */

  it("Validação de Preço - success with valid price", () => {
    const result = validatePrice(150.8);

    expect(result).toBe(null);
  });

  it("Validação de Preço - empty field", () => {
    const result = validatePrice();

    expect(result).toStrictEqual({
      status: 422,
      message: "O preço é obrigatório.",
    });
  });

  it("Validação de Preço - null value", () => {
    const result = validatePrice(null);

    expect(result).toStrictEqual({
      status: 422,
      message: "O preço é obrigatório.",
    });
  });

  it("Validação de Preço - undefined value", () => {
    const result = validatePrice(undefined);

    expect(result).toStrictEqual({
      status: 422,
      message: "O preço é obrigatório.",
    });
  });

  it("Validação de Preço - invalid value of string type", () => {
    const result = validatePrice("abc");

    expect(result).toStrictEqual({
      status: 422,
      message: "Informe um valor numérico no campo de Preço.",
    });
  });

  it("Validação de Preço - invalid value of boolean type", () => {
    const result = validatePrice(true);

    expect(result).toStrictEqual({
      status: 422,
      message: "Informe um valor numérico no campo de Preço.",
    });
  });

  /* ---------------------------------------- Descrição ---------------------------------------- */

  it("Validação de Descrição - success with valid description", () => {
    const result = validateDescription("Lustre ...");

    expect(result).toBe(null);
  });

  it("Validação de Descrição - empty field", () => {
    const result = validateDescription();

    expect(result).toStrictEqual({
      status: 422,
      message: "A descrição é obrigatória.",
    });
  });

  it("Validação de Descrição - null value", () => {
    const result = validateDescription(null);

    expect(result).toStrictEqual({
      status: 422,
      message: "A descrição é obrigatória.",
    });
  });

  it("Validação de Descrição - undefined value", () => {
    const result = validateDescription(undefined);

    expect(result).toStrictEqual({
      status: 422,
      message: "A descrição é obrigatória.",
    });
  });

  it("Validação de Descrição - invalid value of number type", () => {
    const result = validateDescription(123);

    expect(result).toStrictEqual({
      status: 422,
      message: "Informe uma string no campo de Descrição.",
    });
  });

  it("Validação de Descrição - invalid value of boolean type", () => {
    const result = validateDescription(true);

    expect(result).toStrictEqual({
      status: 422,
      message: "Informe uma string no campo de Descrição.",
    });
  });

  /* ---------------------------------------- Ficha Técnica ---------------------------------------- */

  it("Validação de Ficha Técnica - success with valid datasheet", () => {
    const result = validateDatasheet("Suporde para 6 lâmpadas..");

    expect(result).toBe(null);
  });

  it("Validação de Ficha Técnica - empty field", () => {
    const result = validateDatasheet();

    expect(result).toStrictEqual({
      status: 422,
      message: "A ficha técnica é obrigatória.",
    });
  });

  it("Validação de Ficha Técnica - null value", () => {
    const result = validateDatasheet(null);

    expect(result).toStrictEqual({
      status: 422,
      message: "A ficha técnica é obrigatória.",
    });
  });

  it("Validação de Ficha Técnica - undefined value", () => {
    const result = validateDatasheet(undefined);

    expect(result).toStrictEqual({
      status: 422,
      message: "A ficha técnica é obrigatória.",
    });
  });

  it("Validação de Ficha Técnica - invalid value of number type", () => {
    const result = validateDatasheet(123);

    expect(result).toStrictEqual({
      status: 422,
      message: "Informe uma string, na ficha técnica.",
    });
  });

  it("Validação de Ficha Técnica - invalid value of boolean type", () => {
    const result = validateDatasheet(true);

    expect(result).toStrictEqual({
      status: 422,
      message: "Informe uma string, na ficha técnica.",
    });
  });

  /* ---------------------------------------- Marca ---------------------------------------- */

  it("Validação de Marca - success with valid brand", () => {
    const result = validateBrand("Tramontina");

    expect(result).toBe(null);
  });

  it("Validação de Marca - empty field", () => {
    const result = validateBrand();

    expect(result).toStrictEqual({
      status: 422,
      message: "A marca é obrigatória.",
    });
  });

  it("Validação de Marca - null value", () => {
    const result = validateBrand(null);

    expect(result).toStrictEqual({
      status: 422,
      message: "A marca é obrigatória.",
    });
  });

  it("Validação de Marca - undefined value", () => {
    const result = validateBrand(undefined);

    expect(result).toStrictEqual({
      status: 422,
      message: "A marca é obrigatória.",
    });
  });

  it("Validação de Marca - invalid value of number type", () => {
    const result = validateBrand(123);

    expect(result).toStrictEqual({
      status: 422,
      message: "Informe uma string, no campo de Marca.",
    });
  });

  it("Validação de Marca - invalid value of boolean type", () => {
    const result = validateBrand(true);

    expect(result).toStrictEqual({
      status: 422,
      message: "Informe uma string, no campo de Marca.",
    });
  });

  /* ---------------------------------------- Disponibilidade ---------------------------------------- */

  it("Validação de Disponibilidade - success with valid available", () => {
    const result = validateAvailable(true);

    expect(result).toBe(null);
  });

  it("Validação de Disponibilidade - empty field", () => {
    const result = validateAvailable();

    expect(result).toStrictEqual({
      status: 422,
      message: "A disponibilidade é obrigatória.",
    });
  });

  it("Validação de Disponibilidade - null value", () => {
    const result = validateAvailable(null);

    expect(result).toStrictEqual({
      status: 422,
      message: "A disponibilidade é obrigatória.",
    });
  });

  it("Validação de Disponibilidade - undefined value", () => {
    const result = validateAvailable(undefined);

    expect(result).toStrictEqual({
      status: 422,
      message: "A disponibilidade é obrigatória.",
    });
  });

  it("Validação de Disponibilidade - invalid value of number type", () => {
    const result = validateAvailable(123);

    expect(result).toStrictEqual({
      status: 422,
      message: "Informe um booleano, no campo de Disponibilidade.",
    });
  });

  it("Validação de Disponibilidade - invalid value of string type", () => {
    const result = validateAvailable("abc");

    expect(result).toStrictEqual({
      status: 422,
      message: "Informe um booleano, no campo de Disponibilidade.",
    });
  });

  /* ---------------------------------------- Subcategoria ---------------------------------------- */

  // it("Validação de Subcategoria - success with valid subcategory", async () => {
  //   const result = validateSubcategory(1);

  //   const expected = null;

  //   await expect(result).resolves.toBe(expected);
  // });
  it("Validação de Subcategoria - success with valid subcategory", async () => {
    const validSubcategory = {
      id: 1,
      nome: "Teste",
      createdAt: "2023-09-27T18:13:58.552Z",
      updatedAt: "2023-09-27T18:13:58.552Z",
      id_categoria: 1,
    };

    Subcategoria.findByPk = jest.fn().mockResolvedValue(validSubcategory);
    const result = await validateSubcategory(1);

    expect(result).toEqual(null);
  });

  it("Validação de Subcategoria - Non-existent subcategory", async () => {
    Subcategoria.findByPk = jest.fn().mockResolvedValue(null);

    const result = await validateSubcategory(1);

    expect(result).toEqual({
      status: 404,
      message: "Informe uma subcategoria válida",
    });
  });

  it("Validação de Subcategoria - empty field", async () => {
    const result = validateSubcategory();

    const expected = {
      status: 422,
      message: "A subcategoria é obrigatória.",
    };

    await expect(result).resolves.toStrictEqual(expected);
  });

  it("Validação de Subcategoria - null value", async () => {
    const result = validateSubcategory(null);

    const expected = {
      status: 422,
      message: "A subcategoria é obrigatória.",
    };

    await expect(result).resolves.toStrictEqual(expected);
  });

  it("Validação de Subcategoria - undefined value", async () => {
    const result = validateSubcategory(undefined);

    const expected = {
      status: 422,
      message: "A subcategoria é obrigatória.",
    };

    await expect(result).resolves.toStrictEqual(expected);
  });

  it("Validação de Subcategoria - invalid value of string type", async () => {
    const result = validateSubcategory("abc");

    const expected = {
      status: 422,
      message: "Informe um valor numérico no campo de Subcategoria.",
    };

    await expect(result).resolves.toStrictEqual(expected);
  });

  it("Validação de Subcategoria - invalid value of boolean type", async () => {
    const result = validateSubcategory(true);

    const expected = {
      status: 422,
      message: "Informe um valor numérico no campo de Subcategoria.",
    };

    await expect(result).resolves.toStrictEqual(expected);
  });

});
