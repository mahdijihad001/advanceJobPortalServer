const mongoose = require("mongoose");

const networkSchema = new mongoose.Schema({

} , {timestamps : true , versionKey : false});

const networkModel = mongoose.model("network" , networkSchema);

module.exports = networkModel