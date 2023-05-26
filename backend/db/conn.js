const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dbcamel", "postgres", "123", {
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