'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airports', [
      {
        name : 'Kempagowda International Airport',
        cityId : 5,
        createdAt : new Date(),
        UpdatedAt : new Date()
      },
      {
        name : 'Mysuru Airport',
        cityId : 5,
        createdAt : new Date(),
        UpdatedAt : new Date()
      },
      {
        name : 'Mengaluru International Airport',
        cityId : 5,
        createdAt : new Date(),
        UpdatedAt : new Date()
      },
      {
        name : 'Indira Gandhi International Airport',
        cityId : 11,
        createdAt : new Date(),
        UpdatedAt : new Date()
      }
    ], {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
