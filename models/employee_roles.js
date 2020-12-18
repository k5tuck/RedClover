"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee_Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee_Roles.belongsTo(models.Employee, {
        foreignKey: "employeeid",
        onDelete: "CASCADE",
      });
    }
  }
  Employee_Roles.init(
    {
      job_title: DataTypes.STRING,
      employeeid: DataTypes.INTEGER,
      department: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Employee_Roles",
    }
  );
  return Employee_Roles;
};
