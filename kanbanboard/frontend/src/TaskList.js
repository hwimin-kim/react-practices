import React from 'react';
import Task from './Task.js';
import styles from './assets/scss/TaskList.scss';

function TaskList({tasks}) {

  return (
    <div className={'TaskList'}>
      <ul>
        {tasks.map( task => <Task key={task.no} task={task}/>)}
      </ul>
      <input
        type='text'
        className={styles.TaskList__add_task}
        placeholder='태스크 추가'/>
    </div>
  );
}

export default TaskList;