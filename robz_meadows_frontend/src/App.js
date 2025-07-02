import logo from './logo.svg';
import './App.css';
import './pages/landingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
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
