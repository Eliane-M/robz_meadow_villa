import React from "react";
import { Button } from "../components/general/button.jsx";
import { Card, CardContent, CardTitle } from "../components/general/card.jsx";
import { ArrowRight, Car, Home, ShoppingCart, Clock, Shield, Users, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import "../assets/css/servicesPage/services.css";

export const ServicesPage = () => {
  const mainServices = [
    {
      icon: <Car />,
      title: "Car Rentals",
      description: "Wide range of vehicles for daily, weekly, or monthly rentals",
      features: ["Daily to monthly rentals", "Free pickup in town", "24/7 roadside assistance", "Comprehensive insurance"],
      link: "/cars-for-rent",
      bgColor: "bg-blue-600",
      image: "/whatsapp-image-2025-05-30-at-18-29-31.png"
    },
    {
      icon: <ShoppingCart />,
      title: "Car Sales",
      description: "New and pre-owned vehicles at competitive prices",
      features: ["New & used vehicles", "Financing options", "Trade-in services", "Complete documentation"],
      link: "/cars-for-sale",
      bgColor: "bg-green-600",
      image: "/whatsapp-image-2025-05-30-at-18-29-29--1--1.png"
    },
    {
      icon: <Home />,
      title: "Apartments",
      description: "Fully furnished, modern apartments for rent",
      features: ["Fully furnished", "Modern amenities", "Prime locations", "Flexible lease terms"],
      link: "/apartments",
      bgColor: "bg-purple-600",
      image: "/getty-images-maraak-ad8m-unsplash--1--1.png"
    }
  ];

  const additionalServices = [
    { icon: <Clock />, title: "24/7 Support", description: "Round-the-clock customer service for all your needs" },
    { icon: <Shield />, title: "Insurance Coverage", description: "Comprehensive insurance options for peace of mind" },
    { icon: <Users />, title: "Corporate Services", description: "Special packages for businesses and organizations" },
    { icon: <Headphones />, title: "Consultation", description: "Expert advice to help you make the right choice" }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="corner-top-left" />
          <div className="corner-top-right" />
          <div className="heading">
            <p>Our Services</p>
            <h1>Everything You Need Under One Roof</h1>
            <span>
              From premium car rentals to trusted vehicle sales and quality apartments, ROBZ MEADOWS VILLA Ltd provides
              comprehensive solutions for all your mobility and housing needs.
            </span>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="main-services">
        <div className="container">
          {mainServices.map((service, index) => (
            <Card key={index} className="service-card">
              <div className="image-container">
                <img src={service.image} alt={service.title} />
                <div className={`icon-box ${service.bgColor}`}>{service.icon}</div>
              </div>
              <CardContent className="content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <div className="dot" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <Button className="btn">
                    <span>Explore {service.title}</span>
                    <ArrowRight />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services">
        <div className="container">
          <div className="heading">
            <h2>Additional Services</h2>
            <p>
              We go beyond the basics to provide comprehensive support and services that ensure your complete satisfaction.
            </p>
          </div>
          <div className="container grid">
            {additionalServices.map((service, index) => (
              <Card key={index} className="service-card">
                <CardContent>
                  <div className="icon-box">
                    {React.cloneElement(service.icon, { width: "2rem", height: "2rem" })}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>
            Contact us today to learn more about our services or to make a booking. Our team is ready to help you find the
            perfect solution.
          </p>
          <div className="buttons">
            <Link to="/contact">
              <Button className="btn-primary">
                <span>Contact Us</span>
                <ArrowRight />
              </Button>
            </Link>
            <Link to="/about">
              <Button className="btn-outline">
                <span>Learn More</span>
              </Button>
            </Link>
          </div>
          <div className="corner-bottom-left" />
          <div className="corner-bottom-right" />
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
