const express = require("express");
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
app.use("/api/admissions", require("./routes/admissionRoutes"));
app.use("/api/students", require("./routes/studentRoutes"));


app.use(errorHandler); 


app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
