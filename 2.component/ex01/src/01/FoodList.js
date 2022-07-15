import React, { Component } from 'react';
import FoodListItem from './FoodListItem';

class FoodList extends Component {
    render() {
        return (
            <>
                <ul>
                    <FoodListItem name='Bread' quantity='10'/>
                    <FoodListItem name='Milk' quantity='5'/>
                    <FoodListItem name='Egg' quantity='20'/>
                </ul>
            </>
        );
    }
}

export default FoodList;