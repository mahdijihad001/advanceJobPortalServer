const mongoose = require("mongoose");
const contactModel = require("./ContactModel");


const contactUpdateController = async (req, res) => {
    try {

        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ status: false, message: "User not valid! Please try again." });
        };

        const result = await contactModel.findByIdAndUpdate(id, { ...req.body }, { new: true, upsert: true, runValidators: true });

        if (!result) {
            return res.status(400).send({ status: false, message: "Profile update faild!" });
        };

        res.status(200).send({ status: true, message: "Profile updated success" });

    } catch (error) {
        return res.status(401).send({ status: false, message: "Profile update faild!" });
    }
};


const getSingleContact = async(req , res) =>{
    try {
        
        const {id} = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ status: false, message: "User not valid! Please try again." });
        };


        const result = await contactModel.findOne({authore : id});
        
        if (!result) {
            return res.status(400).send({ status: false, message: "Profile Contact founded faild!" });
        };

        res.status(200).send({status : true , message : "Contact found" , data : result})

    } catch (error) {
        return res.status(404).send({status : false , message : "Contact not found!" });
    }
}

module.exports = {contactUpdateController , getSingleContact};