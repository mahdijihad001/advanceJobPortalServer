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
        const page = Number(req.query.page) || 1;
        const limit = 10
        const skip = (page - 1) * limit;

        if(id){
            filter.authore = id;
        }
        if(department ){
            filter.jobType = department;
        }

        const totalJob = await jobModel.countDocuments();
        const totalPage = Math.ceil(totalJob / limit);


        const result = await jobModel.find(filter).skip(skip).limit(limit).sort({createdAt : -1});

        if(!result || result.length === 0){
            return res.status(400).send({status : false , message : "Job not founded!"});
        }

        res.status(200).send({status : true , message : "Job founded" , data : {allJobs : result , totalPage , totalJob }});

    } catch (error) {
        return res.status(401).send({status : false , message : "Job not found!" , error : error.message});
    }
}


const updateJobController = async(req , res ) =>{
    try {
        
        const {id} = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send({status : false , message : "User not valid!"});
        }

        const result = await jobModel.findByIdAndUpdate(id , {...req.body} , {new : true , runValidators : true});

        if(!result){
            return res.status(400).send({status : false , message : "Job not update! Please try again."});
        };

        res.status(200).send({status : true , message : "Job update success."});


    } catch (error) {
        return res.status(500).send({status : false , message : "Jon not updated!" , error  : error.message});
    }
};


const deleteJobController = async(req , res) =>{
    try {
        
        const {id} = req.params;
        
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send({status : false , message : "Invalid Job ID!"});
        }

        const result = await jobModel.findByIdAndDelete(id);

        if(!result){
            return res.status(400).send({status : false , message : "Job not deleted! Please try again."});
        };

        res.status(200).send({status : true , message : "Job deleted successfully."});

    } catch (error) {
        return res.status(500).send({status : false , message : "Job not deleted!" , error : error.message});
    }
}


module.exports = {createJobController , findAllJobs , updateJobController , deleteJobController};