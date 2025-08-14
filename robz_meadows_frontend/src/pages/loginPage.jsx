import React, { useState } from "react";
import { Button } from "../components/general/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/general/card";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import "../assets/css/loginPage/login.css";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    // Handle login logic here
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo">
          <h1 className="logo-text">Robz</h1>
          <p className="logo-subtitle">Welcome back to ROBZ MEADOWS VILLA</p>
        </div>

        <Card className="login-card">
          <CardHeader className="card-header">
            <CardTitle className="card-title">Sign In</CardTitle>
            <p className="card-subtitle">Access your account to manage bookings and preferences</p>
          </CardHeader>

          <CardContent className="card-content">
            <form onSubmit={handleSubmit} className="login-form">
              {/* Email Field */}
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div className="input-wrapper">
                  <Mail className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="form-input"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="form-options">
                <label className="remember-me">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  Remember me
                </label>
                <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="submit-button">
                Sign In
              </Button>

              {/* Divider */}
              <div className="divider">
                <span>Or continue with</span>
              </div>

              {/* Social Login */}
              <div className="social-login">
                <Button variant="outline" className="social-button">
                  <img src="/google-icon.svg" alt="Google" /> Google
                </Button>
                <Button variant="outline" className="social-button">
                  <img src="/facebook-icon.svg" alt="Facebook" /> Facebook
                </Button>
              </div>

              {/* Sign Up Link */}
              <div className="signup-link">
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup">Sign up</Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="back-home">
          <Link to="/">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;