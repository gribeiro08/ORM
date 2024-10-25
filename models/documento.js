// models/documento.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Documento = sequelize.define('Documento', {
  ID_DOCUMENTO: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  TIPO_DOCUMENTO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DATA_DOCUMENTO: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'documentos',
});

module.exports = Documento;
