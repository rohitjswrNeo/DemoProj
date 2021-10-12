const express = require('express')
const cors = require("cors");

const app = express()


var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// app.get("/", (req, res) => {
//     res.send("Hello World")
// })

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to first application." });
// });
app.use("/api/users", require('./routes/api/user'))

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server Stared")
})