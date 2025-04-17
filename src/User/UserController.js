const { userModel } = require("./UserModel");

const userRegisterController = async(req , res) =>{
    try {

        const result = await userModel({...req.body});
        result.save();
        if(!result){
            return res.status(401).send({status : false , message : "Bad request. Please try again!"});
        };

        res.status(200).send({status : true , message : "User register success"});

    } catch (error) {
        return res.status(400).send({status : false , message : "User registraction faild ! Please try again."});
    }
};


module.exports = {userRegisterController};