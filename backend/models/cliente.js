const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const Endereco = require("./endereco.js")

const cliente = db.define("cliente", {
  nome: {
    type: DataTypes.STRING(100),
    required: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    required: true,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING(100),
    required: true,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING(11),
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING(11),
    unique: true,
  },
});

cliente.associations = (models) => {
  cliente.hasOne(models.Endereco, {foreignKey: 'id_cliente'})
}

// cliente.belongsTo(Endereco, {
//   foreignKey: {
//     name: 'userId',
//     type: DataTypes.INTEGER,
//     unique: true
//   },
// });

module.exports = cliente;
