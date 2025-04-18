const express = require("express");
const { userRegisterController, userLoginController, logOutController, findAllUserController, deleteSingleUserController } = require("./UserController");

const userRouter = express.Router();

userRouter.post("/register" , userRegisterController);
userRouter.post("/login" , userLoginController);
userRouter.post("/logout" , logOutController);
userRouter.get("/find" , findAllUserController);
userRouter.delete("/delete" , deleteSingleUserController);








module.exports = {userRouter};