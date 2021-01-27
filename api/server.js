const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const restrict = require("./user/middleware");

const server = express();

server.use(helmet());
server.use(cors());
server.use(cookieParser());

server.get("/", async (req, res, next) => {
    try {
        res.status(200).json({
            Message: "Welcome to our Family Recipe App",
        })
    } catch (err) {
        next(err);
    }
});

server.use((err, req, res, next) => {
    console.log(err);
    try {
        res.status(500).json({
            Message: "Something went wrong",
        })
    } catch (err) {
        next(err);
    }
})

module.exports = server;