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
      Joint_Accounts.belongsTo(models.Members, {
        foreignKey: "member_id",
        onDelete: "CASCADE",
      });
    }
  }
  Joint_Accounts.init(
    {
      account_number: {
        type: DataTypes.STRING,
        references: {
          model: "Accounts",
          key: "account_number",
        },
      },
      member_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Members",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Joint_Accounts",
    }
  );
  return Joint_Accounts;
};
