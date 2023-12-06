'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.SimpleReference, {
        foreignKey: 'reference_id',
      });

      // связь с таблицей hierarchical_reference
      this.belongsTo(models.HierarchicalReference, {
        foreignKey: 'hierarchy_reference_id',
      });
    }
  }
  Book.init(
    {
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      publishedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      reference_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'SimpleReference',
          key: 'id',
        },
      },
      hierarchy_reference_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'HierarchicalReference',
          key: 'id',
        },
      },
      image: {
        type: DataTypes.STRING(255),
      },
      blob: {
        type: DataTypes.BLOB,
      },
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );
  return Book;
};
