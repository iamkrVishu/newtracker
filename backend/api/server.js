const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const authRoutes = require('../../routes/auth');  // Import the existing auth routes
require('dotenv').config();  // Load environment variables

module.exports = (req, res) => {
  const app = express();

  app.use(express.json()); // Middleware to parse JSON request bodies
  app.use(cors({
    origin: "http://localhost:3000", // Frontend URL
    methods: ["GET", "POST"]
  }));

  // MongoDB connection using .env for DB_URI
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB:", err));

  // Authentication routes
  app.use("/api/auth", authRoutes); // This is the existing route you have in your `routes` folder

  // Test route to check if server is up
  app.get("/", (req, res) => {
    res.json("hello");
  });

  // Run the Express app inside the serverless function
  app(req, res);
};
