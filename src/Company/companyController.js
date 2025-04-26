const mongoose = require("mongoose");
const companyModel = require("./companyModel");

// Company Controller

const updateCompanyController = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ status: false, message: "User not valid!" });
        };

        await companyModel.findByIdAndUpdate(id, { ...req.body }, { new: true, runValidators: true });
        res.status(200).send({ status: true, message: "Company Update Success" });

    } catch (error) {
        return res.status(500).send({ status: false, message: "Conpany Update faild!" });
    }
}