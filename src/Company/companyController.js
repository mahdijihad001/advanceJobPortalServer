const mongoose = require("mongoose");
const companyModel = require("./companyModel");
const companyNetworkModel = require("./companyNetworkModel");

// Company Controller

const updateCompanyController = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ status: false, message: "User not valid!" });
        };

        const result = await companyModel.findByIdAndUpdate(id, { ...req.body }, { new: true, runValidators: true });
        if (!result) {
            return res.status(501).send({ status: false, message: "Conpany not update!" });
        }
        res.status(200).send({ status: true, message: "Company Update Success" });

    } catch (error) {
        return res.status(500).send({ status: false, message: "Conpany Update faild!" });
    }
};

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
        return res.status(400).send({ status: false, message: "Social Network faild!" });
    }
};
