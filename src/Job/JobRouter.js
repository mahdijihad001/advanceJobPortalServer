const express = require("express");
const { findAllJobs, createJobController, updateJobController, deleteJobController } = require("./JobController");
const jobRouter = express.Router();


// Employer
jobRouter.get("/findEmployer/:id" , findAllJobs);
jobRouter.post("/create" , createJobController);
jobRouter.patch("/update/:id" , updateJobController);
jobRouter.delete("/delete/:id" , deleteJobController);
// admin
jobRouter.get("/findAll" , findAllJobs);

module.exports = {jobRouter};