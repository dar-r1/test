'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'SimpleReferences',
      [
        { name: 'Book 1', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Book 2', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Book 3', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Book 4', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Book 5', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Book 6', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Book 7', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Book 8', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Book 9', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Book 10', createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('SimpleReferences', null, {});
  },
};
