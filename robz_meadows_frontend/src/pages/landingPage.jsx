import React from "react";
import NavBar from "../components/navBar";
import '../assets/css/landingPage/landingPage.css';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import hero_section from '../images/hero_section.png';
import available_car from '../images/available_car.jpg';
import car_rental from '../images/car_rental.png';
import apartments from '../images/apartments.png';
import mentor from '../images/mentor.png';
import pickups from '../images/pickups.png';
import emergency from '../images/emergency.png';
import customers from '../images/customers.png';
import suzuki from '../images/suzuki.jpg';
import interior from '../images/interior.jpg';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <NavBar />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          
          <div className="hero-content">
            <div className="hero-text">
              <div className="top-corners">
                <div className="corner-top-left" />
              </div>
              <p className="hero-subtitle">Robz Meadows Villa Ltd</p>
              <h1 className="hero-title">Drive in Style. Live in Comfort.</h1>
              <p className="hero-description">
                Explore premium car rentals, trusted vehicle sales, and quality apartments — all in one place.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">
                  <Link to="/services">Explore Rentals</Link>
                </button>
                <button className="btn-secondary">
                  <Link to="/booking">Book apartments</Link>
                </button>
              </div>
              <div className="bottom-corners">
                <div className="corner-bottom-left" />
              </div>
            </div>

            <div className="hero-image">
              <img src={hero_section} alt="Modern apartment interior" />
              <div className="hero-card">
                <img src={available_car} alt="Available cars" />
                <div className="hero-card-content">
                  <h3>Available cars</h3>
                  <p>Reliable vehicles for every journey</p>
                  <button className="explore-btn">
                    Explore now 
                    <FaAngleRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <img src={car_rental} alt="Car interior" />
              </div>
              <div className="service-content">
                <h3>Car Rentals</h3>
                <p>Wide range of vehicles, daily to monthly rentals.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src={available_car} alt="Car in showroom" />
              </div>
              <div className="service-content">
                <h3>Car Sales</h3>
                <p>New & pre-owned vehicles at competitive prices.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src={apartments} alt="Apartment interior" />
              </div>
              <div className="service-content">
                <h3>Apartments for Rent</h3>
                <p>Fully furnished, modern apartments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-content">
            <div className="quotes">
              <p className="quote-text">
                Why Clients Trust ROBZ MEADOWS VILLA Ltd
              </p>
              <p className="quote-description">
                Experience Peace of Mind Every Step of the Way — Whether You're Renting a Car, Buying One, or Moving Into a New Home, ROBZ MEADOWS VILLA Ltd is Your Trusted Partner for Quality, Reliability, and Service Excellence."
              </p>
            </div>
            <div className="quote-features">
              <div className="feature-card">
                <img src={mentor} alt="mentor" />
                <p>Well-maintained vehicles & properties</p>
                {/* <p>Well-maintained<br/>vehicles &<br/>properties</p> */}
              </div>
              <div className="feature-card">
                <img src={pickups} alt="" />
                <p>Free pickup for rentals in town</p>
                {/* <p>Free pickup<br/>for rentals in<br/>town</p> */}
              </div>
              <div className="feature-card">
                <img src={customers} alt="" />
                <p>Trusted customers</p>
                <span className="feature-value">1,000+</span>
              </div>
              <div className="feature-card">
                <img src={emergency} alt="" />
                <p>Support for emergency services</p>
                <span className="feature-value">24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Listings Section */}
      <section className="listings">
        <div className="container">
          <h2>Available listings</h2>
          <div className="listings-header">
            <div className="listing-tabs">
              <button className="tab active">
                <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h18"/>
                  <path d="M5 21V7l8-4v18"/>
                  <path d="M19 21V11l-6-4"/>
                </svg>
                Apartment
              </button>
              <button className="tab">
                <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 16H9m10 0h3m-3 0l-3-3m3 3l-3 3M7 16H4m3 0l-3-3m3 3l-3 3"/>
                  <rect x="5" y="8" width="14" height="8" rx="2"/>
                  <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/>
                </svg>
                Car for rent
              </button>
              <button className="tab">
                <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 16H9m10 0h3m-3 0l-3-3m3 3l-3 3M7 16H4m3 0l-3-3m3 3l-3 3"/>
                  <rect x="5" y="8" width="14" height="8" rx="2"/>
                  <circle cx="8" cy="18" r="2"/>
                  <circle cx="16" cy="18" r="2"/>
                </svg>
                Car for sale
              </button>
            </div>
            <button className="view-all-btn">
              View all
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
          
          <div className="listings-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="listing-card">
                <div className="listing-image">
                  <img src={suzuki} alt="Suzuki vehicle" />
                </div>
                <div className="listing-content">
                  <h3>Suzuki</h3>
                  <div className="listing-details">
                    <span className="fuel-type">Petrol</span>
                    <span className="transmission">Manual</span>
                    <span className="year">04</span>
                  </div>
                  <div className="listing-price">
                    <span className="price">$24</span>
                    <span className="period">Per day</span>
                    <span className="minimum">2 days minimum</span>
                  </div>
                  <div className="listing-total">
                    <span>Total amount</span>
                    <span className="total-price">$24</span>
                  </div>
                  <button className="book-btn">Book now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <div className="search-content">
            <div className="search-tabs-outside">
              <button className="search-tab active">
                <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h18"/>
                  <path d="M5 21V7l8-4v18"/>
                  <path d="M19 21V11l-6-4"/>
                </svg>
                Apartment
              </button>
              <button className="search-tab">
                <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 16H9m10 0h3m-3 0l-3-3m3 3l-3 3M7 16H4m3 0l-3-3m3 3l-3 3"/>
                  <rect x="5" y="8" width="14" height="8" rx="2"/>
                  <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/>
                </svg>
                Car for rent
              </button>
              <button className="search-tab">
                <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 16H9m10 0h3m-3 0l-3-3m3 3l-3 3M7 16H4m3 0l-3-3m3 3l-3 3"/>
                  <rect x="5" y="8" width="14" height="8" rx="2"/>
                  <circle cx="8" cy="18" r="2"/>
                  <circle cx="16" cy="18" r="2"/>
                </svg>
                Car for sale
              </button>
            </div>
            <div className="search-form">
              <div className="search-fields">
                <div className="field">
                  <label>Location</label>
                  <select>
                    <option>Kicukiro,kagarama</option>
                  </select>
                </div>
                <div className="field">
                  <label>Price range</label>
                  <select>
                    <option>$150-$300</option>
                  </select>
                </div>
                <div className="field">
                  <label>Features</label>
                  <select>
                    <option>4 Bedrooms</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials-header">
            <p>Testimonial</p>
            <h2>Don't take our word for it! Hear it from our partners.</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"Highly recommend! I bought my car from ROBZ MEADOWS VILLA and the whole purchase process was seamless. Great experience."</p>
              <div className="testimonial-author">
                <span>Eric Ntakirutimana</span>
                <span>RWODA RECOMMEND</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"I rented a car for a business trip and everything went very smoothly. Clean, affordable, and reliable."</p>
              <div className="testimonial-author">
                <span>Sandrine Uwase</span>
                <span>TRANSACTION REPORT</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"From brand identity to design systems, they thought about our solution. We found in their valued top-tier family."</p>
              <div className="testimonial-author">
                <span>Jean Damascène</span>
                <span>PERFECT APARTMENT FOR MY FAMILY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <div className="faq-content">
            <div className="faq-image">
              <img src={interior} alt="Car interior" />
            </div>
            <div className="faq-text">
              <h3>Frequently asked questions</h3>
              <p>Any questions? We have compiled questions our customers ask — Then provide complete answers.</p>
              
              <div className="faq-items">
                <div className="faq-item">
                  <h3>How do I book a car or apartment with ROBZ MEADOWS VILLA Ltd?</h3>
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-item">
                  <h3>What documents are needed to purchase a car?</h3>
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-item">
                  <h3>Are the apartments furnished?</h3>
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-item">
                  <h3>What happens if I have a problem during my car or apartment rental?</h3>
                  <span className="faq-toggle">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;