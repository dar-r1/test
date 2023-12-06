('use strict');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'UserRoles',
      [
        { userId: 1, roleId: 1, createdAt: new Date(), updatedAt: new Date() },
        {
          userId: 2,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { userId: 3, roleId: 2, createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, roleId: 3, createdAt: new Date(), updatedAt: new Date() },
        {
          userId: 2,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { userId: 3, roleId: 1, createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, roleId: 1, createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('UserRoles', null, {});
  },
};
