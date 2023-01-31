const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Liabilities extends Model { }

Liabilities.init(
  {
    id: {
      type: DataTypes.BIGINTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    liabilities_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    auto_loan: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    personal_loan: {
      type: DataTypes.DECIMAL,
    },
    mortgage: {
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
    }
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
module.exports = Liabilities;