import React from 'react';
import styles from '../../assets/scss/component/about/Location.scss';

function Location(props) {
    return (
        <div className={styles.Location}>
            <h2>
              <span>저는</span> 
              <strong>부산</strong> 
              <span>살아요 ~~~</span>
            </h2>
        </div>
    );
}

export default Location;