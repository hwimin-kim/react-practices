import React, {useState} from 'react';

export default function TitelBar02() {
  const [stateNo, setStateNo] = useState(10);


  return (
    <h1 
      onClick={e => {
        setStateNo((preStateNo)=> preStateNo + 1);
        console.log('TitelBar02 click!!!')
    }}
      style={{cursor: 'pointer'}}>
      Function Handler(Functional Component)
      <br />
      {
        stateNo
      }
    </h1>
  )
}