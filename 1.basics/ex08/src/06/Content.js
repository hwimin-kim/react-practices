import React from 'react';
import Clock01 from './Clock01';
import Clock02 from './Clock02';

function Content(props) {
    return (
        <>
            <p>{'특징3: JSX 표현식 표기법({js expression})'}</p>
            <Clock01 />
            <br />
            <Clock02 />
        </>
    );
}

export default Content;