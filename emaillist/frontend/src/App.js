import React, {useState} from 'react';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import styles from './assets/scss/App.scss';
import data from './assets/json/data.json';

function App() {
  const [emails, setEmails] = useState(data);

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

  return (
    <div id={styles['App']}>
      <RegisterForm onSubmit={notifyEmaillAdd} />
      <Searchbar onChange={notifyKeywordChanged} />
      <Emaillist emails={emails} notifyEmailDelete={notifyEmailDelete} />
    </div>
  );
}

export default App