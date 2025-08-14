import React, { useState } from "react";
import { Button } from "../components/general/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/general/card";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import "../assets/css/signUp/signup.css";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribeNewsletter: false
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
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Signup submitted:", formData);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-logo">
          <h1 className="logo-text">Robz</h1>
          <p className="logo-subtitle">Join ROBZ MEADOWS VILLA today</p>
        </div>

        <Card className="signup-card">
          <CardHeader className="card-header">
            <CardTitle className="card-title">Create Account</CardTitle>
            <p className="card-subtitle">Sign up to access our premium services</p>
          </CardHeader>

          <CardContent className="card-content">
            <form onSubmit={handleSubmit} className="signup-form">

              {/* Name Fields */}
              <div className="name-fields">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <div className="input-wrapper">
                    <User className="input-icon" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <div className="input-wrapper">
                    <User className="input-icon" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      className="form-input"
                      required
                    />
                  </div>
                </div>
              </div>

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

              {/* Phone Field */}
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <div className="input-wrapper">
                  <Phone className="input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Password Fields */}
              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a password"
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

              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className="form-input"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="password-toggle"
                  >
                    {showConfirmPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="checkboxes">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                  />
                  <span>
                    I agree to the{" "}
                    <Link to="/terms">Terms of Service</Link> and{" "}
                    <Link to="/privacy">Privacy Policy</Link>
                  </span>
                </label>

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={handleInputChange}
                  />
                  <span>Subscribe to our newsletter for updates and offers</span>
                </label>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="submit-button">
                Create Account
              </Button>

              {/* Divider */}
              <div className="divider"><span>Or sign up with</span></div>

              {/* Social Signup */}
              <div className="social-signup">
                <Button variant="outline" className="social-button">
                  <img src="/google-icon.svg" alt="Google" /> Google
                </Button>
                <Button variant="outline" className="social-button">
                  <img src="/facebook-icon.svg" alt="Facebook" /> Facebook
                </Button>
              </div>

              {/* Login Link */}
              <div className="login-link">
                <p>
                  Already have an account? <Link to="/login">Sign in</Link>
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

export default SignupPage;