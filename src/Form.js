// ICE
import React from 'react';
import {useState} from 'react'

function Form(props) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: ''
  });
  
  const { members, setMembers } = props;
  function handleSubmit(event) {
    event.preventDefault();
    setMembers([...members, user]);
    setUser({
      name: '',
      email: '',
      role: ''
    })
  }

  function handleChange(event) {
    // console.log(event.target.value);
    // console.log(event.target.name);
    setUser({...user,
      [event.target.name]: event.target.value
    });
  }

  console.log(user);

  return (
    <>
      <form onSubmit={event => handleSubmit(event)}>
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
        <h1>Current Team Member List</h1>
        <ul>
        {members.map((member, index) => <li key={index} >{`Name: ${member.name} Email: ${member.email} Role: ${member.role}`}</li>) }
        </ul>
    </>
  );
}

export default Form;