'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          fullname: 'TDR',
          login: '123',
          password: await bcrypt.hash('123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: 'BME',
          login: '456',
          password: await bcrypt.hash('456', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: 'ABC',
          login: '789',
          password: await bcrypt.hash('789', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: 'EFG',
          login: '1',
          password: await bcrypt.hash('1', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
