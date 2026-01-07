const express = require("express");
const upload = require("../middleware/multerMarksheets");

const router = express.Router();

// UPLOAD MARKSHEETS
router.post(
  "/upload-marksheets",
  upload.array("marksheets", 8),
  (req, res, next) => {
    try {
      if (!req.files || req.files.length === 0) {
        const error = new Error("No files uploaded");
        error.statusCode = 400;
        throw error;
      }

      const files = req.files.map((file) => ({
        originalName: file.originalname,
        fileName: file.filename,
        size: file.size,
        type: file.mimetype,
      }));

      res.status(201).json({
        success: true,
        message: "Marksheets uploaded successfully",
        files,
      });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
