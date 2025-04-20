const express = require("express");
const { updateProfileControler } = require("./ProfileController");
const profileRouter = express.Router();

profileRouter.patch("/update/:id" , updateProfileControler);

module.exports = profileRouter