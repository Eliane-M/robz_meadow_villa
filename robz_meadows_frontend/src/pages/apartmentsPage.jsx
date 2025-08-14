import React, { useState } from "react";
import { Button } from "../components/general/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/general/card";
import { Tabs, TabsList, TabsTrigger } from "../components/general/tabs";
import { Star, MapPin, Bed, Bath, Square, Wifi, Car, Shield, Filter, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import "../assets/css/apartments/apartments.css";

const ApartmentsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [bedrooms, setBedrooms] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const categories = [
    { id: "all", name: "All Properties", count: 15 },
    { id: "studio", name: "Studio", count: 4 },
    { id: "apartment", name: "Apartment", count: 8 },
    { id: "house", name: "House", count: 3 }
  ];

  const apartments = [
    // apartments data here (unchanged)
  ];

  const filteredApartments = apartments.filter(apartment => {
    if (selectedCategory !== "all" && apartment.category !== selectedCategory) return false;
    if (bedrooms !== "all" && apartment.bedrooms.toString() !== bedrooms) return false;
    if (priceRange === "budget" && parseInt(apartment.price.replace('$', '')) > 600) return false;
    if (priceRange === "premium" && parseInt(apartment.price.replace('$', '')) < 800) return false;
    return true;
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`star-icon ${i < Math.floor(rating) ? 'star-filled' : 'star-empty'}`} />
    ));
  };

  return (
    <div className="apartments-page">

      {/* Hero Section */}
      <section className="apartments-hero">
        <div className="container">
          <div className="hero-corners">
            <div className="corner top-left" />
            <div className="corner top-right" />
          </div>

          <div className="hero-text">
            <p className="section-subtitle">Apartment Rentals</p>
            <h1 className="section-title">Your Perfect Home Awaits</h1>
            <p className="section-description">
              Discover fully furnished apartments and houses in prime locations across Kigali. From cozy studios to spacious family homes, find your ideal living space.
            </p>
          </div>

          <div className="quick-stats">
            <div className="stat">
              <div className="stat-number">150+</div>
              <div className="stat-label">Properties Rented</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Fully Furnished</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
            <div className="stat">
              <div className="stat-number">4.8★</div>
              <div className="stat-label">Tenant Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-header">
            <div className="filter-title">
              <Filter className="filter-icon" />
              <span>Filter Properties</span>
            </div>
            <div className="filter-options">
              <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
                <option value="all">All Bedrooms</option>
                <option value="0">Studio</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
              </select>
              <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                <option value="all">All Prices</option>
                <option value="budget">Under $600/month</option>
                <option value="premium">$800+ /month</option>
              </select>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="category-tabs">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  <div className="category-info">
                    <span>{category.name}</span>
                    <span className="category-count">{category.count} properties</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Apartments Grid */}
      <section className="apartments-grid">
        <div className="container">
          <div className="grid-wrapper">
            {filteredApartments.map((apartment) => (
              <Card key={apartment.id} className="apartment-card">
                <div className="card-image-wrapper">
                  <img src={apartment.image} alt={apartment.title} className="card-image" />
                  {apartment.badge && <div className="badge">{apartment.badge}</div>}
                  <div className="card-actions">
                    <Button size="sm" variant="outline" className="icon-button"><Heart /></Button>
                    <Button size="sm" variant="outline" className="icon-button"><Eye /></Button>
                  </div>
                  {!apartment.available && <div className="unavailable-overlay">Not Available</div>}
                </div>

                <CardHeader>
                  <div className="card-header">
                    <div className="title-location">
                      <CardTitle>{apartment.title}</CardTitle>
                      <div className="location"><MapPin /> {apartment.location}</div>
                    </div>
                    <div className="rating">
                      {renderStars(apartment.rating)}
                      <span>({apartment.reviews} reviews)</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="property-details">
                    <div><Bed /> {apartment.bedrooms === 0 ? 'Studio' : `${apartment.bedrooms} bed`}</div>
                    <div><Bath /> {apartment.bathrooms} bath</div>
                    <div><Square /> {apartment.area}</div>
                  </div>
                  <div className="features">
                    {apartment.features.map((feature, i) => <div key={i}>{feature.icon} {feature.text}</div>)}
                  </div>
                  <p className="description">{apartment.description}</p>
                  <div className="amenities">
                    {apartment.amenities.slice(0, 3).map((a, i) => <span key={i}>{a}</span>)}
                    {apartment.amenities.length > 3 && <span>+{apartment.amenities.length - 3} more</span>}
                  </div>
                  <div className="price">
                    <span className="price-value">{apartment.price}</span>
                    <span className="price-period">{apartment.period}</span>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button variant="outline" className="tour-button">Schedule Tour</Button>
                  <Link to={`/booking/apartment/${apartment.id}`} state={{ item: apartment }} className="book-link">
                    <Button className="book-button" disabled={!apartment.available}>
                      {apartment.available ? 'Book Now' : 'Unavailable'}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ApartmentsPage;