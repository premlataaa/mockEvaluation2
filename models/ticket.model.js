const mongoose = require("mongoose");


const TicketSchema = new mongoose.Schema({
    userId:{type:mongoode.Schema.Types.ObjectId,ref:"User"},
    dateOfTravel:{type:Date, required:true},
    modeOfTravel:{type:String,enum:["train", "bus"], required:true},
    perHeadPrice:{type:Number},
    from:{type:String},
    to:{type:String},
    numberOfPassengers:{type:Number},
    totalPrice:{type:Number},
});

 TicketSchema.pre('save', function (next) {
    this.totalPrice = this.perHeadPrice * this.numberOfPassengers;
    next();
 });
 

const UserModel = mongoose.model("User",UserSchema);
module.exports = UserModel;