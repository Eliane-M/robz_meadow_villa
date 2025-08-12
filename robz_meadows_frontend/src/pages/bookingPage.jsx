// src/pages/BookingPage.jsx (replace the content of your current file with this)
import React, { useState } from "react";
import { Button } from "../components/general/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/general/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/general/tabs";
import { Calendar, MapPin, Phone, Mail, User, CreditCard } from "lucide-react";
import '../assets/css/bookingPage/booking.css'; // keep your existing path

export const BookingPage = () => {
  const [selectedService, setSelectedService] = useState("car-rental");
  const [formData, setFormData] = useState({
    service: "car-rental",
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    location: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
  };

  const serviceOptions = [
    { id: "car-rental", name: "Car Rental", description: "Rent a vehicle for your needs" },
    { id: "car-purchase", name: "Car Purchase", description: "Buy a new or used vehicle" },
    { id: "apartment", name: "Apartment Rental", description: "Find your perfect home" }
  ];

  const bookingSteps = [
    { step: "01", title: "Choose Service", description: "Select the service you need" },
    { step: "02", title: "Fill Details", description: "Provide your information" },
    { step: "03", title: "Confirmation", description: "Receive booking confirmation" }
  ];

  return (
    <div className="booking-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          {/* Top border corners */}
          <div className="top-corners">
            <div className="corner-top-left" />
            <div className="corner-top-right" />
          </div>

          <div className="hero-text">
            <p>Book Your Service</p>
            <h1>Easy Online Booking</h1>
            <p>
              Book your car rental, schedule a car purchase consultation, or reserve an apartment viewing in just a few simple steps.
            </p>
          </div>

          {/* Booking Steps */}
          <div className="booking-steps">
            {bookingSteps.map((step, index) => (
              <div key={index} className="step">
                <div className="step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="booking-form-section">
        <div className="container">
          <Card className="card">
            <CardHeader className="card-header">
              <CardTitle className="card-title">Make Your Booking</CardTitle>

              {/* Service Selection Tabs */}
              <Tabs value={selectedService} onValueChange={setSelectedService} className="tabs">
                <TabsList className="tabs-list">
                  {serviceOptions.map((service) => (
                    <TabsTrigger
                      key={service.id}
                      value={service.id}
                      className={`tab-trigger ${selectedService === service.id ? "active" : ""}`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <div>
                        <span className="tab-title">{service.name}</span>
                        <span className="tab-desc">{service.description}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </CardHeader>

            <CardContent className="card-content">
              <form onSubmit={handleSubmit} className="form">
                {/* Personal Information (two-column row) */}
                <div className="form-row">
                  <div className="form-col">
                    <label>Full Name *</label>
                    <div className="input-group">
                      <User className="input-icon" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-col">
                    <label>Email Address *</label>
                    <div className="input-group">
                      <Mail className="input-icon" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row single-col">
                  <div className="form-col">
                    <label>Phone Number *</label>
                    <div className="input-group">
                      <Phone className="input-icon" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Date Selection */}
                <div className="form-row">
                  <div className="form-col">
                    <label>{selectedService === "apartment" ? "Move-in Date" : "Start Date"} *</label>
                    <div className="input-group">
                      <Calendar className="input-icon" />
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  {selectedService !== "car-purchase" && (
                    <div className="form-col">
                      <label>{selectedService === "apartment" ? "Lease End Date" : "Return Date"} *</label>
                      <div className="input-group">
                        <Calendar className="input-icon" />
                        <input
                          type="date"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Location */}
                <div className="form-row single-col">
                  <div className="form-col">
                    <label>{selectedService === "car-rental" ? "Pickup Location" : "Preferred Location"}</label>
                    <div className="input-group">
                      <MapPin className="input-icon" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Enter location"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Message */}
                <div className="form-row single-col">
                  <div className="form-col">
                    <label>Additional Requirements</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Any special requirements or questions..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="form-row single-col">
                  <Button type="submit" className="submit-btn">
                    <CreditCard className="btn-icon" />
                    <span>Submit Booking Request</span>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-header">
            <h2>Need Help with Your Booking?</h2>
            <p>Our team is here to assist you with any questions or special requirements.</p>
          </div>

          <div className="contact-cards">
            <Card className="card small-card">
              <CardContent className="card-content">
                <Phone className="contact-icon" />
                <h3>Call Us</h3>
                <p>0782477899</p>
                <p className="muted">Available 24/7</p>
              </CardContent>
            </Card>

            <Card className="card small-card">
              <CardContent className="card-content">
                <Mail className="contact-icon" />
                <h3>Email Us</h3>
                <p>robsmeadowsvilla@gmail.com</p>
                <p className="muted">Response within 2 hours</p>
              </CardContent>
            </Card>

            <Card className="card small-card">
              <CardContent className="card-content">
                <MapPin className="contact-icon" />
                <h3>Visit Us</h3>
                <p>Kigali, Rwanda KK 289 St</p>
                <p className="muted">Mon-Sat 8AM-6PM</p>
              </CardContent>
            </Card>
          </div>

          {/* Bottom border corners */}
          <div className="bottom-corners">
            <div className="corner-bottom-left" />
            <div className="corner-bottom-right" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
