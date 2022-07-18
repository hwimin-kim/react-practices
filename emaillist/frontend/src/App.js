import React from 'react';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import styles from './assets/scss/App.scss';
import emails from './assets/json/data.json';

function App() {
    return (
        <div id={styles['App']}>
            <RegisterForm />
            <Searchbar />
            <Emaillist emails={emails}/>
        </div>
    );
}

export default App