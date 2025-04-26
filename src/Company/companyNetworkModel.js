const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    authore: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Authore are required!"]
    },
    facebook: {
        type: String
    },
    twiter: {
        type: String
    },
    linkedin: {
        type: String
    },
    github: {
        type: String
    },
}, {
    timestamps: true,
    versionKey: false
});

const companyNetworkModel = mongoose.model("companyNetwork", companySchema);

module.exports = companyNetworkModel
