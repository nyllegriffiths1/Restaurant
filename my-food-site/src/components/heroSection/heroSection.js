/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './heroSection.css';
import drinksImage from './drinks.svg';
import dishesImage from './dishes.svg';
import sidesImage from './sides.svg';
import baabuImage from './baabu.svg';
import dessertImage from './dessert.svg';

const HeroSection = () => {
    // logic
    return (
        <div className='container'>
            <div className='left-container'>
                <h1>The Finger Licking <br />Delicous Taste</h1>
                <p>
                    Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum <br />
                    Lorem ipsum lorem ipsum
                </p>
                <div className='hero-button'>
                    <button>Explore food</button>
                    <span className='play-button-container'><FontAwesomeIcon icon={faPlay} className='play-button'/></span>
                </div>
            </div>
            <div className='right-container'>
                <div className='image-container'>
                    <img />
                </div>
                <ul>
                    <li><span><img src={drinksImage} alt='drinks'/></span>Drinks</li>
                    <li><span className='burger'><img src={dishesImage} alt='dishes'/></span>Dishes</li>
                    <li><span className='fries'><img src={sidesImage} alt='sides'/></span>Sides</li>
                    <li><span><img src={baabuImage} alt='bread'/></span>Baabu</li>
                    <li><span><img src={dessertImage} alt='desserts'/></span>Dessert</li>
                </ul>
            </div>
        </div>
    );
}

export default HeroSection;
