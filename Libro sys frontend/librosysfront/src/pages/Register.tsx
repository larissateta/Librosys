import React from "react";

import { Link } from "react-router-dom"
import { useState } from "react";

export default function Register (){
    const [firstname, setFirstname]=useState("");
    const [lastname, setLastname]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const handleClick=(e:any)=>{
        e.preventDefault();
        const user= {firstname, lastname, email, password};
        console.log(user);
        fetch("http://localhost:8080/user/register",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    }).then(() =>{
        console.log("New Student added");
    })
    }
    return(
        <div>
            <div className="form-container">
                <h1 className="title">Register</h1>
                <form>
                    <div className="form-field">
                        <label className="labels">First Name: </label>
                        <input className="input-field" type={"text"} placeholder={"Enter your firstname"} value={firstname} onChange ={ (e)=> setFirstname(e.target.value)}/>
                    </div>
                    <div className="form-field">
                        <label className="labels">Last Name: </label>
                        <input className="input-field" type={"text"} placeholder={"Enter your lastname"} value={lastname} onChange = {(e)=> setLastname(e.target.value)}/>
                    </div>
                    <div className="form-field">
                        <label className="labels">Email Add:</label>
                        <input className="input-field email" type={"text"} placeholder={"Enter your email"} value={email} onChange = {(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <label className="labels">Password: </label>
                        <input className="input-field" type={"password"} placeholder={"Enter your password"} value={password} onChange = {(e) => setPassword(e.target.value)} />
                    </div>
                    <input type={"submit"} className="submit-btn" onClick={handleClick}/>
                    
                    <p className="dont">Have an account? <Link to={"/"}> Login</Link></p>
                    
                </form>
            </div>  
        </div>
    );
}