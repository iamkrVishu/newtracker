const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Name is required for sign-up
      trim: true, // Removes unnecessary spaces
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures no duplicate emails
      trim: true,
      lowercase: true, // Automatically convert email to lowercase
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, // Regex for email validation
        "Please provide a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Enforce minimum password length
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;