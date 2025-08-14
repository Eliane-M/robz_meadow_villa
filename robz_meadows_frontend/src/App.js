import logo from './logo.svg';
import './App.css';
import './pages/landingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage.jsx';
import BookingPage from './pages/bookingPage.jsx';
import ServicesPage from './pages/servicesPage.jsx';
import CarRentalsPage from './pages/carRentalsPage.jsx';
import CarSalesPage from './pages/carSalesPage.jsx';
import LoginPage from './pages/loginPage.jsx';
import SignupPage from './pages/signupPage.jsx';
import ApartmentsPage from './pages/apartmentsPage.jsx';
import BookingDetailsPage from './pages/bookingDetails.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/booking-details" element={<BookingDetailsPage />} />
        <Route path="/cars-for-rent" element={<CarRentalsPage />} />
        <Route path="/cars-for-sale" element={<CarSalesPage />} />
        <Route path="/apartments" element={<ApartmentsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
