import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import NewMemberForm, {MemberInfo} from "./components/Form"

function App() {
  const [members, setMember] = useState([
    {
      id: 0,
      name: "Happy Developer",
      email: "sunshine@react.com",
      role: "Web Developer"
    },
     {
      id: 1,
      name: "Grumpy Developer",
      email: "grump@react.com",
      role: "UX Developer"
     },
     {
      id: 2,
      name: "Sleepy Developer",
      email: "snooze@react.com",
      role: "Web Developer"
     },
     {
      id: 3,
      name: "Dopey Developer",
      email: "thedopest@react.com",
      role: "UX Developer"
     },
     {
      id: 4,
      name: "Bashful Developer",
      email: "servinbashfullooks@react.com",
      role: "Web Developer"
     },
     {
      id: 5,
      name: "Sneezy Developer",
      email: "kleenex@react.com",
      role: "UX Developer"
     },
     {
      id: 6,
      name: "Doc Developer",
      email: "emdee@react.com",
      role: "Web Developer"
     }
  ])
  const addNewMem = newMem => {
    const newInput = {
      name: newMem.name,
      id: Date.now(),
      //name: newMem.membername,
      email: newMem.email,
      role: newMem.role
    };
    setMember([...members, newInput]);
  }

  return (
    <div className="teamMem">
      
      <div className="teamMemform">
      <h1>Join Snow White's Team!</h1>
        <NewMemberForm addNewMem={addNewMem}/>
      </div>
      <div className="teamMemDisplay">
        <MemberInfo members={members}/>
      </div>  
    </div>
  );
}

 /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
