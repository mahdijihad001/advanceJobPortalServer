const genarateToken = require("../Middleware/JWT/GenerateJwt");
const { userModel } = require("./UserModel");


const userRegisterController = async(req , res) =>{
    try {
        const findEmail = await userModel.findOne({email : req.body.email});

        if(findEmail){
            return res.status(400).send({status : false , message : "Email Already used! Please try another email."});
        };

        const findUserName = await userModel.findOne({username : req.body.username});

        if(findUserName){
            return res.status(400).send({status : false , message : "Username Already used! Please try another username."});
        }

        const result = await userModel({...req.body});

        await result.save();
        if(!result){
            return res.status(401).send({status : false , message : "Bad request. Please try again!"});
        };

        res.status(200).send({status : true , message : "User register success"});

    } catch (error) {
        return res.status(400).send({status : false , message : error.message});
    }
};




const userLoginController = async(req , res ) =>{
    try {
        
        const {username , password} = req.body;

        const findUser = await userModel.findOne({username : username});

        if(!findUser){
            return res.status(404).send({statas : false , message : "User not found! Please try valid information."})
        };

        const compairePassword = await verifyPassword(password);

        if(!compairePassword){
            return res.statas(400).send({status : false , message : "Invalid password!"});
        };

        const token = await genarateToken(username);

        // res.cookie("token" , token , {httpOnly : true , secure : true , sameSite : "None"}); for production
        res.cookie("token" , token , {httpOnly : true}); // development mood

        res.status(200).send({status : true , message : "Login success" , data : findUser});

    } catch (error) {
        return res.status(400).send({status : false , message : "User not valid!"})
    }
}


module.exports = {userRegisterController , userLoginController};