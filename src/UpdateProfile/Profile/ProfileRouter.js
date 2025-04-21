const express = require("express");
const { updateProfileControler, getSingleUserController } = require("./ProfileController");
const profileRouter = express.Router();

profileRouter.patch("/update/:id" , updateProfileControler);
profileRouter.get("/single/:id" , getSingleUserController)

module.exports = profileRouter