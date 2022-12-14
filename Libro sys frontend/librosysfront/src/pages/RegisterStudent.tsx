import React, { useState } from "react";
import axios from "axios";
import { Sidebar } from "../Components/Sidebar";

export default class Register extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state = { users: [], name: null};
        this.state = {  firstname: "", lastname: "",email: "", password: ""};
        this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
        this.handleChangeLastname = this.handleChangeLastname.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
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
    onSubmit(e:any){
        e.preventDefault();
        const user = {
            firstname: this.state.txtfirstname,
            lastname: this.state.txtlastname,
            email: this.state.txtemail
        };
        axios.post("http://localhost:8080/register", user).then(res => {
            if(res.status === 200){
                alert("Student Registered Successfully!");
                window.location.pathname= "/students";
            }
        });
        this.setState({
            firstname: "",
            lastname: "",
            email: ""
        });
    }
    

    render(){
        return(
            <div className="container">
                <Sidebar/>
                <div>
                <div className="form-container">
                    <h1 className="title">Register</h1>
                    <form>
                        <div className="form-field">
                            <label className="labels">First Name: </label>
                            <input id="firstname" className="input-field" type={"text"} placeholder={"Enter your firstname"} value={this.state.txtfirstname} onChange ={ this.handleChangeFirstname} required/>
                        </div>
                        <div className="form-field">
                            <label className="labels">Last Name: </label>
                            <input id="lastname" className="input-field" type={"text"} placeholder={"Enter your lastname"} value={this.state.txtlastname} onChange = {this.handleChangeLastname} required/>
                        </div>
                        <div className="form-field">
                            <label className="labels">Email Add:</label>
                            <input id="email"  className="input-field email" type={"text"} placeholder={"Enter your email"} value={this.state.txtemail} onChange = {this.handleChangeEmail} required />
                        </div>
                        <input type={"submit"} className="submit-btn" onClick={this.onSubmit} data-cy="submit"/>
                        
                        
                    </form>
                </div>  
                </div> 
            </div>
        );
    }
    
}