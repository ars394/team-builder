import React, {useState} from "react"
import './Form.css';
export default function NewMemberForm(props){

    const [memberData, setMemberData] = useState({
        name: '',
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
        //console.log(memberData);
        props.addNewMem(memberData);
        setMemberData({name: "", email: ""})
    }
    return (
        <form onSubmit={formSubmission}>
            <div className= "formtext">
                
            
                <div className = "formInput">
                    <label htmlFor="name" >Name</label><br></br>
                    <input id="name" type="text" name="name" onChange={inputChanges} value={memberData.name} />
                </div>

                <div className = "formInput">
                    <label htmlFor="email" >Email</label><br></br>
                    <input id="email" type="text" name="email" onChange={inputChanges} value={memberData.email} />
                </div>
            
                <div className = "formInput">
                    <label htmlFor="role" onChange={inputChanges}>Role </label><br></br>
                    <select id="role" name="role" onChange={inputChanges} value={memberData.value}>
                        <option value="Default">Select your role</option>
                        <option value="Back End Engineer">Back End Engineer</option>
                        <option value="Front End Engineer">Front End Engineer</option>
                        <option value="Project Manager">Project Manager</option>
                        <option value="UX Designer">UX Designer</option>
                        <option value="UI Developer">UI Developer</option>
                        <option value ="Snow White's Dwarf">Snow White's Dwarf</option>
                    </select>
                    <button type="submit">Submit</button>
                </div>
            </div>
            
            
        </form>
    )
}
export function MemberInfo(props){
    //console.log(props);
    return(
        <div className="memberList">
            {
                props.members.map((person, index) => (
                    <div className="teamMem" key={index}>
                    <h2>{person.name}</h2>
                    <p>{person.role}</p>
                    <p>{person.email}</p>
                    </div>

                   
                ))
            }
        </div>
    )
}