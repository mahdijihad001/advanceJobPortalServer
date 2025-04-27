const express = require("express");
const { updateCompanyController, companySocialNetworkUpdate, updateCompanyAddress, getfullSingleCompany } = require("./companyController");
const companyRouter = express.Router();
// Company
companyRouter.patch("/update/:id" , updateCompanyController);
companyRouter.get("/single/:id" , getfullSingleCompany);

// Social Network
companyRouter.param("/social/:id" , companySocialNetworkUpdate);
// Company address 
companyRouter.patch("/addrss/:id" , updateCompanyAddress);




module.exports = companyRouter