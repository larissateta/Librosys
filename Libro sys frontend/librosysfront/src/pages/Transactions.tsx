import React from "react";
import { Sidebar } from "../Components/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Transactions extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state = {
            transactions: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8080/transactions").then(res => {
            this.setState({transactions: res.data})
            console.warn("Transaction service is working")
        })
    }
    
    render(){
        return(
            <div className="container">
                <Sidebar/>
                <div className="sub-container">
                    <h2 className="text-center">LIST OF STUDENTS</h2>
                    <button className="add">
                        <Link to="/addTrans" className="addLink">Add Transaction</Link>
                    </button>
                    <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Transaction No</th>
                                <th>Book</th>
                                <th>Made by</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.transactions.map(
                                    (transaction:any) =>
                                    <tr key={transaction.transaction_id}>
                                        <td>{transaction.transaction_id}</td>
                                        <td>{transaction.book_id}</td>
                                        <td>{transaction.student_id}</td>
                                        <td>{transaction.status}</td>
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