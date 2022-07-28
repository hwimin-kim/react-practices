import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import styles from './assets/scss/App.scss';
import data from './assets/json/data.json';

function App() {
  const [emails, setEmails] = useState([]);

  const notifyEmailDelete = (no) => {
    console.log(no);
  }

  const notifyEmaillAdd = ({firstName, lastName, email}) => {
    console.log(firstName.value, lastName.value, email.value);
    setEmails([
      ...emails,
      {
        no: emails.length + 1,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value
      }
    ])
  }
  const notifyKeywordChanged = keyword => {
    const result = data.filter(e => 
                    e.firstName.indexOf(keyword) !== -1 ||
                    e.lastName.indexOf(keyword) !== -1 || 
                    e.email.indexOf(keyword) !== -1
  )
    console.log(result);
    setEmails(result);
  }

  useEffect(async () => {
    try {
      const response  = await fetch('/api', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }

      const json = await response.json();
      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`)
      }

      console.log(json);
      //setEmails(json.data);
    } catch (error) {
      console.log(error);
    }

    return ;
  }, [emails]);

  return (
    <div id={styles['App']}>
      <RegisterForm onSubmit={notifyEmaillAdd} />
      <Searchbar onChange={notifyKeywordChanged} />
      <Emaillist emails={emails} notifyEmailDelete={notifyEmailDelete} />
    </div>
  );
}

export default App