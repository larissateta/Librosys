import React, { useState } from "react";
import axios from "axios";
import { render } from "react-dom";

export default class BookRegister extends React.Component<any, any>{
    constructor(props:any){
       super(props);
       this.state = {books:[], name: null};
       this.state = {ispn:"", title: "", author: "", publishers: ""};
       this.handleChangeTitle = this.handleChangeTitle.bind(this);
       this.handleChangeIspn = this.handleChangeIspn.bind(this);
       this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
       this.handleChangePublishers = this.handleChangePublishers.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
    }
    handleChangeTitle(e:any){
        this.setState({
            txtTitle: e.target.value
        });
    }
    handleChangeIspn(e:any){
        this.setState({
            txtIspn: e.target.value
        });
    }
    handleChangeAuthor(e:any){
        this.setState({
            txtAuthor: e.target.value
        });
    }
    handleChangePublishers(e:any){
        this.setState({
            txtPublishers: e.target.value
        });
    }

    async onSubmit(e:any){
        e.preventDefault();
        const book = await {
            ispn: this.state.txtIspn,
            title: this.state.txtTitle,
            author: this.state.txtAuthor,
            publishers: this.state.txtPublishers
        };
        await axios.post("http://localhost:8080/bookRegister", book).then (res => {
            if(res.status === 200){
                alert("Book Registered Successfully");
                window.location.reload();
            }
        });
        this.setState({
            ispn: "",
            title: "",
            author: "",
            publishers: ""
        })
    }
render(){    
    return(
        <div>
            <div className="form-container">
                <h1 className="title">Register a book</h1>
                <form>
                    <div className="form-field">
                        <label className="labels">Book Title: </label>
                        <input className="input-field" type={"text"} placeholder={"Enter book title"} value={this.state.txtTitle}  onChange = {this.handleChangeTitle} />
                    </div>
                    <div className="form-field">
                        <label className="labels">Author: &nbsp; &nbsp; &nbsp;</label>
                        <input className="input-field" type={"text"} placeholder={"Enter the author's name"} value={this.state.txtAuthor} onChange = {this.handleChangeAuthor} />
                    </div>
                    <div className="form-field">
                        <label className="labels">ISPN: &nbsp; &nbsp; &nbsp; &nbsp;</label>
                        <input className="input-field email" type={"text"} placeholder={"Enter ISPN of the book"} value={this.state.txtIspn} onChange = {this.handleChangeIspn}/>
                    </div>
                    <div className="form-field">
                        <label className="labels">Publisher: </label>
                        <input className="input-field" type={"text"} placeholder={"Enter publishers"} value={this.state.txtPublishers} onChange={this.handleChangePublishers}/>
                    </div>
                    <input type={"submit"} className="submit-btn" value={"Register"} onClick={this.onSubmit}/>
                    
                    
                    
                </form>
            </div>  
                    
        </div>

    )}
}