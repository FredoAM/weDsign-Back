const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:sLcJqqWTAgGWPEXcgkaMfkxokDmcNwna@monorail.proxy.rlwy.net:39672/railway?statusColor=&env=development&name=wedsign&tLSMode=0&usePrivateKey=false&safeModeLevel=0&advancedSafeModeLevel=0&driverVersion=0&showSystemSchemas=0&lazyLoadItems=0');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



sequelize.sync().then(() => {
  console.log('Models synchronized with the database');
}).catch((error) => {
  console.error('Error synchronizing models:', error);
});




module.exports = User;