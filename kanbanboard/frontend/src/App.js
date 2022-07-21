import React from 'react';
import Kanbanboard from './Kanbanboard';
import styles from './assets/scss/App.scss';

function App() {
  
  return (
    <div id={'App'} className={styles.App}>
      <Kanbanboard />
    </div>
  );
}

export default App