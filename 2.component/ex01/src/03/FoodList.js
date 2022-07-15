import React from 'react';
import FoodListItem from './FoodListItem';

function FoodList({foods}) {
    return (
        <>
            <ul>
                {foods.map(food => <FoodListItem name={food.name} quantity={food.quantity} key={food.no}/>)}
            </ul>
        </>
    );
}

export default FoodList;