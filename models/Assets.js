const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Assets extends Model {}

Assets.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    monthy_income: {
      type: DataTypes.decimal,
      allowNull: false,
    },
    vehicles: {
      type: DataTypes.INTEGER,
    },
    properties: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    savings: {
      type: DataTypes.decimal,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Assets',
  }
);

module.exports = Project;