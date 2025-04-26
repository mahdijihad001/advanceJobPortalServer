const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: [true, "Company name are required!"]
    },
    image: {
        type: String
    },
    companyEmail: {
        type: String,
        required: [true, "Company Email are required!"]
    },
    companyPhoneNo: {
        type: String,
        required: [true, "Company phone no are required!"]
    },
    companyWebsite: {
        type: String
    },
    estSince: {
        type: String
    },
    teamSize: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
});

const companyModel = mongoose.model("company", companySchema);

module.exports = companyModel
