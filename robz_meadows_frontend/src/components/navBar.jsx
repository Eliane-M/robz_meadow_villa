import React from "react";
import Robz from  '../images/Robz.png';
import '../assets/css/landingPage/landingPage.css';
import { Link } from "react-router-dom";
import { FaAngleRight } from 'react-icons/fa';


const NavBar = () => {
    return (
        <nav>
            <div>
                <a href="/">
                <img src={Robz} alt="logo" />
                </a>
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link>About Us</Link></li>
                <li><Link>Cars for Rent</Link></li>
                <li><Link>Cars for Sale</Link></li>
                <li><Link>Apartments</Link></li>
            </ul>
            <button>
                <a href="/contact">Contact Us</a>
                <FaAngleRight size={20}/>
            </button>
        </nav>
    );
}

export default NavBar;