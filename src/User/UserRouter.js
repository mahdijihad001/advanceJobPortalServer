const express = require("express");
const { userRegisterController } = require("./UserController");

const userRouter = express.Router();

userRouter.post("/register" , userRegisterController);












module.exports = {userRouter};