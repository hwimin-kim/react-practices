import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import styles from './assets/scss/App.scss';
import data from './assets/json/data.json';

function App() {
  const [emails, setEmails] = useState([]);

  const emailDelete = (no) => {
    console.log(no);
  }

  const emaillAdd = async({firstName, lastName, email}) => {
    console.log(firstName['name'])
    try {
      const response  = await fetch(`/api`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'firstName': firstName.value,
          'lastName': lastName.value,
          'email': email.value
        })
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }

      const json = await response.json();
      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`)
      }

      setEmails([json.data, ...emails]);
    } catch (error) {
      console.log(error);
    }
  }
  const keywordChanged = async (keyword) => {
    try {
      const response  = await fetch(`/api?kw=${keyword}`, {
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

      setEmails(json.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
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
  
        setEmails(json.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div id={styles['App']}>
      <RegisterForm onSubmit={emaillAdd} />
      <Searchbar onChange={keywordChanged} />
      <Emaillist emails={emails} emailDelete={emailDelete} />
    </div>
  );
}

export default App