'use strict';

const airport = require('../models/airport');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
    {
    name: 'Kempegauda',
    cityId :'1',
    createdAt:new Date(),
    updatedAt:new Date()
    },
    {
      name: 'Kempa',
      cityId :'2',
      createdAt:new Date(),
      updatedAt:new Date()
     },
     {
      name: 'das',
      cityId :'3',
      createdAt:new Date(),
      updatedAt:new Date()
     },
     {
      name: 'dragon',
      cityId :'4',
      createdAt:new Date(),
      updatedAt:new Date()
     },
     {
      name: 'Xuan',
      cityId :'5',
      createdAt:new Date(),
      updatedAt:new Date()
     },
     {
      name: 'Pheonix',
      cityId :'6 ',
      createdAt:new Date(),
      updatedAt:new Date()
     },
     {
      name: 'lion',
      cityId :'6 ',
      createdAt:new Date(),
      updatedAt:new Date()
     },

   
  ]) 
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
