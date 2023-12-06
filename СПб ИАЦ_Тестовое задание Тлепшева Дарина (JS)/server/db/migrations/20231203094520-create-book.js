'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      pages: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      publishedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      reference_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'SimpleReferences',
          key: 'id',
        },
      },
      hierarchy_reference_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'HierarchicalReferences',
          key: 'id',
        },
      },
      image: {
        type: Sequelize.STRING(255),
      },
      blob: {
        type: Sequelize.BLOB,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  },
};
