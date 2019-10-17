import React, { useState } from 'react';
import './App.css';
import Form from "./Form"
import Member from './Member';

function App() {
  const [members, setMembers] = useState([
    {
      name: "Jackson McComas",
      email: "jackson.mccomas@gmail.com",
      role: "Front-End Engineer"
    },

    {
      name: "John Doe",
      email: "john.doe@gmail.com",
      role: "Back-End Engineer"
    }
  ])
  
  const addNewMember = member => {
    setMembers([...members, member])
  }
  return (
    <div className="App">
     <h1>Member List</h1>
     <Form 
      addNewMember={addNewMember}
     />
      <Member membersList={members}/>
    </div>
  );
}

export default App;
