import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import loginImg from "../assets/login.png"; 
import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";
import logo from "../assets/Logo.png";
import goolge from "../assets/google.png";
import facebook from "../assets/facebook.png";

function Login() {
   const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-card">
        
        
        <div className="login-left">
          <div className="logo">
            <img src={logo} alt="Uni Explorer Logo" />
            <h2>Uni <span>Explorer</span></h2>
          </div>

          <h1>Welcome Back</h1>
          <p className="subtitle">
            Log in to your account to <span>Continue</span>
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-box">
              <span className="icon">
                <img src={emailIcon} alt="Email" />
              </span>
              <input type="email" placeholder="Email" required />
            </div>

            <div className="input-box">
              <span className="icon">
                <img src={passwordIcon} alt="Password" />
              </span>
              <input type="password" placeholder="•••••••••" required />
            </div>

            <a href="#" className="forgot-link">Forgot Password?</a>

            <button type="submit" className="login-btn">Log In</button>
          </form>

<p className="signup-text">
  Don’t have an account?
  <span onClick={() => navigate("/Signup")}> Sign Up</span>
</p>

          <div className="divider">
            <div className="line"></div>
            <p>Or <span>log in</span> with</p>
            <div className="line"></div>
          </div>

          <div className="social-login">
            <button className="social-btn google">
              <img src={goolge} alt="Google" />
              Google
            </button>
            <button className="social-btn facebook">
              <img src={facebook} alt="Facebook" />
              Facebook
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Illustration */}
        <div className="login-right">
          <img src={loginImg} alt="Login Illustration" />
        </div>

      </div>
    </div>
  );
}

export default Login;