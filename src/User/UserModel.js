const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique : [true , "Username Already used! Please try another username."]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique : [true , "Email Already used! Please try another email."]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    role: {
        type: String,
        enum: ["candidate", "employe", "admin"],
        default: "candidate"
    }
}, {
    timestamps: true
});

userSchema.pre("save" , async function(next){
    if(!this.isModified("password")){
        next();
    };
    this.password = await bcrypt.hash(this.password , 10);
});


userSchema.methods.verifyPassword = async function(plainTextPassword){
    return await bcrypt.compare(plainTextPassword , this.password)
};


const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };