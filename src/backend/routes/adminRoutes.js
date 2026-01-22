const express = require("express");
const Admission = require("../models/Admission");
const { protect } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");

const router = express.Router();

/* ===============================
   GET /api/admin/enquiries
================================ */
router.get(
  "/enquiries",
  protect,
  allowRoles("admin"),
  async (req, res, next) => {
    try {
      const data = await Admission.find();
      res.json({
        success: true,
        data
      });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
