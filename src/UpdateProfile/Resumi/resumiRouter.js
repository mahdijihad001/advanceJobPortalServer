const express = require("express");
const { getResumiController } = require("./resumiController");
const resumiRouter = express.Router();

resumiRouter.get("/find/:id" , getResumiController);

module.exports = {resumiRouter};