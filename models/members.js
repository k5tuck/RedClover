'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Members.init({
    member_id: DataTypes.UUID,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    street: DataTypes.STRING,
    add_street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    ssn: DataTypes.INTEGER,
    issued_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Members',
  });
  return Members;
};