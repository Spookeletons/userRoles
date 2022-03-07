'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RolePermission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RolePermission.init({
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    permission_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'RolePermission',
    tableName: 'roles_role_permissions',
    timestamps: false
  });
  return RolePermission;
};