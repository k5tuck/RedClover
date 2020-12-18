"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transactions.belongsTo(models.Accounts, {
        foreignKey: "account_number",
        onDelete: "CASCADE",
      });
    }
  }
  Transactions.init(
    {
      account_number: DataTypes.INTEGER,
      date: DataTypes.DATE,
      merchant: DataTypes.STRING,
      amount: DataTypes.FLOAT,
      avail_balance: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Transactions",
    }
  );
  return Transactions;
};
