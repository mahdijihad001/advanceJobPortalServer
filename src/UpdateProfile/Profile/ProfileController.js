const mongoose = require("mongoose");
const profileModel = require("./ProfileModel");
const { userModel } = require("../../User/UserModel");

const updateProfileControler = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.body);
        console.log(id);
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

const getSingleUserController = async (req, res) => {
    try {

        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ status: false, message: "User not valid!" });
        };


        const resumi = await userModel.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(id) }
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
                $unwind: {
                    path: "$profile",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: "networks",
                    localField: "_id",
                    foreignField: "authore",
                    as: "network"
                }
            },
            {
                $unwind: {
                    path: "$network",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: "contacts",
                    localField: "_id",
                    foreignField: "authore",
                    as: "contact"
                }
            },
            {
                $unwind: {
                    path: "$contact",
                    preserveNullAndEmptyArrays: true
                }
            }
        ]);

        if (!resumi || resumi.length === 0) {
            return res.status(400).send({ status: false, message: "User Resumi not found!" })
        };


        res.status(200).send({ status: true, message: "User resumi found", data: resumi });

    } catch (error) {
        return res.status(404).send({ status: false, message: "User resumi not found!" });
    }
};

module.exports = { updateProfileControler, getSingleUserController };