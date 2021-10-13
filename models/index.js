const { Sequelize } = require('sequelize');
const sequelize = require('../config/db.config')

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./User/modal.user.js")(sequelize, Sequelize);
db.userPost = require("./User/modal.userPost.js")(sequelize, Sequelize);

// const db = require("./User/modal.user")
// db.sequelize.sync()

// sequelize.authenticate()
// .then(()=>{
// console.log('Connection has been established successfully.');
// })
// .catch((error)=> {
// console.error('Unable to connect to the database:', error);
// })

// const User = sequelize.define("User_data", {
//       _id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       name: Sequelize.STRING,
//       description: Sequelize.TEXT
//     });

// sequelize.sync({
//     logging:console.log,
//     force: true
// })

module.exports = db;
