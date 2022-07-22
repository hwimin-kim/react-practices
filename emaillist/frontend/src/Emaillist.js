import React from 'react';
import styles from './assets/scss/Emaillist.scss';
import Email from './Email';

function Emaillist({emails, notifyEmailDelete}) {
    return (
        <ul className={styles.Emaillist}>
            {emails.map(email => {
                return (
                    <Email 
                        key={email.no} 
                        data={email}
                        notifyEmailDelete={notifyEmailDelete}
                    />
                )
            })}
        </ul>
    );
}

export default Emaillist;