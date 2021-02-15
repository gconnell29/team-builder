// ICE
import React from 'react';
import {useState} from 'react'

function Form(props) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: ''
  });
  
  const {setMembers} = props;
  function saveMember() {
  }

  function handleChange(event) {
    // console.log(event.target.value);
    // console.log(event.target.name);
    setUser({...user,
      [event.target.name]: event.target.value
    });
    console.log(user);
  }

  return (
    <form>
      <label>
        Name:
        <input 
          type='text'
          name='name'
          placeholder='Full Name'
          onChange={event => handleChange(event)}
          value={user.name}
        />
      </label>
      <label>
        Email:
        <input 
          type='email'
          name='email'
          placeholder='email'
          onChange={event => handleChange(event)}
          value={user.email}
        />
      </label>
      <label>
        Role:
        <input 
          type='text'
          name='role'
          placeholder='role'
          onChange={event => handleChange(event)}
          value={user.role}
        />
      </label>
      <button>Submit!</button>
    </form>
  );
}

export default Form;