import logo from './logo.svg';
import './App.css';
import React from 'react'
import {useState} from 'react'
import Form from './Form'


function App() {
  const [teamMembers, setTeamMembers]=useState([]);
  return (
    <Form />
  );
}

export default App;
