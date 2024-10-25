//ainda nao defini qual o banco que vamos usar!!!!
//tenemos que conectar dai

const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carrega as variáveis do .env

// Cria uma instância do Sequelize com as configurações do banco de dados
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
});

module.exports = sequelize;
