const express = require('express')
const router = express.Router()
const uuid = require("uuid")

let users = require("../../Users")

router.get("/", (req, res) => {
    res.json(users)
});

router.get("/:id", (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    } else {
        res.sendStatus(400)
    }
});

router.post("/", (req, res) => {
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        age: req.body.age,
    }

    if (!req.body.name || !req.body.age) {
        return res.sendStatus(400)
    }

    users.push(newUser);
    res.json(users)
})

router.put("/:id", (req, res) => {
    const existingUser = users.some(user => user.id === parseInt(req.params.id))

    if (existingUser) {
        let userData = req.body
        users.forEach(user => {
            if (user.id === parseInt(req.params.id)) {
                user.name = userData.name
                user.age = userData.age
                res.json({ "msg": "Data Updated", users })
            }
        })
    } else {
        res.sendStatus(400)
    }
})

router.delete("/:id", (req, res) => {
    const existingUser = users.some(user => user.id === parseInt(req.params.id))

    if (existingUser) {
        const removedUser = users.filter(user => user.id !== parseInt(req.params.id))
        users = removedUser
        res.json({ "msg": "User Deleted", users })
    } else {
        res.sendStatus(400)
    }
})

module.exports = router