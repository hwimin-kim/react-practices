import React from 'react';
import Clock from './Clock';

function Content(props) {
    return (
        <>
            <p>{'Dynamic HTML Rendering'}</p>
            <Clock />
        </>
    );
}

export default Content;