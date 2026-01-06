const express = require("express");
const upload = require("../middleware/multerMarksheets");

const router = express.Router();

router.post(
  "/upload-marksheets",
  upload.array("marksheets", 8),
  (req, res) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    const files = req.files.map(file => ({
      originalName: file.originalname,
      fileName: file.filename,
      size: file.size,
      type: file.mimetype,
    }));

    res.status(201).json({
      message: "Marksheets uploaded successfully",
      files,
    });
  }
);

module.exports = router;
