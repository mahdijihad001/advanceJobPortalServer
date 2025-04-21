const mongoose = require("mongoose");

const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    authore : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : [true , "Authore is required"]
    },
    country : String,
    city : String,
    compliteAddress : String

} , {timestamps : true , versionKey : false});

const contactModel = mongoose.model("contact" , contactSchema);

module.exports = contactModel