const mongoose = require("mongoose");
const { userModel } = require("../../User/UserModel");


const  getResumiController = async (req, res) => {
    try {

        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ status: false, message: "User not valid!" });
        };


        const resumi = await userModel.aggregate([
            {
                $match : {_id : new mongoose.Types.ObjectId(id)}
            },
            {
                $lookup: {
                    from: "profiles",
                    localField: "_id",
                    foreignField: "authore",
                    as: "profile"
                }
            },
            {
                $unwind : {
                    path : "$profile",
                    preserveNullAndEmptyArrays : true
                }
            },
            {
                $lookup : {
                    from : "networks",
                    localField : "_id",
                    foreignField : "authore",
                    as : "network"
                }
            },
            {
                $unwind : {
                    path : "$network",
                    preserveNullAndEmptyArrays : true
                }
            },
            {
                $lookup : {
                    from : "contacts",
                    localField : "_id",
                    foreignField : "authore",
                    as : "contact"
                }
            },
            {
                $unwind : {
                    path : "$contact",
                    preserveNullAndEmptyArrays : true
                }
            }
        ]);

        if(!resumi || resumi.length === 0){
            return res.status(400).send({status : false , message : "User Resumi not found!"})
        };


        res.status(200).send({status : true , message : "User resumi found" , data : resumi});

    } catch (error) {
        return res.status(404).send({ status: false, message: "User resumi not found!" });
    }
}



module.exports = {getResumiController}
