// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('mysql://root:sLcJqqWTAgGWPEXcgkaMfkxokDmcNwna@monorail.proxy.rlwy.net:39672/railway?statusColor=&env=development&name=wedsign&tLSMode=0&usePrivateKey=false&safeModeLevel=0&advancedSafeModeLevel=0&driverVersion=0&showSystemSchemas=0&lazyLoadItems=0');

// const Usuario = sequelize.define('Usuario', {
//   id: {
//     type: DataTypes.UUID,
//     defaultValue: Sequelize.UUIDV4,
//     primaryKey: true,
//   },
//   usuario: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   correo: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//     validate: {
//       isEmail: true,
//     },
//   },
//   contraseña: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });



// sequelize.sync().then(() => {
//   console.log('Modelos sincronizados con la base de datos de usuario');
// }).catch((error) => {
//   console.error('Error al sincronizar modelos:', error);
// });




// module.exports = Usuario;
