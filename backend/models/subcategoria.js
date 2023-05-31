const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const Categoria = require('./categoria')

const subcategoria = db.define("subcategoria", {
  nome: {
    type: DataTypes.STRING(100),
    required: true,
    allowNull: false,
  },
});

subcategoria.belongsTo(Categoria, {foreignKey:"id_categoria"})
Categoria.hasMany(subcategoria, {foreignKey:"id_categoria"})

module.exports = subcategoria;
