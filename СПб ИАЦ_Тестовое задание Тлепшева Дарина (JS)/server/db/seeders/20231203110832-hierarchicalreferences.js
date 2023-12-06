'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'HierarchicalReferences',
      [
        { name: 'Book 1', createdAt: new Date(), updatedAt: new Date() },
        {
          name: 'Book 2',
          parent_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Book 3',
          parent_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Book 4',
          parent_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Book 5',
          parent_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Book 6',
          parent_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Book 7',
          parent_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Book 8',
          parent_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Book 9',
          parent_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Book 10',
          parent_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('HierarchicalReferences', null, {});
  },
};
