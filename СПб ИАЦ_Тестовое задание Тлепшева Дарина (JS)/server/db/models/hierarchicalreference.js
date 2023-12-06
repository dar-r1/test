'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HierarchicalReference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HierarchicalReference.init(
    {
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      parent_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'HierarchicalReferences',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'HierarchicalReference',
    }
  );
  return HierarchicalReference;
};
