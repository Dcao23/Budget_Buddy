const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Liability extends Model { }

Liability.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    auto_loan: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    personal_loan: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    mortgage_rent: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    credit_card: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    student_loan: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    utilities: {
      type: DataTypes.DECIMAL
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Liability',
  }
);

module.exports = Liability;

//took out default 0 from user_id