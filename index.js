const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/mongo.config")
const authToken = require("./middleware/auth.mw")
const isAdmin = require("./middleware/auth.mw");
const UserRouter = require("./routes/user.route");
const TickerRoute = require("./routes/ticket.route")
require ("dotenv").config();
const app = express();
app.use(express.json());


const PORT = process.env.PORT

app.get("/",(req,res)=>{
    res.send("This is test route");
});

app.use("/users",UserRouter);
app.use("/tickets",TickerRoute);

