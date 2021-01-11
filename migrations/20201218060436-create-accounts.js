"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Accounts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      account_type: {
        type: Sequelize.STRING,
      },
      member_id: {
        type: Sequelize.INTEGER,
      },
      account_name: {
        type: Sequelize.STRING,
      },
      account_number: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      routing_number: {
        type: Sequelize.STRING,
      },
      transfer_account: {
        type: Sequelize.STRING,
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
