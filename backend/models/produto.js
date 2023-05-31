const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const Subcategoria = require('./subcategoria')

const produto = db.define("produto", {
  nome: {
    type: DataTypes.STRING(100),
    required: true,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    required: true,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING(500),
    required: true,
    allowNull: false,
  },
  ficha_tecnica: {
    type: DataTypes.STRING(500),
    required: true,
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING(500),
    required: true,
    allowNull: false,
  },
  disponivel: {
    type: DataTypes.BOOLEAN,
    required: true,
    allowNull: false,
  },
});

produto.belongsTo(Subcategoria, { foreignKey: "id_subcategoria"});
Subcategoria.hasMany(produto, { foreignKey: "id_subcategoria"});

module.exports = produto;
