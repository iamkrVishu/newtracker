import React, { useState } from "react";
import "./auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const BACKEND_URL = "https://newtracker-backend.onrender.com/api/auth"; // Replace with your actual backend URL

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${BACKEND_URL}/signin`, { email, password })
      .then((response) => {
        alert(`Logged in successfully!`);
        window.location.replace("https://habit-tracker-lac.vercel.app/"); // Use replace to force a redirect
      })
      .catch((err) => {
        setErrorMessage("Invalid credentials. Please try again.");
        console.error("Login error:", err);
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post(`${BACKEND_URL}/signup`, { name, email, password })
      .then((response) => {
        alert(`Account created successfully!`);
        window.location.replace("https://habit-tracker-lac.vercel.app/"); // Redirect to external link
      })
      .catch((err) => {
        setErrorMessage("Error creating account. Please try again.");
        console.error("Signup error:", err);
      });
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">{isSignIn ? "Sign In" : "Sign Up"}</h2>
      <form onSubmit={isSignIn ? handleLogin : handleSignup} className="auth-form">
        {!isSignIn && (
          <div className="input-group">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={!isSignIn}
            />
          </div>
        )}
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="btn">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="switch-text">
          {isSignIn
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span
            className="link"
            onClick={() => setIsSignIn(!isSignIn)}
            style={{ cursor: "pointer" }}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Auth;
