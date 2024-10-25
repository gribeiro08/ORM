// models/voto.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Voto = sequelize.define('Voto', {
  ID_VOTO: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ID_VOTACAO: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ID_MORADOR: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  OPCAO_VOTO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'votos',
});

module.exports = Voto;
