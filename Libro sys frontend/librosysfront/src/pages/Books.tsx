import axios from "axios";
import React from "react";
import { Sidebar } from "../Components/Sidebar";
import { Link } from "react-router-dom";

export default class Books extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state = {
            books: []
        }
        this.deleteBook = this.deleteBook.bind(this);
    }
    deleteBook(id:any){
        axios.delete(`http://localhost:8080/book/${id}`,id).then(res => {
            this.setState({books: this.state.books.filter((book:any) => book.id !== id)});
        });
    }
componentDidMount() {
    axios.get("http://localhost:8080/books").then(res => {
        this.setState({books: res.data})
        console.warn("Books service is working")
    })
}

    render(){
        return(
            <div className="container">
                <Sidebar/>
                <div className="sub-container">
                <h2 className="text-center">LIST OF BOOKS IN THE LIBRARY</h2>
                <button className="add">
                    <Link to="/bookRegister" className="addLink">Add Book</Link>
                </button>

                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Book Title</th>
                                <th>Author</th>
                                <th>ISPN</th>
                                <th>Publishers</th>
                                <th>Action Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.books.map(
                                    (book:any) =>
                                    <tr key={book.id}>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.ispn}</td>
                                        <td> {book.publishers} </td>
                                        <td>
                                            <button onClick ={()=> this.deleteBook(book.id)} className="delete">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                </div>



            </div>
        )
    }
}