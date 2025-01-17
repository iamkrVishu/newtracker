const express = require("express");
const { signUp, signIn } = require("../controllers/authController");

const router = express.Router();

// Route for user registration (Sign Up)
router.post("/signup", signUp);

// Route for user login (Sign In)
router.post("/signin", signIn);

module.exports = router;