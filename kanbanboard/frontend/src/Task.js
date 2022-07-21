import React, {useState} from 'react';
import styles from './assets/scss/Task.scss';

function Task({task}) {
  const {name, done} = task
  const [checkbox, setCheckbox] = useState(done);
  
  const onChangeCheckbox = () => {
    setCheckbox(prevCheckbox => !prevCheckbox)
  }

  return (
    <li className={styles.TaskList__Task}>
      <input type='checkbox' checked={checkbox} onChange={onChangeCheckbox} />
      {name}
      <a href='#' className={styles.TaskList__Task__remove}></a>
    </li>
  );
}

export default Task;