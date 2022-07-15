import React, { Component } from 'react';
import FoodList from './FoodList';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.foods = [{
            no: 1,
            name: 'Egg',
            quantity: 20
        }, {
            no: 2,
            name: 'Milk',
            quantity: 5
        }, {
            no: 3,
            name: 'Bread',
            quantity: 10
        }]
    }

    render() {
        return (
            <div>
                <FoodList foods={this.foods} />
            </div>
        );
    }
}

export default App;