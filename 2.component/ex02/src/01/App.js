import React from 'react';

function App() {
    const h1Style = {
        width: 200,
        height: 50,
        padding: 5,
        color: 'skyblue',
        backgroundColor: 'eeff99'
    };
    return (
        <div>
            <h1 style={h1Style}>Inline Styling</h1>
        </div>
    );
}

export default App