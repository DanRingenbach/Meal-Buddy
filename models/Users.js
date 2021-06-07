const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');

class Users extends Model {}

Users.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    email: {
      type: DataTypes.STRING,
      allowNull: false  
    },

    password: {
        
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users',
  }
);

module.exports = Users;
