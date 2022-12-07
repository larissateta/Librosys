import React, { Component } from "react";

import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

export default class Register extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state = { users: [], name: null};
        this.state = {  firstname: "", lastname: "",email: "", password: ""};
        this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
        this.handleChangeLastname = this.handleChangeLastname.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.onSubmit= this.onSubmit.bind(this);

    }
    handleChangeFirstname(e:any){
        this.setState({
            txtfirstname: e.target.value
        });
    }
    handleChangeLastname(e:any){
        this.setState({
            txtlastname: e.target.value
        });
    }
    handleChangeEmail(e:any){
        this.setState({
            txtemail: e.target.value
        });
    }
    handleChangePassword(e:any){
        this.setState({
            txtpassword: e.target.value
        });
    }
    onSubmit(e:any){
        e.preventDefault();
        const user = {
            firstname: this.state.txtfirstname,
            lastname: this.state.txtlastname,
            email: this.state.txtemail,
            password: this.state.txtpassword
        };
        axios.post("http://localhost:8080/register", user).then(res => {
            if(res.status === 200){
                alert("User Registered Successfully!");
                window.location.reload();
            }
        });
        this.setState({
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        });


    }

    render(){
        return(
            <div>
                <div className="form-container">
                    <h1 className="title">Register</h1>
                    <form>
                        <div className="form-field">
                            <label className="labels">First Name: </label>
                            <input className="input-field" type={"text"} placeholder={"Enter your firstname"} value={this.state.txtfirstname} onChange ={ this.handleChangeFirstname}/>
                        </div>
                        <div className="form-field">
                            <label className="labels">Last Name: </label>
                            <input className="input-field" type={"text"} placeholder={"Enter your lastname"} value={this.state.txtlastname} onChange = {this.handleChangeLastname}/>
                        </div>
                        <div className="form-field">
                            <label className="labels">Email Add:</label>
                            <input className="input-field email" type={"text"} placeholder={"Enter your email"} value={this.state.txtemail} onChange = {this.handleChangeEmail} />
                        </div>
                        <div className="form-field">
                            <label className="labels">Password: </label>
                            <input className="input-field" type={"password"} placeholder={"Enter your password"} value={this.state.txtpassword} onChange = {this.handleChangePassword} />
                        </div>
                        <input type={"submit"} className="submit-btn" onClick={this.onSubmit}/>
                        
                        <p className="dont">Have an account? <Link to={"/"}> Login</Link></p>
                        
                    </form>
                </div>  
            </div>
        );
    }
    
}