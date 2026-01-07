const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// CREATE contact
router.post("/", async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      throw error;
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    next(err); // 🔥 send to global error handler
  }
});

// GET all contacts
router.get("/", async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
});

module.exports = router;
