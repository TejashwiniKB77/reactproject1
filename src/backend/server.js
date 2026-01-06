const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/students", require("./routes/studentRoutes"));


mongoose
  .connect("mongodb+srv://admin:admin1234@cluster0.ryune1s.mongodb.net/test123")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend running");
});

// ✅ USE ROUTES (IMPORTANT)
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/admissions", require("./routes/admissionRoutes"));



app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
