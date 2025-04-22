const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    jobTitle : {
        type : String , 
        required : [true , "Job title are required"]
    },
    jobType : {
        type : String , 
        required : [true , "Job tipe are required"]
    },
    offerdSalary : {
        type : String , 
        required : [true , "offerdSalary are required"]
    },
    exprience : {
        type : String , 
        required : [true , "exprience are required"]
    },
    gender : {
        type : String , 
        required : [true , "gender are required"]
    },
    industry : {
        type : String , 
        required : [true , "industry are required"]
    },
    applicationDadeline : {
        type : String , 
        required : [true , "applicationDadeline are required"]
    },
    description : {
        type : String , 
        required : [true , "description are required"]
    },
    keyResponsibilitie : {
        type : String 
    },
    skillExperience : {
        type : String 
    },
} , {timestamps : true , versionKey : false});

const jobModel = mongoose.model("job" , jobSchema);

module.exports = jobModel