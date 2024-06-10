import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/pages/Signup.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({
      firstName,
      lastName,
      email,
      password,
      agree,
    });
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="brand">
          <img src="./logo.png" alt="HelaiNusa Logo" className="logo" />
          <h1>HelaiNusa.</h1>
        </div>
        <div className="signup-form-container">
          <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className="input-group-row">
              <div className="input-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                id="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-group checkbox-group">
              <input
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <label htmlFor="agree">
                I agree to the <a href="#">privacy policy</a>
              </label>
            </div>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="signup-right">
        <h2>Create a New Account</h2>
        <Link to="/Login">
          <button className="create"> Already have an account? </button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
