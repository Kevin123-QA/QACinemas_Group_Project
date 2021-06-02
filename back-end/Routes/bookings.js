"use strict";

// Setup
const ROUTER = require("express").Router();
const BOOKING = require("../Models/booking");

// Post Requests
ROUTER.post("/bookings/post", async(req, res) => {
    const DOC = new BOOKING(req.body); // New document using model
    try {
        const CREATED = await DOC.save();
        res.status(201).send(CREATED);
    } catch(err) {
        console.log(err.message);
    }
});

// Export
module.exports = ROUTER;