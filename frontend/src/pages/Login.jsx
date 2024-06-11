import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/pages/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8081/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        // Store userId in local storage
        localStorage.setItem('userId', result.userId);
        navigate('/productpage');
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      setMessage('An error occurred. Please try again.');
    }
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
          <button className="goto-signup">Don’t have an account?</button>
        </Link>
      </div>
      <div className="login-right">
        <div className="login-form-container">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {message && <p>{message}</p>}
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
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
