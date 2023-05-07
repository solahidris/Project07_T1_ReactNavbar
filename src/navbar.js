import React from "react";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import './App.css';

const Navbar = () => {

    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const handleNavToggle = () => {
        setIsNavbarVisible(!isNavbarVisible);
    }
    return (
        <div>
            <button id="nav-toggle" onClick={handleNavToggle}>Navigation Menu</button>
            <div className={`NavbarDiv ${isNavbarVisible ? 'active' : ''}`}>
                <ul className='NavbarUL'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/news'>News</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;