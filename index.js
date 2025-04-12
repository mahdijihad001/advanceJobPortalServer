const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const port = process.env.serverPort;


// Middleware
app.use(express.json());
app.use(cors({
    origin : "http://localhost:5173/",
    credentials : true
}));


app.get("/" , async(req , res) =>{
    res.status(200).json({
        success : true,
        message : "Job portal server runing"
    })
});


app.listen(port , () =>{
    console.log(`http://localhost:${port}`);
    console.log("Server runing success");
})

