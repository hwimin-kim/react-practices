import React from 'react';
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList.js';

function Card({card}) {
  const {title, description, tasks} = card;

  return (
    <div className={styles.Card}>
      <div className={styles.Card__Title}>{title}</div>
      <div className={styles.Card__Title__open}>
        {description}
        <TaskList tasks={tasks}/>
      </div>
    </div>
  );
}

export default Card;