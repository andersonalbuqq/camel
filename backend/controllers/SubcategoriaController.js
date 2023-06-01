const Subcategoria = require("../models/subcategoria");
const Categoria = require("../models/categoria");

module.exports = class SubcategoriaController {
  static async create(req, res) {
    const { nome, id_categoria } = req.body;

    //validações
    if (!nome) {
      res.status(422).json({ message: "O nome é obrigatório" });
      return;
    }

    if (!id_categoria) {
      res.status(422).json({ message: "A categoria é obrigatoria." });
      return;
    }

    const categoriaExiste = await Categoria.findOne({
      where: { id: id_categoria },
    });

    if (!categoriaExiste) {
      res.status(422).json({ message: "Informe uma categoria válida" });
      return;
    }

    const subcategoriaExiste = await Subcategoria.findOne({
      where: { nome: nome, id_categoria: id_categoria },
    });

    if (subcategoriaExiste) {
      res.status(422).json({ message: "Subcategoria já cadastrada." });
      return;
    }

    const subcategoria = new Subcategoria({
      nome,
      id_categoria,
    });

    try {
      await subcategoria.save();
      res.status(201).json({ message: "Subcategoria criada com sucesso!", subcategoria });
    } catch (error) {
      res.status(500).json({ message: "Falha na criação da subcategoria" });
      console.log(error);
    }
  }

  static async getSubcategoria(req, res) {
    const id = req.params.id;

    const subcategoria = await Subcategoria.findByPk(id);

    //validações
    if (!subcategoria) {
      res.status(422).json({ message: "Subcategoria não encontrada." });
      return;
    }

    res.status(200).json(subcategoria);
  }

  static async updateSubcategoria(req, res) {
    const { id, nome, id_categoria } = req.body;

    //validações
    if (!id) {
      res.status(422).json({ message: "Subcategoria não encontrada." });
      console.log("informe o id da subcategoria");
      return;
    }

    const subcategoria = await Subcategoria.findByPk(id);

    if (!subcategoria) {
      res.status(422).json({ message: "Subcategoria não encontrada." });
      return;
    }

    if (!id_categoria) {
      res.status(422).json({ message: "Informe a categoria." });
      return;
    }

    const categoriaExiste = await Categoria.findByPk(id_categoria);
    if (!categoriaExiste) {
      res.status(422).json({ message: "Categoria não encontrada." });
      return;
    }

    if (!nome) {
      res.status(422).json({ message: "O nome é obrigatório" });
      return;
    }

    const subcategoriaExiste = await Subcategoria.findOne({
      where: { nome: nome, id_categoria: id_categoria },
    });

    if (subcategoriaExiste) {
      res.status(422).json({ message: "Subcategoria já cadastrada." });
      return;
    }

    try {
      await Subcategoria.update(
        { nome: nome, id_categoria: id_categoria },
        { where: { id: id } }
      );
      res.status(201).json({ message: "Subcategoria atualizada com sucesso!" });
    } catch (error) {
      res.status(500);
      console.log(`Falha na atualização: ${error}`);
    }
  }

  static async deleteSubcategoria(req, res) {
    const id = req.params.id;

    const subcategoria = await Subcategoria.findByPk(id);

    //validações
    if (!subcategoria) {
      res.status(422).json({ message: "Categoria não encontrada." });
      return;
    }

    try {
      await subcategoria.destroy();
      res.status(200).json({
        message: `Subcategoria: (${subcategoria.nome}), excluida com sucesso!`,
      });
    } catch (error) {
      res.status(500).json({ message: "Falha na exclusão" });
      console.log(error);
    }
  }
};
