import React from 'react';
import styles from './assets/scss/Email.scss';

function Email({data, emailDelete}) {
  const {no, firstName, lastName, email} = data;
    return (
        <li className={styles.Email}>
            <h4>{`${firstName} ${lastName}`}</h4>
            <span>{email}</span>
            <a 
              href='' 
              onClick={
                e => {
                  e.preventDefault(); 
                  emailDelete(no)
                }
              }>
            </a>
        </li>
    );
}

export default Email;