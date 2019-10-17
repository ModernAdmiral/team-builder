import React, { useState }from 'react';
import { memberExpression } from '@babel/types';


const Form = props => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        role: ""
    })

    const changeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        props.addNewMember(form);
        setForm({name: "", email: "", role: ""})
    }
    return (  
        <form
        onSubmit={onSubmit}
        >
            <label htmlfor="Name">Name:  
            <input 
                name="name"
                id="title"
                type="text"
                placeholder="title"  
                onChange={changeHandler}
                value={form.name}
            /></label><br/>
            <label htmlfor="Email">Email:  </label>
            <input 
                name="email"
                id="email"
                type="email"
                placeholder="email"
                onChange={changeHandler}  
                value={form.email}
            /><br/>
            <label htmlfor="role">Role:  </label>
            <select placeholder="Select a role" name="role" id="role" onChange={changeHandler} value={form.role}>
                <option value="Front-End Engineer">Front-End Engineer</option>
                <option value="Back-End Engineer">Back-End Engineer</option>
                <option value="UI/UX Engineer">UI/UX Engineer</option>
            </select> <br />
            <button>Save</button>
        </form>
    );
}
 
export default Form