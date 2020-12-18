"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.belongsTo(models.Members, {
        foreignKey: "memberid",
        onDelete: "CASCADE",
      });
      Users.hasMany(models.Accounts, {
        foreignKey: "memberid",
      });
    }
  }
  Users.init(
    {
      username: DataTypes.STRING,
      hash: DataTypes.STRING,
      memberid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
