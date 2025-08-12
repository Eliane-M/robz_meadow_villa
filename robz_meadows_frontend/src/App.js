import logo from './logo.svg';
import './App.css';
import './pages/landingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage.jsx';
import BookingPage from './pages/bookingPage.jsx';
import ServicesPage from './pages/servicesPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/booking-details" element={<ServicesPage />} />
        {/* <Route path="/about" element={<AboutUs />} />
        <Route path="/cars-for-rent" element={<CarsForRent />} />
        <Route path="/cars-for-sale" element={<CarsForSale />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
