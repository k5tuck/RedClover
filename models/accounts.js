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
        foreignKey: "member_id",
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
      account_number: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      member_id: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Members",
          key: "id",
        },
      },
      curr_balance: DataTypes.DECIMAL,
      avail_balance: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Accounts",
    }
  );
  return Accounts;
};
