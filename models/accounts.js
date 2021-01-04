"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Accounts.belongsTo(models.Members, {
        foreignKey: "memberid",
        onDelete: "CASCADE",
      });
      Accounts.hasMany(models.Transactions, {
        foreignKey: "account_number",
      });
      Accounts.hasMany(models.Joint_Accounts, {
        foreignKey: "account_number",
      });
    }
  }
  Accounts.init(
    {
      account_type: DataTypes.STRING,
      account_number: DataTypes.INTEGER,
      memberid: DataTypes.INTEGER,
      curr_balance: DataTypes.FLOAT,
      avail_balance: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Accounts",
    }
  );
  return Accounts;
};
