// models/reserva.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reserva = sequelize.define('Reserva', {
  ID_RESERVA: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ID_AREA_COMUM: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ID_MORADOR: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  DATA_RESERVA: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'reservas',
});

module.exports = Reserva;
