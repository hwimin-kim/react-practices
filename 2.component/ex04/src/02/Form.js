import React, { useState } from 'react';
import './assets/Form.css';

export default function Form() {
    const [inputs, setInput] = useState({
      name: "",
      email: "",
      password: "",
      gender: "",
      textarea: "",
      check: "yes"
    })

    const onChange = (e) => {
      const {name, value} = e.target;
      console.log(name, value);

      setInput({
        ...inputs,
        [name]: value
      })
    }

    return (
        <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
            <label htmlFor="name">이름</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              value={ inputs['name'] } 
              onChange={onChange} />

            <label htmlFor="email">이메일</label>
            <input 
              id="email" 
              name="email" 
              type="text" 
              value={ inputs.email }
              onChange={onChange}/>

            <label htmlFor="password">패스워드</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={ inputs.password } 
              onChange={onChange} />

            <fieldset>
                <legend>성별</legend>
                <label>여</label> <input type="radio" name="gender" value={ inputs.gender } defaultChecked={ true } />
                <label>남</label> <input type="radio" name="gender" value={ inputs.gender } defaultChecked={ false } />
            </fieldset>

            <label htmlFor="birthYear">생년</label>
            <select id="birthYear">
                <option value='1984'>1984년</option>
                <option value='1985'>1985년</option>
                <option value='1986'>1986년</option>
                <option value='1987'>1987년</option>
                <option value='1988'>1988년</option>
                <option value='1989'>1989년</option>
                <option value='1990'>1990년</option>
            </select>

            <label htmlFor="birthYear">자기소개</label>
            <textarea 
              name={'textarea'}
              value={inputs.textarea} 
              onChange={onChange} />

            <fieldset>
                <legend>약관동의</legend>
                <input id="agree-prov" type="checkbox" name="agreeProv" value= { inputs.check } defaultChecked={ false } />
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입" />
        </form>
    );
}