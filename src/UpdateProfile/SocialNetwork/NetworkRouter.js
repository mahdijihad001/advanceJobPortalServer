const express = require("express");
const { updateSocialNetwork, getSingleNetwork } = require("./NetworkController");
const networkRouter = express.Router();
networkRouter.patch("/update/:id" , updateSocialNetwork);
networkRouter.get("/find/:id" , getSingleNetwork);



module.exports = networkRouter;