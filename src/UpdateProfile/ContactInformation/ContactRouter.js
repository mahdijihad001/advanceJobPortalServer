const express = require("express");
const { contactUpdateController, getSingleContact } = require("./ContactController");
const contactRouter = express.Router();

contactRouter.patch("/update/:id" , contactUpdateController);
contactRouter.get("/find/:id" , getSingleContact);



module.exports = contactRouter;