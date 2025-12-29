const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// CREATE (POST)
router.post("/", async (req, res) => {
  try {
    console.log("REQ BODY:", req.body); // 🔍 DEBUG

    const { name, email, message } = req.body;

    // ✅ validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "All fields are required"
      });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({
      message: "Message sent successfully"
    });

  } catch (err) {
    console.error("CONTACT ERROR:", err);
    res.status(500).json({
      error: "Server error"
    });
  }
});

// READ (GET)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});
// UPDATE contact
router.put("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Contact updated" });
  } catch {
    res.status(500).json({ error: "Update failed" });
  }
});

// DELETE contact
router.delete("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted" });
  } catch {
    res.status(500).json({ error: "Delete failed" });
  }
});


module.exports = router;
