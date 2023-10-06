const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("CAMEL2", "admin", ".Ca936854a", {
//   host: "64.225.4.41",
//   dialect: "postgres",
// });
const sequelize = new Sequelize("camel", "postgres", "123", {
  host: "localhost",
  dialect: "postgres",
});

try {
  sequelize.authenticate();
  console.log('Conectado com sucesso ao Banco de Dados');
} catch (error) {
  console.error('Não foi possivel conectar ao banco de dados:', error);
}

module.exports = sequelize