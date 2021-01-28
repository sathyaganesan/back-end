const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("./model");
// const { restrict } = require("./middleware");

const router = express.Router();

router.get("/users", async (req, res, next) => {
    try {
        res.json(await Users.getUsers());
    } catch (err) {
        next(err);
    }
})

router.post("/signup", async (req, res, next) => {
    console.log(req.body);
    try {
        const { username, password } = req.body;
      
        const [user] = await Users.findByUsername(username)
        console.log(user)
        if (user) {
            return res.status(409).json({
                Message: "Username is already taken"
            })
        }

        const newUser = await Users.addUser({
            username,
            password: await bcrypt.hash(password, 10),
        })
        res.status(201).json(newUser)
    } catch (err) {
        next(err);
    }
})

router.post("/login", async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const [user] = await Users.findByUsername(username)

        if (!user) {
            return res.status(401).json({
                Message: "Invalid User",
            })
        }
        const passwordValid = await bcrypt.compare(password, user.password)
        
        if (!passwordValid) {
            return res.status(401).json({
                Message: "Invalid password",
            })
        }

        const token = jwt.sign({
            userId: user.id,
            username: username, 
        }, process.env.JWT_SECRET)
        res.cookie("token", token);
        res.json({
            Message: `Welcome, ${user.username}`,
        })
    } catch (err) {
        next(err);
    }
})

module.exports = router;
