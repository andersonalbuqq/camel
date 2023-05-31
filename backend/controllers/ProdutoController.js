const Produto = require("../models/produto");
const Subcategoria = require("../models/subcategoria");

module.exports = class ProdutoController {
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

    // validações
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

    if (!disponivel) {
      res.status(422).json({ message: "A disponibilidade é obrigatória" });
      return;
    }

    if (typeof disponivel !== "boolean") {
      res.status(422).json({ message: "É esperado um valor booleano" });
      return;
    }

    if (!id_subcategoria) {
      res.status(422).json({ message: "A subcategoria é obrigatória" });
      return;
    }

    const subcategoriaExiste = await Subcategoria.findByPk(id_subcategoria);

    if (!subcategoriaExiste) {
      res.status(422).json({ message: "Informe uma subcategoria válida" });
      return;
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
};
