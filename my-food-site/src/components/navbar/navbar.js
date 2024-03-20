import React from 'react';
import './navbar.css';
import myImage from './fox.svg';

const NavigationBar = () => {
    // logic
    return (
        <div className='navbar-container'>
            {/* Navbar */}  
            <div className='logo-container'>
                <img src={myImage} alt='logo'/>
            </div>
            <div className='nav-list'>
                <ul>
                    <a href='#'><li>Home</li></a>
                    <a href='#'><li>Shop</li></a>
                    <a href='#'><li>About</li></a>
                    <a href='#'><li>Contact</li></a>
                </ul>
            </div>
        </div>
    );
}

export default NavigationBar;