import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NewMemberForm, {MemberInfo} from "./components/Form"

function App() {
  const [members, setMember] = useState([
    {
      id: 0,
      membername: "Happy Developer",
      email: "sunshine@react.com",
      role: "Web Developer"
    },
     {
      id: 1,
      membername: "Grumpy Developer",
      email: "grump@react.com",
      role: "UX Developer"
     },
     {
      id: 2,
      membername: "Sleepy Developer",
      email: "snooze@react.com",
      role: "Web Developer"
     },
     {
      id: 3,
      membername: "Dopey Developer",
      email: "thedopest@react.com",
      role: "UX Developer"
     },
     {
      id: 4,
      membername: "Bashful Developer",
      email: "servinbashfullooks@react.com",
      role: "Web Developer"
     },
     {
      id: 5,
      membername: "Sneezy Developer",
      email: "kleenex@react.com",
      role: "UX Developer"
     },
     {
      id: 6,
      membername: "Doc Developer",
      email: "emdee@react.com",
      role: "Web Developer"
     }
  ])
  const addNewMem = newMem => {
    const newInput = {
      name: newMem.name,
      id: Date.now(),
      name: newMem.membername,
      email: newMem.email,
      role: newMem.role
    };
    setMember([...members, newInput]);
  }

  return (
    <div className="teamMem">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      
      <div className="teamMemform">
      <h1>Join Anisha's Team!</h1>
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
