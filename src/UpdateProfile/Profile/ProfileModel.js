const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    authore : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : [true , "Authore id is required"]
    },
    fullname : String,
    image : String,
    jobTitle : String,
    phoneNumber : Number,
    website : String,
    expectedSalary : String,
    exprience : String,
    age : String,
    educationLable : String,
    language : String,
    description : String
} , {
    timeseries : true,
    versionKey : false
});

const profileModel = mongoose.model("profile" , profileSchema);

module.exports = profileModel