import React, {useState} from 'react';
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList.js';

function Card({card}) {
  const {title, description, tasks} = card;

  const [showDetail, setShowDetail] = useState(true);


  return (
    <div className={styles.Card}>
      <div 
        className={showDetail ? styles.Card__Title : [styles.Card__Title, styles.Card__Title__open].join(" ")}
        onClick={() => setShowDetail(prevShowDetail => !prevShowDetail)} >
        {title}
      </div>
      {
      showDetail ? 
      null :       
      <div className={'Card__Details'}>
        {description}
        <TaskList tasks={tasks}/>
      </div>
      }

    </div>
  );
}

export default Card;