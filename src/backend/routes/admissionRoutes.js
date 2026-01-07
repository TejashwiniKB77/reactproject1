const express = require("express");
const Admission = require("../models/Admission");

const router = express.Router();

// CREATE admission
router.post("/", async (req, res, next) => {
  try {
    const { name, email, phone, stream } = req.body;

    if (!name || !email || !phone || !stream) {
      const error = new Error("Required admission fields missing");
      error.statusCode = 400;
      throw error;
    }

    const admission = new Admission(req.body);
    await admission.save();

    res.status(201).json({
      success: true,
      message: "Admission submitted successfully",
    });
  } catch (err) {
    next(err);
  }
});

// GET admissions
router.get("/", async (req, res, next) => {
  try {
    const admissions = await Admission.find();
    res.json(admissions);
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
});

module.exports = router;
