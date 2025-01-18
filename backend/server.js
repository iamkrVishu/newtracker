const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
require('dotenv').config();  // Load environment variables

const app = express();
app.use(express.json()); // To parse JSON request bodies
app.use(cors({
  origin: "http://localhost:3000", // Frontend URL
  methods: ["GET", "POST"]
}));

// MongoDB connection using .env
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Routes
app.use("/api/auth", authRoutes); // Authentication routes

// Test route
app.get("/", (req, res) => {
  res.json("hello");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
