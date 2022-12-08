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
        this.deleteStudent =  this.deleteStudent.bind(this);
    }
    deleteStudent(id:any){
        axios.delete(`http://localhost:8080/student/${id}`,id).then(res => {
            this.setState({students: this.state.students.filter((student:any) => student.student_id !== id)});
        });
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
                                <th>Actions Delete</th>
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
                                        <td>
                                            <button onClick ={()=> this.deleteStudent(student.student_id)} className="delete">Delete</button>
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