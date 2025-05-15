const mongoose = require("mongoose");
const companyModel = require("./companyModel");
const companyNetworkModel = require("./companyNetworkModel");
const companyContactModel = require("./companyContactModel");

// Company Controller

const updateCompanyController = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ status: false, message: "User not valid!" });
        };

        const result = await companyModel.findOneAndUpdate({ authore: id }, { ...req.body }, { new: true, upsert: true, runValidators: true });
        if (!result) {
            return res.status(400).send({ status: false, message: "Conpany not update!" });
        }
        res.status(200).send({ status: true, message: "Company Update Success" });

    } catch (error) {
        return res.status(400).send({ status: false, message: "Conpany Update faild!!!" });
    }
};


const getfullSingleCompany = async (req, res) => {
    try {
        const { id } = req.params;

        // Company
        const company = await companyModel.findOne({ authore: id });
        
        if (!company) {
            return res.status(404).send({ status: false, message: "Company not found!" });
        };
        // contact info
        const contact = await companyContactModel.findOne({ authore: id });

        // network
        const network = await companyNetworkModel.findOne({ authore: id });


        res.status(200).send({ status: true, message: "Company found success!", data :{company , network , contact}})

    } catch (error) {
        return res.status(400).send({ status: false, message: "Company Not Found!" })
    }
}

// Company Social Network

const companySocialNetworkUpdate = async (req, res) => {
    try {

        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ status: false, message: "User not valid!" });
        };

        const result = await companyNetworkModel.findByIdAndUpdate(id, { ...req.body }, { new: true, runValidators: true });

        if (!result) {
            return res.status(501).send({ status: false, message: "Conpany not update!" });
        }
        res.status(200).send({ status: true, message: "Company Update Success" });

    } catch (error) {
        return res.status(400).send({ status: false, message: "Social Network Update faild!" });
    }
};


// Company Address

const updateCompanyAddress = async (req, res) => {
    try {

        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ status: false, message: "User not valid!" });
        };

        const result = await companyContactModel.findByIdAndUpdate(id, { ...req.body }, { new: true, upsert : true, runValidators: true });

        if (!result) {
            return res.status(501).send({ status: false, message: " Address not update!" });
        }
        res.status(200).send({ status: true, message: "Company Address Update Success" });

    } catch (error) {
        return res.status(400).send({ status: false, message: "Company Address Update faild!" });
    }
};


module.exports = { updateCompanyController, companySocialNetworkUpdate, updateCompanyAddress, getfullSingleCompany }