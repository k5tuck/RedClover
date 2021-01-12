"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return await queryInterface.bulkInsert("Accounts", [
      {
        account_type: "Checking",
        account_number: "100823456",
        account_name: "Personal Checking",
        member_id: 3,
        curr_balance: 1008.5,
        avail_balance: 1008.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        account_type: "Savings",
        account_number: "100914568",
        account_name: "Personal Savings",
        member_id: 1,
        curr_balance: 3000.0,
        avail_balance: 3000.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        account_type: "Checking",
        account_number: "100893216",
        account_name: "Personal Checking",
        member_id: 2,
        curr_balance: 2500.38,
        avail_balance: 2149.23,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Accounts", null, {});
  },
};
