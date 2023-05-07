import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='NavbarLinkDiv'>
                <ul className='NavbarUL'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/news'>News</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;