"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Joint_Accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Joint_Accounts.belongsTo(models.Accounts, {
        foreignKey: "account_number",
        onDelete: "CASCADE",
      });
    }
  }
  Joint_Accounts.init(
    {
      account_number: DataTypes.INTEGER,
      first_member: DataTypes.STRING,
      second_member: DataTypes.STRING,
      third_member: DataTypes.STRING,
      fourth_member: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Joint_Accounts",
    }
  );
  return Joint_Accounts;
};
