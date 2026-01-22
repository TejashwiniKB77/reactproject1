const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");
const Counseling = require("../models/Counseling");

const router = express.Router();

/* ===============================
   STUDENT SUBMIT REQUEST
================================ */
router.post("/request", async (req, res, next) => {
  try {
    const request = new Counseling(req.body);
    await request.save();

    res.status(201).json({
      success: true,
      message: "Counseling request submitted",
    });
  } catch (err) {
    next(err);
  }
});

/* ===============================
   COUNSELOR VIEW REQUESTS
================================ */
router.get(
  "/requests",
  protect,
  allowRoles("counselor"),
  async (req, res, next) => {
    try {
      const requests = await Counseling.find();
      res.json({ success: true, data: requests });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
