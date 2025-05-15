const express = require("express");
const { updateCompanyController, companySocialNetworkUpdate, updateCompanyAddress, getfullSingleCompany } = require("./companyController");
const companyRouter = express.Router();
// Company
companyRouter.patch("/update/:id" , updateCompanyController);
companyRouter.get("/single/:id" , getfullSingleCompany);

// Social Network
companyRouter.patch("/social/:id" , companySocialNetworkUpdate);
// Company address 
companyRouter.patch("/address/:id" , updateCompanyAddress);




module.exports = companyRouter