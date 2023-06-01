const Categoria = require("../models/categoria");

module.exports = class CategoriaController {
  static async create(req, res) {
    const nome = req.body.nome;

    //validações
    if (!nome) {
      res.status(422).json({ message: "O nome é obrigatório" });
      return;
    }

    const categoriaExiste = await Categoria.findOne({ where: { nome: nome } });

    if (categoriaExiste) {
      res.status(422).json({ message: "Categoria já cadastrada." });
      return;
    }

    const categoria = new Categoria({
      nome,
    });

    try {
      await categoria.save();
      res.status(201).json({ message: "Categoria criada com sucesso!", categoria });
    } catch (error) {
      res.status(500).json({ message: "Falha na criação da categoria" });
      console.log(error);
    }
  }

  static async getCategoria(req, res) {
    const id = req.params.id;

    const categoria = await Categoria.findByPk(id);

    //validações
    if (!categoria) {
      res.status(422).json({ message: "Categoria não encontrada." });
      return;
    }

    res.status(200).json(categoria);
  }

  static async updateCategoria(req, res) {
    const { id, nome } = req.body;

    if (!id) {
      res.status(422).json({ message: "Categoria não encontrada." });
      console.log("informe o id da categoria");
      return;
    }

    const categoria = await Categoria.findByPk(id);

    //validações
    if (!categoria) {
      res.status(422).json({ message: "Categoria não encontrada." });
      return;
    }

    if (!nome) {
      res.status(422).json({ message: "O nome é obrigatório" });
      return;
    }

    const categoriaExiste = await Categoria.findOne({ where: { nome: nome } });

    if (categoriaExiste) {
      res.status(422).json({ message: "Categoria já cadastrada." });
      return;
    }

    try {
      await Categoria.update({ nome: nome }, { where: { id: id } });
      res.status(201).json({ message: "Categoria atualizada com sucesso!" });
    } catch (error) {
      res.status(500);
      console.log(`Falha na atualização: ${error}`);
    }
  }

  static async deleteCategoria(req, res) {
    const id = req.params.id;

    const categoria = await Categoria.findByPk(id);

    //validações
    if (!categoria) {
      res.status(422).json({ message: "Categoria não encontrada." });
      return;
    }

    try {
      await categoria.destroy();
      res
        .status(200)
        .json({
          message: `Categoria: (${categoria.nome}), excluida com sucesso!`,
        });
    } catch (error) {
      res.status(500).json({ message: "Falha na exclusão" });
      console.log(error);
    }
  }
};
