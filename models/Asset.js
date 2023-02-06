const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Asset extends Model {}

Asset.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    monthly_income: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    vehicles: {
      type: DataTypes.INTEGER,
    },
    properties: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    savings: {
      type: DataTypes.FLOAT,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Asset",
  }
);

<<<<<<< HEAD
module.exports = Asset;

// got rid of defaultValue:0 under user_id
=======
module.exports = Asset;
>>>>>>> c0cc583c5dac1fe03a766f2879854934eead7a45
