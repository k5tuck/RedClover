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
    return await queryInterface.bulkInsert("Members", [
      {
        username: "blackjack",
        hash: "$2a$10$r9d2wcJswYQV4674pMku2eah0FLyRU/NI0skNoA4G7H5u3lnj56S2",
        firstname: "Jack",
        lastname: "Black",
        address: "213 Light Way",
        addt_address: "",
        country: "Argentina",
        city: "Buenos Aires",
        state: "",
        zip: "",
        email: "blackjack@mail.com",
        phone: "+011968274023",
        ssn: "101733289",
        govtid: "",
        govtnum: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "blackclover",
        hash: "$2a$10$1HMGOJn/cpB.nZzwC6ATmucQhOjr14Aa8CaACjQMom2vV.Cl.cvJa",
        firstname: "Clover",
        lastname: "Black",
        address: "598 Green St",
        addt_address: "",
        country: "United States",
        city: "Atlanta",
        state: "Georgia",
        zip: "33012",
        email: "blackclover@anime.com",
        phone: "4043291198",
        ssn: "456285618",
        govtid: "",
        govtnum: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "blackspade",
        hash: "$2a$10$uhu3xORPrxarT1KsH.4Yvugemz6isD3aPNi95xOpP1jr6O4GbGgYC",
        firstname: "Spade",
        lastname: "Black",
        address: "893 Blake Dr",
        addt_address: "",
        country: "New Zealand",
        city: "Christchurch",
        state: "",
        zip: "",
        email: "blackspade@mail.nz.com",
        phone: "+6445690192",
        ssn: "999730241",
        govtid: "",
        govtnum: "",
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
    return await queryInterface.bulkDelete("Members", null, {});
  },
};
