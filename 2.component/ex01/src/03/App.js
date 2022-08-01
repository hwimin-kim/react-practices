import React, {useEffect} from 'react';
import FoodList from './FoodList';
import io from "socket.io-client";

function App() {
    const socket = io.connect('localhost:6379');
    const foods = [{
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

  useEffect(async() => {
      await socket.on('testroom02', (message) => {
        console.log(message);
      });

      await socket.on('message', (data) => {
        console.log(data);
      });
  }, []);

    return (
        <div>
            <FoodList foods={foods} />
        </div>
    );
}

export default App