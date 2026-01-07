const ErrorLog = require("../models/ErrorLog");

const errorHandler = async (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  // categorize error
  let category = "runtime";
  if (statusCode === 400) category = "validation";
  else if (statusCode === 401 || statusCode === 403) category = "auth";
  else if (err.name === "MongoError") category = "database";

  // save error to DB
  try {
    await ErrorLog.create({
      message: err.message,
      endpoint: req.originalUrl,
      method: req.method,
      statusCode,
      category,
    });
  } catch (dbErr) {
    console.error("Failed to log error:", dbErr);
  }

  // send clean response (NO stack trace)
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
