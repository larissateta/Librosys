import React, { useState, useRef } from "react";
import { Sidebar } from "../Components/Sidebar";
import Select from "react-select"
import axios from "axios";
import { touchRippleClasses } from "@mui/material";


export default class AddTransaction extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state= {
            transactions:[],
            name: null
        };
        this.state ={book:"", student:"", status :""};
        this.handleChangeBook = this.handleChangeBook.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChangeStudent =  this.handleChangeStudent.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
    }
    handleChangeBook(e:any){
        this.setState({
            txtbook: e.target.value
        });
    }
    handleChangeStudent(e:any){
        this.setState({
            txtstudent: e.target.value
        });
    }
    handleChangeStatus(e:any){
        this.setState({
            txtstatus: e.target.value
        });
    }
    onSubmit(e:any){
        e.preventDefault();
        const transaction = {
            book: this.state.txtbook,
            student: this.state.txtstudent,
            status: this.state.txtstatus
        };
        axios.post("http://localhost:8080/transRegister", transaction).then(res=>{
            if(res.status ===200){
                alert("Transaction made successfully");
                window.location.pathname="/transactions";
            }
        });
        this.setState({
            book: "",
            student: "",
            status: ""
        })
        const [options, setOptions] = useState([""]);

        useRef(() =>{
            const getBooks= async ()=>{
                const books= [...options];
                await axios.get("http://localhost:8080/books").then((res)=> {
                    let result = res.data.items;
                    result.map((book:any)=>{
                        return books.push({value:book.title, label:book.Title});
                    });
                    
                });
            };
            getBooks();
        }, []);

    }
    render(){
        return(
            <div className="container">
                <Sidebar/>
                <div className="form-container">
                    <h1 className="title">Add Transaction</h1>
                    <form>
                    <div className="form-field">
                            <label className="labels">Book: </label>
                            <Select 
                                options={}
                            />
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
        )
    }
}