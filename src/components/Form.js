import React, {useState} from "react"
import './Form.css';
export default function NewMemberForm(props){

    const [memberData, setMemberData] = useState({
        membername: '',
        email: '',
        role: ''
    })

    const inputChanges = event => {
        setMemberData({
            ...memberData, 
            [event.target.name]: event.target.value
        })
    }

    const formSubmission = event =>{
        event.preventDefault();
        console.log(memberData);
        props.addNewMem(memberData);
        setMemberData({membername: "", email: ""})
    }
    return (
        <form onSubmit={formSubmission}>
            <div className = "formName"> 
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="membername" onChange={inputChanges} value={memberData.membername} />
            </div>
            
            <div className = "formEmail">
                <label htmlFor="email" >Email</label>
                <input id="email" type="text" name="email" onChange={inputChanges} value={memberData.email} />
            </div>
            
        <div className = "formRole">
                <label htmlFor="role" onChange={inputChanges}>Role</label>
                <select id="role" name="role" onChange={inputChanges} value={memberData.value}>
                    <option value="Default">Select your role</option>
                    <option value="Back End Engineer">Back End Engineer</option>
                    <option value="Front End Engineer">Front End Engineer</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="UX Designer">UX Designer</option>
                    <option value="UI Developer">UI Developer</option>
                    <option value ="Other">Other</option>
            </select>
            <button type="submit">Submit</button>
        </div>
            
        </form>
    )
}
export function MemberInfo(props){
    console.log(props);
    return(
        <div className="memberList">
            {
                props.members.map((person, index) => (
                    <div className="teamMem" key={index}>
                    <h3>{person.role}</h3>
                    <h3>Name</h3>
                    <p>{person.name}</p>
                    <h3>Email Address</h3>
                    <p>{person.email}</p>
                    </div>
                ))
            }
        </div>
    )
}