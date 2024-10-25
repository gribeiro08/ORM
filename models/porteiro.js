// models/porteiro.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Porteiro = sequelize.define('Porteiro', {
  ID_PORTEIRO: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  NOME_PORTEIRO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LOGIN_PORTEIRO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  SENHA_PORTEIRO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'porteiros',
});

module.exports = Porteiro;
