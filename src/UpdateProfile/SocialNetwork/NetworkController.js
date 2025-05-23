const mongoose = require("mongoose");
const networkModel = require("./NetworkModel");


const updateSocialNetwork = async (req, res) => {
    try {

        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ status: false, message: "User not valid! Please try again." });
        };

        const result = await networkModel.findByIdAndUpdate(id, { ...req.body }, { new: true, upsert: true, runValidators: true });

        if (!result) {
            return res.status(400).send({ status: false, message: "Profile update faild!" });
        };

        res.status(200).send({ status: true, message: "Profile updated success" });

    } catch (error) {
        return res.status(401).send({ status: false, message: "Profile update faild!" });
    }
};


const getSingleNetwork = async(req , res) =>{
    try {
        const {id} = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ status: false, message: "User not valid! Please try again." });
        };

        const result = await networkModel.findOne({authore : id});
        if (!result) {
            return res.status(400).send({ status: false, message: "Social Contact not found!" });
        };

        res.status(200).send({status : true , message : "Social newwork founded!" , data : result})

    } catch (error) {
        return res.status(401).send({status : false , message : "Social network not found"})
    }
}

module.exports = {updateSocialNetwork , getSingleNetwork};