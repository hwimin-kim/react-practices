import React from 'react';
import MyComponent from './MyComponent';

function App() {
    return (
        <div>
            <MyComponent 
                // props01
                props02={200}
                props03={1-1 === 0}
                props04={{no:1, name:'둘리'}}
                props05={['Hello', 'Wrold', 'ReactJS', 'ES6']}
                props06={() => '함수'}
            />
        </div>
    );
}

export default App