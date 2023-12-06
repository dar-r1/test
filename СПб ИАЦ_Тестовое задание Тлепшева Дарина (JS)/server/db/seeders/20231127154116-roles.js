('use strict');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Roles',
      [
        {
          name: 'ROLE_LIST_VIEW',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: 'ROLE_EDIT', createdAt: new Date(), updatedAt: new Date() },
        { name: 'ROLE_DELETE', createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Roles', null, {});
  },
};
