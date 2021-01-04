"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Members.hasMany(models.Accounts, {
        foreignKey: "memberid",
      });
    }
  }
  Members.init(
    {
      username: DataTypes.STRING,
      hash: DataTypes.STRING,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      address: DataTypes.STRING,
      addt_address: DataTypes.STRING,
      country: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zip: DataTypes.INTEGER,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      ssn: DataTypes.STRING,
      govtid: DataTypes.STRING,
      govtnum: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Members",
    }
  );
  return Members;
};
