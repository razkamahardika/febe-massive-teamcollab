import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/pages/Login.css";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Agree to privacy policy:", agree);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="brand">
          <img src="/logo-head.png" alt="HelaiNusa Logo" className="logo" />
          <h1>HelaiNusa.</h1>
        </div>
        <h2>Login to Your Account</h2>
        <Link to="/Signup">
          <button className="signup-button">Don’t have an account?</button>
        </Link>
      </div>
      <div className="login-right">
        <div className="login-form-container">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
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
            <Link to="/ProductPage">
              <button type="submit" className="login-button">
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
