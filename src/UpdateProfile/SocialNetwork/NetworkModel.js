const mongoose = require("mongoose");

const networkSchema = new mongoose.Schema({
    authore : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : [true , "Authore is required"]
    },
    facebook : String,
    twiter : String,
    linkedin : String,
    github : String
} , {timestamps : true , versionKey : false});

const networkModel = mongoose.model("network" , networkSchema);

module.exports = networkModel