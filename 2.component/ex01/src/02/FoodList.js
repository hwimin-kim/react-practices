import React, { Component } from 'react';
import FoodListItem from './FoodListItem';

class FoodList extends Component {
    render() {
        return (
            <>
                <ul>
                    {this.props.foods.map(food => <FoodListItem name={food.name} quantity={food.quantity} key={food.no}/>)}
                </ul>
            </>
        );
    }
}

export default FoodList;