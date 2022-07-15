import React, { Component } from 'react';

class FoodListItem  extends Component {
    render() {
        return (
            <div>
                <li>{this.props.name}: {this.props.quantity}</li>
            </div>
        );
    }
}

export default FoodListItem;