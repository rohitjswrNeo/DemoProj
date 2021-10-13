const express = require('express')
const cors = require("cors");

const app = express()

// const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// app.get("/", (req, res) => {
//     res.send("Hello World")
// })


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// const db = require("./models/index");

const db = require("./models");

db.sequelize.authenticate()
.then(()=>{
console.log('Connection has been established successfully.');
db.sequelize.sync();
})
.catch((error)=> {
console.error('Unable to connect to the database:', error);
})


// const connection = new Sequelize('demo_user_db', 'root' , '', {
//     dialect:'mysql'
// })

// const User = connection.define("User", {
//       _id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       name: Sequelize.STRING,
//       description: Sequelize.TEXT
//     });

// connection.sync({
//     logging:console.log,
//     force: false
// })
// .then(()=>{
//     console.log("connection to database established")
// })
// .catch(err=>{
//     console.log("Unable to connect to database", err)
// })

// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to first application." });
// });
app.use("/api/users", require('./routes/api/user'))

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server Stared")
})