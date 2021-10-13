const { Sequelize } = require('sequelize');

const dbConfig = {
  "development": {
    "username": "root",
    "password": "",
    "database": "demo_user_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

// const dbConfig = {
//     // HOST: "localhost",
//     USER: "root",
//     PASSWORD: "",
//     DB: "demo_user_db",
//     dialect: "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   };

  module.exports = new Sequelize(dbConfig.development.database, dbConfig.development.username , dbConfig.development.password, {
    dialect:dbConfig.development.dialect
})
