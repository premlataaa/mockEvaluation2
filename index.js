const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/mongo.config")
require ("dotenv").config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT

app.get("/",(req,res)=>{
    res.send("This is test route");
});

app.listen(PORT, ()=>{
    console.log("Server started")
    connectDB();
});