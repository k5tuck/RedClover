'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Accounts.init({
    account_number: DataTypes.UUID,
    account_type: DataTypes.STRING,
    current_balance: DataTypes.FLOAT,
    available_balance: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Accounts',
  });
  return Accounts;
};