const mongoose = require("mongoose");
const jobModel = require("./JobModel");

const createJobController = async(req , res) =>{
    try {  
        const {jobTitle , authore , jobType , offerdSalary , exprience , gender , industry , applicationDadeline , description , keyResponsibilitie , skillExperience} = req.body;

        if(!jobTitle || !authore || !jobType || !offerdSalary || !exprience || !gender || !industry || !applicationDadeline || !description || !keyResponsibilitie || !skillExperience){
            return res.status(400).send({status : false , message : "All filds are required"});
        }

        const create = await jobModel({...req.body});

        await create.save();
        res.status(200).send({status : true , message : "Job created success"});

    } catch (error) {
        return res.status(401).send({status : false , message : "Job Created faild!"});
    }
};

const findAllJobs = async(req , res) =>{
    try {
        
        const filter = {};

        const {id} = req.params;
        const department  = req.query.filter;

        if(id){
            filter.authore = id;
        }
        if(department ){
            filter.jobType = department;
        }

        const result = await jobModel.find(filter);

        if(!result || result.length === 0){
            return res.status(400).send({status : false , message : "Job not founded!"});
        }

        res.status(200).send({status : true , message : "Job founded" , job : result});

    } catch (error) {
        return res.status(401).send({status : false , message : "Job not found!"});
    }
}



