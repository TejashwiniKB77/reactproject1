const ErrorLog = require("../models/ErrorLog");

function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  let category = "runtime";
  if (statusCode === 400) category = "validation";
  else if (statusCode === 401 || statusCode === 403) category = "auth";
  else if (statusCode === 404) category = "not_found";
  else if (err.name === "MongoError" || err.name === "MongooseError")
    category = "database";

  // save error to DB
  ErrorLog.create({
    message,
    endpoint: req.originalUrl,
    method: req.method,
    statusCode,
    category,
  }).catch(() => {});

  // 🔴 THIS LINE STOPS EXPRESS DEFAULT HANDLER
  res.status(statusCode).json({
    success: false,
    message,
  });
}

module.exports = errorHandler;
