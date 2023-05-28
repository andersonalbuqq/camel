const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const Cliente = require("./cliente.js");

const Endereco = db.define("endereco", {
  cep: {
    type: DataTypes.STRING(8),
    required: true,
    allowNull: false,
  },
  rua: {
    type: DataTypes.STRING(100),
    required: true,
    allowNull: false,
  },
  bairro: {
    type: DataTypes.STRING(100),
    required: true,
    allowNull: false,
  },
  numero: {
    type: DataTypes.INTEGER,
    required: true,
    allowNull: false,
  },
  complemento: {
    type: DataTypes.STRING(100),
  },
  cidade: {
    type: DataTypes.STRING(100),
    required: true,
    allowNull: false,
  },
  uf: {
    type: DataTypes.CHAR(2),
    required: true,
    allowNull: false,
  },
});

Endereco.associations = (models) => {
  Endereco.belongsTo(models.Cliente, {foreignKey: 'id_cliente'})
}

// Endereco.Cliente = Endereco.belongsTo(Cliente, { foreignKey: "id_cliente" });
// Cliente.Endereco = Cliente.hasOne(Endereco, { foreignKey: "id_cliente" });

// endereco.hasOne(Cliente, {
//   foreignKey: {
//     name: 'id_cliente',
//     type: DataTypes.INTEGER,
//     unique: true,
//   },
// });

module.exports = Endereco;
