// models/ocorrencia.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ocorrencia = sequelize.define('Ocorrencia', {
  ID_OCORRENCIA: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  DESCRICAO_OCORRENCIA: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DATA_OCORRENCIA: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  ID_MORADOR: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'ocorrencias',
});

module.exports = Ocorrencia;
