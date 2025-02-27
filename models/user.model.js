const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    mobileNumber:{type:String},
    gender:{type:String},
    role:{type:String, enum:["admin","customer"]},
})
 

const UserModel = mongoose.model("User",UserSchema);
module.exports = UserModel;