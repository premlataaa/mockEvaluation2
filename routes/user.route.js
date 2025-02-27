const express = require("express");
const UserModel = require("../models/user.model");
const UserRouter = express.Router();
const jwt= require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

UserRouter.post("/register", async(req,res)=>{
    const {name,password} = req.body;
    const hashedPass = await bcrypt.hash(password,10);
    try{
        const user = new UserModel(req.body);
    await user.save();
    res.status(201).json({msg:"user registered succesfully"});
    }catch(err){
        res.status(400).json({msg:"userAlready exist"})
    }
});

UserRouter.post("/login", async (req, res) => {
    const {name,password}=req.body;
    const user = await UserModel.findOneAndReplace({name});
    if(!user) 
        return res.status(400).json({msg:"invalid credentials"});
    
    const validPassword = await bcrypt .compare(password, user.password);
    if(!validPassword)
        return res.status(400).json ({message:"Invlaid credentials"});

    const token = Jwt.sign(
        {id: user._id,name:user.name},process.env.SECRET_KEY,
        {expiredIn:"24h"}

    );
    res.json({token});
});    
    

module.exports = UserRouter; 