const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FinancialGoals extends Model { }

FinancialGoals.init(
  {
    id: {
      type: DataTypes.BIGINTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    goal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Liabilities',
  }
);

module.exports = router;