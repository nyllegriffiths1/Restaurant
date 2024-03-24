import React from 'react';
import './footer.css';

const Footer = () => {
    // logic
    return (

        <div className='footer-container'>
            <div className='contact-info-container'>
                <h2>Contact</h2>
                <p><span className='contact-span'>Address: </span>570 Wellington Road, Street 6, San Francisco</p>
                <p><span className='contact-span'>Phone: </span>+01 6666 567 /(+91) 01 2345 6789</p>
                <p><span className='contact-span'>Hours: </span>10.00 - 18.00. Mon - Sat</p>
            </div>
            <div className='my-account-container>'>
                <h2>My Account</h2>
                <ul>
                    <a href='#' className='footer-links'><li>Sign in</li></a>
                    <a href='#'className='footer-links'><li>My Cart</li></a>
                    <a href='#'className='footer-links'><li>Help</li></a>
                </ul>
                <div className='social-icons'>
                    {/* social icons when i get internet */}
                </div>
            </div>
            <div className='about-us-container'>
                <h2>About</h2>
                <ul>
                    <a href='#' className='footer-links'><li>About us</li></a>
                    <a href='#' className='footer-links'><li>Privacy Policy</li></a>
                    <a href='#' className='footer-links'><li>Terms & Conditions</li></a>
                    <a href='#' className='footer-links'><li>Contact</li></a>
                </ul>
            </div>
        </div>
    );
};

export default Footer;