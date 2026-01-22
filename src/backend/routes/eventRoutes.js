const express = require("express");
const Event = require("../models/Event");
const { protect } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");

const router = express.Router();

// Public
router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// Admin only
router.post("/", protect, allowRoles("admin"), async (req, res) => {
  const event = await Event.create(req.body);
  res.status(201).json(event);
});

module.exports = router;
