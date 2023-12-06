'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SimpleReference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SimpleReference.init(
    {
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'SimpleReference',
    }
  );
  return SimpleReference;
};
