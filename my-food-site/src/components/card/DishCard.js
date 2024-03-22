import React from 'react';
import './card.css';

const DishCard = ({ dishName, imageUrl, description}) => {
    return (
        <div className='dish-card'>
            <div className='img-container'>
                <img src={imageUrl} alt={dishName} />
            </div>
            <h3>{dishName}</h3>
            <p>{description}</p>
        </div>
    );
};

export default DishCard;