import React from 'react';
import Task from './Task.js';

function TaskList({tasks}) {

  return (
    <div className={'TaskList'}>
      <ul>
        {tasks.map( task => <Task key={task.no} task={task}/>)}
      </ul>
    </div>
  );
}

export default TaskList;