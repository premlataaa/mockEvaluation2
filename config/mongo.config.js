const mongoose = require("mongoose");

const connectDB = async(req,res) => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        res.status(200).json({msg:"connected to DB"})
    }catch(err){
        res.status(400).json({msg:"error in connecting to DB"});
        console.log(err)
    }
}

 module.exports = connectDB;