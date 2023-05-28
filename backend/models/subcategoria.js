const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const subcategoria = db.define("subcategoria", {
  nome: {
    type: DataTypes.STRING(100),
    required: true,
    allowNull: false,
  },
});

module.exports = subcategoria;
