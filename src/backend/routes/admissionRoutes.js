const express = require("express");
const Admission = require("../models/Admission");

const router = express.Router();

// CREATE (POST)
router.post("/", async (req, res) => {
  try {
    const admission = new Admission(req.body);
    await admission.save();
    res.status(201).json({ message: "Admission submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit admission" });
  }
});

// READ (GET)
router.get("/", async (req, res) => {
  try {
    const admissions = await Admission.find();
    res.status(200).json(admissions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch admissions" });
  }
});
router.put("/:id", async (req, res) => {
  await Admission.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Admission updated" });
});

router.delete("/:id", async (req, res) => {
  await Admission.findByIdAndDelete(req.params.id);
  res.json({ message: "Admission deleted" });
});


module.exports = router;
