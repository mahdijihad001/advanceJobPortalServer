const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    authore: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Authore are required!"]
    },
    country : {
        type : String ,
        required : [true , "Country name are required!"]
    },
    city : {
        type : String,
        required : [true , "City name are required!"]
    },
    compliteAddress : String,
    required : [true , "Company complete address are required!!"]
}, {
    timestamps: true,
    versionKey: false
});

const companyContactModel = mongoose.model("companyContact", companySchema);

module.exports = companyContactModel
