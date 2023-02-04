const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Asset extends Model { }

Asset.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    monthy_income: {
      type: DataTypes.FLOAT,
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
      type: DataTypes.FLOAT,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Asset',
  }
);

module.exports = Asset;

// got rid of defaultValue:0 under user_id