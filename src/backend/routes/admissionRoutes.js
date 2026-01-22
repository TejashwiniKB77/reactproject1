const express = require("express");
const Admission = require("../models/Admission");

const router = express.Router();

// POST /api/admission/enquiry
router.post("/enquiry", async (req, res, next) => {
  try {
    const { name, email, phone, stream } = req.body;

    if (!name || !email || !phone || !stream) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const admission = new Admission(req.body);
    await admission.save();

    res.status(201).json({
      success: true,
      message: "Admission enquiry submitted"
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/admission
router.get("/", async (req, res, next) => {
  try {
    const admissions = await Admission.find();
    res.json({ success: true, data: admissions });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
