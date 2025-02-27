const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/mongo.config")
const authToken = require("./middleware/auth.mw")
require ("dotenv").config();
const app = express();
app.use(express.json());
const bcrypt = require('bcryptjs');

const PORT = process.env.PORT

app.get("/",(req,res)=>{
    res.send("This is test route");
});

app.listen(PORT, ()=>{
    console.log("Server started")
    connectDB();
});