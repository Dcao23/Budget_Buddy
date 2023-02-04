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
      allowNull: false,
    },
    personal_loan: {
      type: DataTypes.DECIMAL,
    },
    mortgage_rent: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    credit_card: {
      type: DataTypes.DECIMAL,
    },
    student_loan: {
      type: DataTypes.DECIMAL
    },
    utilities: {
      type: DataTypes.DECIMAL
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
    modelName: 'Liability',
  }
);

module.exports = Liability;

//took out default 0 from user_id