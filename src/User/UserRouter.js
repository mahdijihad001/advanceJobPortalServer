const express = require("express");
const { userRegisterController, userLoginController, logOutController, findAllUserController, deleteSingleUserController, getSingleUser, updateSingleUser } = require("./UserController");

const userRouter = express.Router();

userRouter.post("/register" , userRegisterController);
userRouter.post("/login" , userLoginController);
userRouter.post("/logout" , logOutController);
userRouter.get("/find" , findAllUserController);
userRouter.delete("/delete/:id" , deleteSingleUserController);
userRouter.get("/:id" , getSingleUser);
userRouter.patch("/update/:id" , updateSingleUser);



module.exports = {userRouter};