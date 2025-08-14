import React, { useState } from "react";
import { Button } from "../components/general/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/general/card";
import { Tabs, TabsList, TabsTrigger } from "../components/general/tabs";
import { Star, Fuel, Users, Cog, MapPin, Filter, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import '../assets/css/carSales/carSales.css';
import NavBar from "../components/navBar";

const CarSalesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [condition, setCondition] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const categories = [
    { id: "all", name: "All Cars", count: 18 },
    { id: "sedan", name: "Sedan", count: 6 },
    { id: "suv", name: "SUV", count: 5 },
    { id: "hatchback", name: "Hatchback", count: 4 },
    { id: "luxury", name: "Luxury", count: 3 }
  ];

  const cars = [
    {
      id: 1,
      title: "Toyota Camry 2020",
      category: "sedan",
      image: "/whatsapp-image-2025-05-30-at-18-29-29--1--1.png",
      price: "$18,500",
      originalPrice: "$22,000",
      year: 2020,
      mileage: "45,000 km",
      condition: "used",
      rating: 4.8,
      reviews: 24,
      features: [
        { icon: <Fuel />, text: "Petrol" },
        { icon: <Cog />, text: "Automatic" },
        { icon: <Users />, text: "5 seats" }
      ],
      badge: "Great Deal",
      location: "Kigali",
      seller: "ROBZ MEADOWS VILLA",
      financing: true,
      warranty: "6 months",
      description: "Well-maintained Toyota Camry with full service history."
    }
  ];

  const filteredCars = cars.filter(car => {
    if (selectedCategory !== "all" && car.category !== selectedCategory) return false;
    if (condition !== "all" && car.condition !== condition) return false;
    if (priceRange === "budget" && parseInt(car.price.replace(/[$,]/g, '')) > 20000) return false;
    if (priceRange === "premium" && parseInt(car.price.replace(/[$,]/g, '')) < 30000) return false;
    return true;
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={i < Math.floor(rating) ? "star-filled" : "star-empty"}
      />
    ));
  };

  return (
    <><NavBar />
        <div className="car-sales-page">
          {/* Hero Section */}
          <section className="hero-section">
              <div className="container">
                  <div className="hero-header">
                      <h1 className="hero-title">Find Your Dream Car</h1>
                      <p className="hero-subtitle">
                          Browse our collection of vehicles with warranty and financing options.
                      </p>
                  </div>
              </div>
          </section>

          {/* Filters */}
          <section className="filters-section">
              <div className="container">
                  <div className="filters-bar">
                      <Filter />
                      <span className="filters-label">Filter Cars</span>
                      <select value={condition} onChange={(e) => setCondition(e.target.value)}>
                          <option value="all">All Conditions</option>
                          <option value="new">New Cars</option>
                          <option value="used">Used Cars</option>
                      </select>
                      <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                          <option value="all">All Prices</option>
                          <option value="budget">Under $20,000</option>
                          <option value="premium">$30,000+</option>
                      </select>
                      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                          <option value="popular">Most Popular</option>
                          <option value="price-low">Price: Low to High</option>
                          <option value="price-high">Price: High to Low</option>
                          <option value="year">Newest First</option>
                      </select>
                  </div>

                  {/* Category Tabs */}
                  <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                      <TabsList className="category-tabs">
                          {categories.map((category) => (
                              <TabsTrigger key={category.id} value={category.id} className="category-tab">
                                  {category.name} ({category.count})
                              </TabsTrigger>
                          ))}
                      </TabsList>
                  </Tabs>
              </div>
          </section>

          {/* Cars */}
          <section className="cars-grid">
              <div className="container">
                  {filteredCars.map((car) => (
                      <Card key={car.id} className="car-card">
                          <img src={car.image} alt={car.title} className="car-image" />
                          {car.badge && <span className="car-badge">{car.badge}</span>}
                          <CardHeader>
                              <CardTitle className="car-title">{car.title}</CardTitle>
                              <div className="car-meta">
                                  <span>{car.year}</span>
                                  <span>{car.mileage}</span>
                                  <span className="car-condition">{car.condition}</span>
                              </div>
                              <div className="car-location">
                                  <MapPin /> {car.location}
                              </div>
                              <div className="car-rating">{renderStars(car.rating)}</div>
                          </CardHeader>
                          <CardContent>
                              <div className="car-features">
                                  {car.features.map((feature, index) => (
                                      <div key={index} className="feature">
                                          {feature.icon} {feature.text}
                                      </div>
                                  ))}
                              </div>
                              <p className="car-description">{car.description}</p>
                              <div className="car-price">{car.price}</div>
                          </CardContent>
                          <CardFooter>
                              <Button variant="outline">View Details</Button>
                              <Link to={`/booking/car-sale/${car.id}`} state={{ item: car }}>
                                  <Button>Contact Seller</Button>
                              </Link>
                          </CardFooter>
                      </Card>
                  ))}
              </div>
          </section>
      </div></>
  );
};

export default CarSalesPage;