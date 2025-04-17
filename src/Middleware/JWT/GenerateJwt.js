const { userModel } = require("../../User/UserModel");
const jwt = require("jsonwebtoken");


const genarateToken = async(username) =>{
    const findUser = await userModel.findOne({username : username});
    const token = jwt.sign({userName : findUser.username , role : findUser.role} , process.env.jwt_Secrate_token , {expiresIn : "48h"})
    return token
};

module.exports = genarateToken;