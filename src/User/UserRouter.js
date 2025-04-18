const express = require("express");
const { userRegisterController, userLoginController, logOutController } = require("./UserController");

const userRouter = express.Router();

userRouter.post("/register" , userRegisterController);
userRouter.post("/login" , userLoginController);
userRouter.post("/logout" , logOutController);









module.exports = {userRouter};