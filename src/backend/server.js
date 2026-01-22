const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler");


const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan("dev")); 


app.use("/uploads", express.static("uploads"));


mongoose
  .connect(
    "mongodb+srv://admin:admin1234@cluster0.ryune1s.mongodb.net/test123"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));


app.get("/", (req, res) => {
  res.send("Backend running");
});

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/admission", require("./routes/admissionRoutes"));
app.use("/api/students", require("./routes/studentRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/counseling", require("./routes/counselingRoutes"));

// 404 handler
app.use((req, res, next) => {
  const error = new Error(`Route not found: ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
});

// 🔴 error handler MUST be last
app.use(require("./middleware/errorHandler"));



app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
