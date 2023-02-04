const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FinancialGoal extends Model { }

FinancialGoal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    goal_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    goal_price: {
      type: DataTypes.DECIMAL,
    },
    monthly_contr: {
      type: DataTypes.DECIMAL,
      allowNull: false,
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
    modelName: 'FinancialGoal',
  }
);

module.exports = FinancialGoal;

// got rid of defaultvalue:0 under user_id