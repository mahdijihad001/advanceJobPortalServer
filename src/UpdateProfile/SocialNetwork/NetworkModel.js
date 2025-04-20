const mongoose = require("mongoose");

const networkSchema = new mongoose.Schema({
    facebook : String,
    twiter : String,
    linkedin : String,
    github : String
} , {timestamps : true , versionKey : false});

const networkModel = mongoose.model("network" , networkSchema);

module.exports = networkModel