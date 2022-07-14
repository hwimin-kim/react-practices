import React from 'react';

function Clock01(props) {
    const date = new Date();

    return (
        <>
            {date.getHours()}:{date.getHours()}:{date.getSeconds()}:{date.getHours() < 12 ? 'AM' : 'PM'}
        </>
    );
}

export default Clock01;