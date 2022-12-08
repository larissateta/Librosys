import React from "react";
import { Sidebar } from "../Components/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";



export default class Students extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            students: []
        }
    }
componentDidMount() {
    axios.get("http://localhost:8080/getStudents").then(res => {
        this.setState({students: res.data})
        console.warn("Student service is working")
    })
}

    render(){
        return(
            <div className="container">
                <Sidebar/>
                <div className="sub-container">
                <h2 className="text-center">LIST OF STUDENTS</h2>
                <button className="add">
                    <Link to="/register" className="addLink">Add Student</Link>
                </button>

                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    (student:any) =>
                                    <tr key={student.id}>
                                        <td>{student.firstname}</td>
                                        <td>{student.lastname}</td>
                                        <td>{student.email}</td>
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