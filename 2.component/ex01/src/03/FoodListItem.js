import React from 'react';

function FoodListItem({name, quantity}) {
    return (
        <div>
            <li>{name}: {quantity}</li>
        </div>
    );
}

export default FoodListItem;