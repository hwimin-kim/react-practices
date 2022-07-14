import React from 'react';

function Clock01(props) {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = (hours < 12) ? 'AM' : 'PM';

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;


    return (
        <>
            {hours}:{minutes}:{seconds}{session}
        </>
    );
}

export default Clock01;