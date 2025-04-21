const mongoose = require("mongoose");
const profileModel = require("./ProfileModel");

const updateProfileControler = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ status: false, message: "User not valid! Please try again." });
        };

        const result = await profileModel.findByIdAndUpdate(id, { ...req.body }, { new: true, upsert: true, runValidators: true });

        if (!result) {
            return res.status(400).send({ status: false, message: "Profile update faild!" });
        };

        res.status(200).send({ status: true, message: "Profile updated success" });

    } catch (error) {
        return res.status(401).send({ status: false, message: "Profile not update" });
    }
};

const getSingleUserController = async(req , res) =>{
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ status: false, message: "User not valid! Please try again." });
        };


        const result = await profileModel.findOne({_id : id});

        if (!result) {
            return res.status(400).send({ status: false, message: "User profile not Found!" });
        };

        res.status(200).send({ status: true, message: "Profild found success!", profile : result });

    } catch (error) {
        return res.status(404).send({status : false , message : "User profile not found!"})
    }
};

module.exports = { updateProfileControler , getSingleUserController};