// ICE
import React from 'react';


function Form() {
  return (
    <form>
      <label>
        Name:
        <input 
          type='text'
          name='name'
          placeholder='Full Name'
          // onChange={event => handleChange(event)}
        />
      </label>
      <label>
        Email:
        <input 
          type='email'
          name='email'
          placeholder='email'
          // onChange={event => handleChange(event)}
        />
      </label>
      <label>
        Role:
        <input 
          type='text'
          name='role'
          placeholder='role'
          // onChange={event => handleChange(event)}
        />
      </label>
      <button>Submit!</button>
    </form>
  );
}

export default Form;