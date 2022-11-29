import React from "react";

import { Link } from "react-router-dom"

export default function Register (){
    return(
        <div>
            <div className="form-container">
                <h1 className="title">Register</h1>
                <form>
                    <div className="form-field">
                        <label className="labels">First Name: </label>
                        <input className="input-field" type={"text"} placeholder={"Enter your firstname"}/>
                    </div>
                    <div className="form-field">
                        <label className="labels">Last Name: </label>
                        <input className="input-field" type={"text"} placeholder={"Enter your lastname"}/>
                    </div>
                    <div className="form-field">
                        <label className="labels">Email Add:</label>
                        <input className="input-field email" type={"text"} placeholder={"Enter your email"}/>
                    </div>
                    <div className="form-field">
                        <label className="labels">Password: </label>
                        <input className="input-field" type={"password"} placeholder={"Enter your password"}/>
                    </div>
                    <input type={"submit"} className="submit-btn"/>
                    
                    <p className="dont">Have an account? <Link to={"/"}> Login</Link></p>
                    
                </form>
            </div>  
        </div>
    );
}