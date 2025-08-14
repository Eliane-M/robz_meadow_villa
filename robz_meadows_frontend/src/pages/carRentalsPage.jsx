import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Star, Fuel, Users, Cog, MapPin, Filter } from "lucide-react";
import "../assets/css/carRentals/carRentals.css";
import NavBar from "../components/navBar";

const CarRentalsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [displayCount, setDisplayCount] = useState(6);

  const categories = [
    { id: "all", name: "All Cars", count: 24 },
    { id: "economy", name: "Economy", count: 8 },
    { id: "compact", name: "Compact", count: 6 },
    { id: "suv", name: "SUV", count: 5 },
    { id: "luxury", name: "Luxury", count: 5 },
  ];

  const cars = [
    {
      id: 1,
      title: "Toyota Corolla",
      category: "economy",
      image: "/whatsapp-image-2025-05-30-at-18-29-29-5.png",
      price: "$25",
      originalPrice: "$35",
      period: "per day",
      rating: 4.8,
      reviews: 124,
      features: [
        { icon: <Fuel />, text: "Petrol" },
        { icon: <Cog />, text: "Manual" },
        { icon: <Users />, text: "5 seats" },
      ],
      badge: "Popular",
      location: "Kigali",
      available: true,
      note: "2 days minimum",
    },
    {
      id: 2,
      title: "Honda Civic",
      category: "compact",
      image: "/whatsapp-image-2025-05-30-at-18-29-29-5.png",
      price: "$30",
      period: "per day",
      rating: 4.7,
      reviews: 89,
      features: [
        { icon: <Fuel />, text: "Petrol" },
        { icon: <Cog />, text: "Automatic" },
        { icon: <Users />, text: "5 seats" },
      ],
      location: "Kigali",
      available: true,
      note: "1 day minimum",
    },
    {
      id: 3,
      title: "Toyota RAV4",
      category: "suv",
      image: "/whatsapp-image-2025-05-30-at-18-29-31.png",
      price: "$45",
      period: "per day",
      rating: 4.9,
      reviews: 156,
      features: [
        { icon: <Fuel />, text: "Petrol" },
        { icon: <Cog />, text: "Automatic" },
        { icon: <Users />, text: "7 seats" },
      ],
      badge: "Premium",
      location: "Kigali",
      available: true,
      note: "3 days minimum",
    },
    {
      id: 4,
      title: "Mercedes C-Class",
      category: "luxury",
      image: "/whatsapp-image-2025-05-30-at-18-29-29--1--1.png",
      price: "$80",
      period: "per day",
      rating: 5.0,
      reviews: 67,
      features: [
        { icon: <Fuel />, text: "Petrol" },
        { icon: <Cog />, text: "Automatic" },
        { icon: <Users />, text: "5 seats" },
      ],
      badge: "Luxury",
      location: "Kigali",
      available: true,
      note: "2 days minimum",
    },
    {
      id: 5,
      title: "Nissan Sentra",
      category: "economy",
      image: "/whatsapp-image-2025-05-30-at-18-29-29-5.png",
      price: "$22",
      period: "per day",
      rating: 4.6,
      reviews: 98,
      features: [
        { icon: <Fuel />, text: "Petrol" },
        { icon: <Cog />, text: "Manual" },
        { icon: <Users />, text: "5 seats" },
      ],
      location: "Kigali",
      available: true,
      note: "1 day minimum",
    },
    {
      id: 6,
      title: "Ford Explorer",
      category: "suv",
      image: "/whatsapp-image-2025-05-30-at-18-29-31.png",
      price: "$55",
      period: "per day",
      rating: 4.8,
      reviews: 134,
      features: [
        { icon: <Fuel />, text: "Petrol" },
        { icon: <Cog />, text: "Automatic" },
        { icon: <Users />, text: "8 seats" },
      ],
      badge: "Family",
      location: "Kigali",
      available: false,
      note: "3 days minimum",
    },
  ];

  const priceNumber = (car) => parseInt(String(car.price).replace("$", ""), 10) || 0;

  const filtered = useMemo(() => {
    return cars.filter((car) => {
      if (selectedCategory !== "all" && car.category !== selectedCategory) return false;
      if (priceRange === "budget" && priceNumber(car) > 30) return false;
      if (priceRange === "premium" && priceNumber(car) < 50) return false;
      return true;
    });
  }, [cars, selectedCategory, priceRange]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    switch (sortBy) {
      case "price-low":
        arr.sort((a, b) => priceNumber(a) - priceNumber(b));
        break;
      case "price-high":
        arr.sort((a, b) => priceNumber(b) - priceNumber(a));
        break;
      case "rating":
        arr.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
      default:
        arr.sort((a, b) => b.reviews - a.reviews);
        break;
    }
    return arr;
  }, [filtered, sortBy]);

  const visibleCars = sorted.slice(0, displayCount);

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`star ${i < Math.round(rating) ? "is-active" : ""}`} />
    ));

  const cloneIcon = (iconEl) =>
    React.isValidElement(iconEl)
      ? React.cloneElement(iconEl, { className: "feature-icon" })
      : null;

  return (
    <>
    <NavBar />
    <div className="car-rentals">
      {/* Hero */}
      <section className="car-rentals__hero" role="region" aria-label="Car rentals hero">
        <div className="car-rentals__hero-inner">
          <p className="car-rentals__eyebrow">Car Rentals</p>
          <h1 className="car-rentals__hero-heading">Find Your Perfect Ride</h1>
          <p className="car-rentals__hero-subheading">
            Choose from our selection of well-maintained vehicles. From economy cars to luxury
            rides, we have the perfect car for every journey and budget.
          </p>

          <ul className="car-rentals__stats" aria-label="Quick stats">
            <li className="car-rentals__stat">
              <div className="car-rentals__stat-number">50+</div>
              <div className="car-rentals__stat-label">Available Cars</div>
            </li>
            <li className="car-rentals__stat">
              <div className="car-rentals__stat-number">24/7</div>
              <div className="car-rentals__stat-label">Support</div>
            </li>
            <li className="car-rentals__stat">
              <div className="car-rentals__stat-number">Free</div>
              <div className="car-rentals__stat-label">Pickup in Town</div>
            </li>
            <li className="car-rentals__stat">
              <div className="car-rentals__stat-number">4.8★</div>
              <div className="car-rentals__stat-label">Customer Rating</div>
            </li>
          </ul>
        </div>
      </section>

      {/* Filters */}
      <section className="car-rentals__filters" aria-label="Filters">
        <div className="car-rentals__filters-row">
          <div className="car-rentals__filters-title">
            <Filter className="icon" aria-hidden />
            <span>Filter Cars</span>
          </div>

          <div className="car-rentals__filters-controls">
            <div className="car-rentals__filters-field">
              <label htmlFor="priceRange">Price</label>
              <select
                id="priceRange"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="budget">Under $30/day</option>
                <option value="premium">$50+ /day</option>
              </select>
            </div>

            <div className="car-rentals__filters-field">
              <label htmlFor="sortBy">Sort by</label>
              <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category pills */}
        <div className="car-rentals__categories" role="tablist" aria-label="Car categories">
          {categories.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active}
                className={`car-rentals__category-pill ${active ? "is-active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="car-rentals__category-name">{cat.name}</span>
                <span className="car-rentals__category-count">{cat.count} cars</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Cars Grid */}
      <section className="car-rentals__cars" aria-label="Available cars">
        <div className="car-rentals__cars-grid">
          {visibleCars.map((car) => (
            <article key={car.id} className="car-card">
              <div className="car-card__media">
                <img src={car.image} alt={car.title} className="car-card__image" />
                {car.badge && <span className="car-card__badge">{car.badge}</span>}
                {!car.available && (
                  <div className="car-card__overlay">
                    <span className="car-card__overlay-badge">Not Available</span>
                  </div>
                )}
              </div>

              <div className="car-card__body">
                <header className="car-card__header">
                  <h3 className="car-card__title">{car.title}</h3>
                  <div className="car-card__rating">
                    <div className="stars">{renderStars(car.rating)}</div>
                    <span className="car-card__reviews">({car.reviews} reviews)</span>
                  </div>
                </header>

                <div className="car-card__location">
                  <MapPin className="icon icon--muted" aria-hidden />
                  <span>{car.location}</span>
                </div>

                <ul className="car-card__features">
                  {car.features.map((f, idx) => (
                    <li key={idx} className="car-card__feature">
                      {cloneIcon(f.icon)}
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="car-card__price-row">
                  <div className="car-card__price">
                    <span className="car-card__price-current">{car.price}</span>
                    <span className="car-card__price-period">{car.period}</span>
                    {car.originalPrice && (
                      <span className="car-card__price-original">{car.originalPrice}</span>
                    )}
                  </div>
                </div>

                <p className="car-card__note">{car.note}</p>
              </div>

              <footer className="car-card__footer">
                <button type="button" className="btn btn--outline">
                  View Details
                </button>
                <Link
                  to={`/booking/car-rental/${car.id}`}
                  state={{ item: car }}
                  className="btn-link"
                >
                  <button className="btn btn--primary" disabled={!car.available}>
                    {car.available ? "Book Now" : "Unavailable"}
                  </button>
                </Link>
              </footer>
            </article>
          ))}
        </div>

        {/* Load More */}
        {displayCount < sorted.length && (
          <div className="car-rentals__load-more">
            <button
              className="btn btn--primary btn--lg"
              onClick={() => setDisplayCount((c) => c + 6)}
            >
              Load More Cars
            </button>
          </div>
        )}
      </section>

      {/* Why Choose Us */}
      <section className="car-rentals__why" aria-label="Why choose us">
        <div className="car-rentals__why-container">
          <h2 className="car-rentals__why-heading">Why Choose Our Car Rentals?</h2>

          <div className="car-rentals__why-grid">
            {[
              {
                icon: "🚗",
                title: "Well-Maintained Fleet",
                description: "All vehicles undergo regular maintenance and safety checks.",
              },
              {
                icon: "🆓",
                title: "Free Pickup",
                description: "Complimentary pickup and delivery within Kigali city limits.",
              },
              {
                icon: "🛡️",
                title: "Full Insurance",
                description: "Comprehensive insurance coverage for peace of mind.",
              },
              {
                icon: "📞",
                title: "24/7 Support",
                description:
                  "Round-the-clock customer support and roadside assistance whenever you need it.",
              },
            ].map((item, i) => (
              <div key={i} className="why-item">
                <div className="why-item__icon" aria-hidden>
                  {item.icon}
                </div>
                <h3 className="why-item__title">{item.title}</h3>
                <p className="why-item__desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default CarRentalsPage;
