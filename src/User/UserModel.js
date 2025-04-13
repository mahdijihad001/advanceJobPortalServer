const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true , "Username is required"]
    },
    email : {
        type : String,
        required : [true , "email is required"]
    },
    password : {
        type : String,
        required : [true , "password is required"]
    },
    role : {
        type : String,
        default : "candidate",
        enum : ["candidate" , "employe" , "admin"]
    }
} , {
    timestamps : true
});


const userModel = mongoose.model("user" , userSchema);

module.exports = {userModel};