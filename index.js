const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const { userRouter } = require("./src/User/UserRouter");
const port = process.env.serverPort;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const profileRouter = require("./src/UpdateProfile/Profile/ProfileRouter");
const contactRouter = require("./src/UpdateProfile/ContactInformation/ContactRouter");
const networkRouter = require("./src/UpdateProfile/SocialNetwork/NetworkRouter");
const { resumiRouter } = require("./src/UpdateProfile/Resumi/resumiRouter");

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());



app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}));


// Router
app.use("/user" , userRouter);
app.use('/profile' , profileRouter);
app.use("/contact" , contactRouter);
app.use("/network" , networkRouter);
app.use("/resumi" , resumiRouter);



app.get("/" , async(req , res) =>{
    res.status(200).json({
        success : true,
        message : "Job portal server runing"
    });
});

const main = async() =>{
    await mongoose.connect(process.env.mongodb_url);
};


main().then(() => console.log("Mongoose connect success")).catch((error) => {
    console.log("Mongoose connection error");
    console.log("Mongoose error message" + error.message);
})


app.listen(port , () =>{
    console.log(`http://localhost:${port}`);
    console.log("Server runing success");
});

