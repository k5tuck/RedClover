"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Accounts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      account_type: {
        type: Sequelize.STRING,
      },
      account_number: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      member_id: {
        type: Sequelize.INTEGER,
      },
      curr_balance: {
        type: Sequelize.DECIMAL,
      },
      avail_balance: {
        type: Sequelize.DECIMAL,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Accounts");
  },
};
