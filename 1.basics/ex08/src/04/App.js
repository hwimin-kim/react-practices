import React, { createElement, Fragment } from 'react';
import Header from './Header';
import Content from './Content';

function App() {
    return React.createElement(
        Fragment, 
        null, 
        React.createElement(Header, null), 
        React.createElement(Content, null)
    );
}

export default App