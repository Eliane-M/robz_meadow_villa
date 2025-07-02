import React from "react";
import NavBar from "../components/navBar";
import '../assets/css/landingPage/landingPage.css';
import { FaAngleRight } from 'react-icons/fa';
import hero_section from '../images/hero_section.png';


const LandingPage = () => {
    return (
        <>
        <NavBar />
        <div className="hero-section">
            <div className="firstgrid">
                <h4>Robz Meadows Villa Ltd</h4>
                <h1>Drive in Style. Live in Comfort.</h1>
                <p>Explore premium car rentals, trusted vehicle sales, and quality apartments - All in one place.</p>
                <div className="buttons">
                    <button className="btn1">
                        <p>Explore rentals</p>
                        <FaAngleRight size={30}/>
                    </button>
                    <button className="btn2">
                        <p>Book apartments</p>
                        <FaAngleRight size={30}/>
                    </button>
                </div>
            </div>
            <div className="secondgrid">
                <img src={hero_section} alt="hero" />
            </div>
        </div>
        </>

    )
};

export default LandingPage;