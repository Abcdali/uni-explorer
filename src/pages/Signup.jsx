import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import signupImg from "../assets/signup.png";
import logo from "../assets/Logo.png";
import nameIcon from "../assets/name.png";
import usernameIcon from "../assets/username.png";
import emailIcon from "../assets/email.png";
import lockIcon from "../assets/password.png";
import googleIcon from "../assets/google.png";
import facebookIcon from "../assets/facebook.png";

function Signup() {
  const navigate = useNavigate();
  // Alag states takay password aur confirm password independently toggle ho sakein
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="signup-page">
      <div className="signup-card">
        
        {/* Left Side: Illustration (Matching Login Style) */}
        <div className="signup-left">
           <img src={signupImg} alt="Signup Illustration" />
        </div>

        {/* Right Side: Form */}
        <div className="signup-right">
          <div className="brand-header">
            <img src={logo} alt="Logo" className="mini-logo" />
            <span className="brand-name">Uni <span className="highlight-dark">Explorer</span></span>
          </div>

          <div className="form-content">
            <h1 className="main-title">Join <span className="highlight">Uni Explorer</span></h1>
            <p className="subtitle">Create an account to access <span className="highlight-dark">top university</span> Information</p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <div className="input-box">
                  <span className="icon"><img src={nameIcon} alt="" /></span>
                  <input type="text" placeholder="Full Name" />
                </div>

                <div className="input-box">
                  <span className="icon"><img src={usernameIcon} alt="" /></span>
                  <input type="text" placeholder="Username" />
                </div>

                <div className="input-box">
                  <span className="icon"><img src={emailIcon} alt="" /></span>
                  <input type="email" placeholder="Email" />
                </div>

                <div className="input-box">
                  <span className="icon"><img src={lockIcon} alt="" /></span>
                  <input type={showPass ? "text" : "password"} placeholder="Password" />
                </div>

                <div className="input-box">
                  <span className="icon"><img src={lockIcon} alt="" /></span>
                  <input type={showConfirm ? "text" : "password"} placeholder="Confirm Password" />
                </div>
              </div>

              <button className="create-btn">Create Account</button>
            </form>

            <p className="login-text">
              Already have an account? <span onClick={() => navigate("/")}>Log In</span>
            </p>

            <div className="divider">
              <div className="line"></div>
              <p>Or <span>sign up</span> with</p>
              <div className="line"></div>
            </div>

            <div className="social-login-group">
              <button className="social-btn">
                <img src={googleIcon} alt="Google" /> Google
              </button>
              <button className="social-btn">
                <img src={facebookIcon} alt="Facebook" /> Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;