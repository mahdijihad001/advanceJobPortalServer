const mongoose = require("mongoose");

const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({

} , {timestamps : true , versionKey : false});

const contactModel = mongoose.model("contact" , contactSchema);

module.exports = contactModel