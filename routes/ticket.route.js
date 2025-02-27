const express = require("express");
const Router = express.Router();
const TicketModel = require("../models/ticket.model");
const  isAdmin = require("../middleware/auth.mw");
const authToken = require("../middleware/auth.mw");

Router.post("/", authToken, async (req, res) => {
  try {
    const ticket = new TicketModel({ ...req.body, userId: req.user._id });
    await ticket.save();
    res.status(201).json({ ticket });
  } catch (err) {
    res.status(400).json({ msg:"error" });
  }
});

// (Admin only)
Router.get("/", authToken, isAdmin, async (req, res) => {
  try {
    const tickets = await TicketModel.find();
    res.send({ tickets });
  } catch (err) {
    res.status(500).json({msg:"error"});
  }
});

module.exports = TicketRoute;