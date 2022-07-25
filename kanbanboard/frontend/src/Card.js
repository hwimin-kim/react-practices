import React, {useState} from 'react';
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList.js';

function Card({card}) {
  const {title, status, description, tasks} = card;

  const [showDetail, setShowDetail] = useState(true);


  return (
    <div className={styles.Card}>
      <div style={{
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        height: '100%',
        width: 3,
        backgroundColor: status === 'ToDo' ? 'skyblue' : (status === 'Doing' ? '#3a7e28' : 'hotpink')
      }}/>
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