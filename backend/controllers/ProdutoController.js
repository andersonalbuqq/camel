const Produto = require("../models/produto");
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

class ProdutoController {
  static async create(req, res) {
    const {
      nome,
      preco,
      descricao,
      ficha_tecnica,
      marca,
      disponivel,
      id_subcategoria,
    } = req.body;

    // Bloco de validações
    const validateNameResult = validateName(nome);
    if (validateNameResult) {
      return res.status(validateNameResult.status).json(validateNameResult);
    }

    const validatePriceResult = validatePrice(preco);
    if (validatePriceResult) {
      return res.status(validatePriceResult.status).json(validatePriceResult);
    }

    const validateDescriptionResult = validateDescription(descricao);
    if (validateDescriptionResult) {
      return res
        .status(validateDescriptionResult.status)
        .json(validateDescriptionResult);
    }

    const validateDatasheetResult = validateDatasheet(ficha_tecnica);
    if (validateDatasheetResult) {
      return res
        .status(validateDatasheetResult.status)
        .json(validateDatasheetResult);
    }

    const validateBrandResult = validateBrand(marca);
    if (validateBrandResult) {
      return res.status(validateBrandResult.status).json(validateBrandResult);
    }

    const validateAvailableResult = validateAvailable(disponivel);
    if (validateAvailableResult) {
      return res
        .status(validateAvailableResult.status)
        .json(validateAvailableResult);
    }

    const validateSubcategoryResult = await validateSubcategory(
      id_subcategoria
    );
    if (validateSubcategoryResult) {
      return res
        .status(validateSubcategoryResult.status)
        .json(validateSubcategoryResult);
    }

    const produto = new Produto({
      nome,
      preco,
      descricao,
      ficha_tecnica,
      marca,
      disponivel,
      id_subcategoria,
    });

    try {
      await produto.save();
      res.status(201).json({ message: "Produto criado com sucesso!", produto });
    } catch (erro) {
      res.status(500).json({ message: `falha na criação do produto.` });
      console.log(error);
    }
  }

  static async getProduto(req, res) {
    const id = req.params.id;

    const produto = await Produto.findByPk(id);

    if (!produto) {
      res.status(422).json({ message: "Produto não encontrado." });
      return;
    }

    res.status(200).json({ produto });
  }

  static async getProdutosBySubcategoria(req, res) {
    const id = req.params.id;

    const validateSubcategoryResult = await validateSubcategory(id);
    if (validateSubcategoryResult) {
      return res
        .status(validateSubcategoryResult.status)
        .json(validateSubcategoryResult);
    }

    const produtos = await Produto.findAll({ where: { id_subcategoria: id } });

    res.status(200).json(produtos);
  }

  static async updateProduto(req, res) {
    const {
      id,
      nome,
      preco,
      descricao,
      ficha_tecnica,
      marca,
      disponivel,
      id_subcategoria,
    } = req.body;

    // validações
    if (!id) {
      res.status(422).json({ message: "O id é obrigatório." });
      return;
    }

    const produtoExiste = await Produto.findByPk(id);
    if (!produtoExiste) {
      res.status(404).json({ message: "Produto não encontrado." });
      return;
    }

    if (!nome) {
      res.status(422).json({ message: "O nome é obrigatório." });
      return;
    }

    if (!preco) {
      res.status(422).json({ message: "O preco é obrigatório." });
      return;
    }

    if (isNaN(preco)) {
      res.status(422).json({ message: "Informe um valor numérico." });
      return;
    }

    if (!descricao) {
      res.status(422).json({ message: "A descrição é obrigatória" });
      return;
    }

    if (!ficha_tecnica) {
      res.status(422).json({ message: "A ficha técnica é obrigatória" });
      return;
    }

    if (!marca) {
      res.status(422).json({ message: "A marca é obrigatória" });
      return;
    }

    if (disponivel == undefined) {
      res.status(422).json({ message: "A disponibilidade é obrigatória" });
      return;
    }

    if (typeof disponivel !== "boolean") {
      res
        .status(422)
        .json({ message: "É esperado um valor booleano na disponibilidade" });
      return;
    }

    if (!id_subcategoria) {
      res.status(422).json({ message: "A subcategoria é obrigatória" });
      return;
    }

    const subcategoriaExiste = await Subcategoria.findByPk(id_subcategoria);

    if (!subcategoriaExiste) {
      res.status(404).json({ message: "Informe uma subcategoria válida" });
      return;
    }

    const produtoAtualizado = {
      nome,
      preco,
      descricao,
      ficha_tecnica,
      marca,
      disponivel,
      id_subcategoria,
    };

    try {
      await Produto.update(produtoAtualizado, { where: { id: id } });
      res.status(200).json({
        message: "Produto atualizado com sucesso.",
        produtoAtualizado,
      });
    } catch (error) {
      res.status(500).json("Erro de processamento");
      console.log(error);
    }
  }

  static async deleteProduto(req, res) {
    const id = req.params.id;

    const produto = await Produto.findByPk(id);
    if (!produto) {
      res.status(404).json({ message: "Produto não encontrado." });
      return;
    }

    try {
      produto.destroy();
      res.status(200).json({ message: "Apagado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Erro de processamento." });
      console.log(error);
    }
  }
}

module.exports = {
  ProdutoController,
};
