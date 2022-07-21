import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import './assets/Form.css';

export default function Form() {
    const [inputs, setInputs] = useState({
      name: "",
      email: "",
      password: "",
      gender: "male",
      textarea: "",
      check: "yes",
      valid: false
    })

    const onChange = (e) => {
      const {name, value} = e.target;

      setInputs({
        ...inputs,
        [name]: value
      })
    }

    const onChangeEmailInput = e => {
      const {name, value} = e.target;

      let regEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      setInputs({
        ...inputs,
        [name]: value,
        valid: regEx.test(value)
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
              onChange={onChangeEmailInput}/>
            { inputs.email === '' ?
                null :
                inputs.valid ?
                  <FontAwesomeIcon icon={faCheckCircle} style={{fontSize: 16, color: 'skyblue'}} /> : 
                  <FontAwesomeIcon icon={faTimesCircle} style={{fontSize: 16, color: 'hotpink'}} /> 
            }
            <label htmlFor="password">패스워드</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={ inputs.password } 
              onChange={onChange} />
            
            <fieldset>
                <legend>성별</legend>
                <label>여</label> 
                <input 
                  type="radio" 
                  name="gender" 
                  value={ "female" } 
                  checked={ inputs.gender === 'female' } 
                  onChange={onChange} />
                <label>남</label> 
                <input 
                  type="radio" 
                  name="gender" 
                  value={ "male" } 
                  checked={ inputs.gender === 'male' } 
                  onChange={onChange} />
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