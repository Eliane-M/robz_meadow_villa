import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { ArrowLeft, Calendar, MapPin, Phone, Mail, User, CreditCard, Star } from "lucide-react";
import { Link, useParams, useLocation } from "react-router-dom";

export const BookingDetailsPage = () => {
  const { type } = useParams();
  const location = useLocation();
  const itemData = location.state?.item;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    location: "",
    message: "",
    paymentMethod: "card"
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", { ...formData, item: itemData, type });
  };

  if (!itemData) {
    return (
      <div className="booking booking--empty">
        <div className="booking__empty-message">
          <h2 className="booking__empty-title">Item not found</h2>
          <Link to="/" className="booking__empty-link">Go back to home</Link>
        </div>
      </div>
    );
  }

  const getServiceTitle = () => {
    switch (type) {
      case 'car-rental': return 'Car Rental Booking';
      case 'car-sale': return 'Car Purchase Inquiry';
      case 'apartment': return 'Apartment Rental Booking';
      default: return 'Booking Details';
    }
  };

  const getBackLink = () => {
    switch (type) {
      case 'car-rental': return '/car-rentals';
      case 'car-sale': return '/car-sales';
      case 'apartment': return '/apartments';
      default: return '/';
    }
  };

  return (
    <div className="booking">
      {/* Header */}
      <header className="booking__header">
        <div className="booking__header-inner">
          <Link to={getBackLink()} className="booking__back-link">
            <Button variant="outline" className="booking__back-button">
              <ArrowLeft className="booking__back-icon" />
            </Button>
          </Link>
          <div className="booking__header-texts">
            <h1 className="booking__title">{getServiceTitle()}</h1>
            <p className="booking__subtitle">Complete your booking details below</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="booking__main">
        <div className="booking__content-grid">
          {/* Item Details */}
          <Card className="booking__item-card">
            <CardContent className="booking__item-card-content">
              <div className="booking__image-wrapper">
                <img src={itemData.image} alt={itemData.title} className="booking__image" />
                {itemData.badge && (
                  <span className="booking__badge">{itemData.badge}</span>
                )}
              </div>

              <h2 className="booking__item-title">{itemData.title}</h2>

              {itemData.rating && (
                <div className="booking__rating">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`booking__star ${i < itemData.rating ? 'booking__star--active' : ''}`}
                    />
                  ))}
                  <span className="booking__rating-text">({itemData.rating}/5)</span>
                </div>
              )}

              {itemData.features && (
                <ul className="booking__features-list">
                  {itemData.features.map((feature, i) => (
                    <li key={i} className="booking__feature">
                      <span className="booking__feature-icon">{feature.icon}</span>
                      <span className="booking__feature-text">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="booking__price-info">
                <div className="booking__price-row">
                  <span className="booking__price">{itemData.price}</span>
                  {itemData.period && <span className="booking__period">{itemData.period}</span>}
                </div>
                {itemData.originalPrice && (
                  <span className="booking__original-price">{itemData.originalPrice}</span>
                )}
                {itemData.note && <p className="booking__note">{itemData.note}</p>}
              </div>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <Card className="booking__form-card">
            <CardHeader className="booking__form-header">
              <CardTitle className="booking__form-title">Booking Information</CardTitle>
            </CardHeader>

            <CardContent className="booking__form-content">
              <form onSubmit={handleSubmit} className="booking__form" noValidate>
                {/* Personal Details */}
                <fieldset className="booking__form-group">
                  <legend className="booking__form-group-title">Personal Details</legend>

                  <label className="booking__form-label" htmlFor="name">Full Name *</label>
                  <div className="booking__input-wrapper">
                    <User className="booking__input-icon" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="booking__input"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <label className="booking__form-label" htmlFor="email">Email Address *</label>
                  <div className="booking__input-wrapper">
                    <Mail className="booking__input-icon" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="booking__input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <label className="booking__form-label" htmlFor="phone">Phone Number *</label>
                  <div className="booking__input-wrapper">
                    <Phone className="booking__input-icon" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="booking__input"
                      placeholder="Enter your phone"
                      required
                    />
                  </div>
                </fieldset>

                {/* Booking Dates */}
                <fieldset className="booking__form-group">
                  <legend className="booking__form-group-title">Booking Details</legend>

                  <label className="booking__form-label" htmlFor="startDate">
                    {type === 'apartment' ? 'Move-in Date' : 'Start Date'} *
                  </label>
                  <div className="booking__input-wrapper">
                    <Calendar className="booking__input-icon" />
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="booking__input"
                      required
                    />
                  </div>

                  {type !== 'car-sale' && (
                    <>
                      <label className="booking__form-label" htmlFor="endDate">
                        {type === 'apartment' ? 'Lease End Date' : 'Return Date'} *
                      </label>
                      <div className="booking__input-wrapper">
                        <Calendar className="booking__input-icon" />
                        <input
                          type="date"
                          id="endDate"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleInputChange}
                          className="booking__input"
                          required
                        />
                      </div>
                    </>
                  )}

                  <label className="booking__form-label" htmlFor="location">
                    {type === 'car-rental' ? 'Pickup Location' : 'Preferred Location'}
                  </label>
                  <div className="booking__input-wrapper">
                    <MapPin className="booking__input-icon" />
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="booking__input"
                      placeholder="Enter location"
                    />
                  </div>
                </fieldset>

                {/* Additional Message */}
                <fieldset className="booking__form-group">
                  <legend className="booking__form-group-title">Additional Requirements</legend>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="booking__textarea"
                    placeholder="Any special requirements or questions..."
                  />
                </fieldset>

                {/* Payment Method */}
                <fieldset className="booking__form-group">
                  <legend className="booking__form-group-title">Payment Method</legend>

                  <label className="booking__radio-label">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="booking__radio-input"
                    />
                    <CreditCard className="booking__radio-icon" />
                    Credit/Debit Card
                  </label>

                  <label className="booking__radio-label">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mobile"
                      checked={formData.paymentMethod === 'mobile'}
                      onChange={handleInputChange}
                      className="booking__radio-input"
                    />
                    <Phone className="booking__radio-icon" />
                    Mobile Money
                  </label>

                  <label className="booking__radio-label">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleInputChange}
                      className="booking__radio-input"
                    />
                    <span className="booking__cash-icon">$</span>
                    Cash Payment
                  </label>
                </fieldset>

                {/* Submit Button */}
                <div className="booking__form-submit">
                  <Button type="submit" className="booking__submit-button">
                    {type === 'car-sale' ? 'Submit Inquiry' : 'Confirm Booking'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default BookingDetailsPage;