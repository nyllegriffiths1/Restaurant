import React from 'react';
import DishCard from '../card/DishCard';
import './MostPopularDishes.css';
import roast from './roast.jpg';
import tacos from './tacos.jpg';
import curry from './curry.jpg';
import carb from './carb.jpg';

const MostPopularDishes = () => {
    const dishes = [
        { name: 'Roast Dinner', imageUrl: roast, description: 'Succulent quorn roast, from the heart of Yorkshire, a big favourite with the Brits.' },
        { name: 'Tacos', imageUrl: tacos, description: 'Hard shell tacos, with a varitety of fillings.' },
        { name: 'Paneer Butter Masala', imageUrl: curry, description: 'The most creamiest curry youll ever have.' },
        { name: 'Spaghetti Carbonarra', imageUrl: carb, description: 'Creamy, Tasty pasta with bacon and egg.' },
    ];

    return (
        <div className='most-popular-dishes'>
            <h2>Most Popular Dishes</h2>
            <p>Take a look out our most signature dishes rated by you!</p>
            <div className='dish-cards-container'>
                {dishes.map((dish, index) => (
                    <DishCard
                        key={index}
                        dishName={dish.name}
                        imageUrl={dish.imageUrl}
                        description={dish.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default MostPopularDishes;