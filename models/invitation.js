const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('mysql://root:sLcJqqWTAgGWPEXcgkaMfkxokDmcNwna@monorail.proxy.rlwy.net:39672/railway?statusColor=&env=development&name=wedsign&tLSMode=0&usePrivateKey=false&safeModeLevel=0&advancedSafeModeLevel=0&driverVersion=0&showSystemSchemas=0');
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'monorail.proxy.rlwy.net',
  port: 39672,
  username: 'root',
  password: 'sLcJqqWTAgGWPEXcgkaMfkxokDmcNwna',
  database: 'railway'
});

const Invitation = sequelize.define('Invitation', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numberOfGuests: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  family: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  attendance: {
    type: DataTypes.BOOLEAN,
    defaultValue: null,
  },
  pending: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync().then(() => {
  console.log('Models synchronized with the database');
}).catch((error) => {
  console.error('Error synchronizing models:', error);
});

module.exports = Invitation;
