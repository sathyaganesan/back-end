const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

// const restrict = require("./user/middleware");
const userRouter = require("./user/router");
const recipeRouter = require("./recipe/router");
const ingredientRouter = require("./ingredients/router");
const instructionRouter = require("./recipe_ingredients/router");
 
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

server.use(userRouter);
server.use(recipeRouter);
server.use(ingredientRouter);
server.use(instructionRouter);

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