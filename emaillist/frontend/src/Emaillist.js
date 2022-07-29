import React from 'react';
import styles from './assets/scss/Emaillist.scss';
import Email from './Email';

function Emaillist({emails, emailDelete}) {
    return (
        <ul className={styles.Emaillist}>
            {emails.map(email => {
                return (
                    <Email 
                        key={email.no} 
                        data={email}
                        emailDelete={emailDelete}
                    />
                )
            })}
        </ul>
    );
}

export default Emaillist;