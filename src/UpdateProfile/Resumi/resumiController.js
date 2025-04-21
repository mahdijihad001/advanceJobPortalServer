const mongoose = require("mongoose");
const { userModel } = require("../../User/UserModel");


const getResumiController = async (req, res) => {
    try {

        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ status: false, message: "User not valid!" });
        };


        const resumi = await userModel.aggregate([
            {
                $lookup: {
                    from: "profile",
                    localField: "_id",
                    foreignField: "authore",
                    as: "profile"
                }
            },
            {
                $lookup : {
                    from : "network",
                    localField : "_id",
                    foreignField : "authore",
                    as : "network"
                }
            },
            {
                $lookup : {
                    from : "contact",
                    localField : "_id",
                    foreignField : "authore",
                    as : "contact"
                }
            }

        ])

    } catch (error) {
        return res.status(404).send({ status: false, message: "User resumi not found!" });
    }
}







