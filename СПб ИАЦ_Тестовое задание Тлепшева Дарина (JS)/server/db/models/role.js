'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, {
        through: 'UserRoles',
        foreignKey: 'roleId',
        otherKey: 'userId',
        as: 'Users',
      });
    }
  }
  Role.init(
    {
      name: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Role',
    }
  );
  return Role;
};
