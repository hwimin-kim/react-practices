import React from 'react';
import styles from './assets/scss/Searchbar.scss';

function Searchbar({onChange}) {
  return (
    <div className={styles.Searchbar}>
      <input 
        type='text' 
        placeholder='search'
        onChange={e => onChange(e.target.value)} />
    </div>
  );
}

export default Searchbar;