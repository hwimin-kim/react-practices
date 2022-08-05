import React from 'react';
import Kanbanboard from './Kanbanboard';
import styles from './assets/scss/App.scss';

function App() {
  
  return (
    <div id={'App'} className={styles.App}>
      <h1>Test~Test~Test~</h1>
      <Kanbanboard />
    </div>
  );
}

export default App