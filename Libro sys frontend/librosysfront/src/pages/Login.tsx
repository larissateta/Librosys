import React from "react";
import { Link } from "react-router-dom";


export default function Login (){
    return(
        <div>
            
            <div className="form-container">
            <h1 className="title">Login</h1>
                <form>
                    <div className="form-field">
                        <label className="labels">Username: </label>
                        <input className="input-field" type={"text"} placeholder={"Enter your username"}/>
                    </div>
                    <div className="form-field">
                        <label className="labels">Password: </label>
                        <input className="input-field" type={"password"} placeholder={"Enter your password"}/>
                    </div>
                    <input type={"submit"} className="submit-btn"/>
                    
                    <p className="dont">Don't have an account? <Link to={"/register"}> Register</Link></p>
                    
                </form>
            </div>  
        </div>
    );
}