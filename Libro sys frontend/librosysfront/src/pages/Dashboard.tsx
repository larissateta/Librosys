import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../Components/Sidebar";
import {
    Sparkline,
    ChartValueAxis,
    ChartValueAxisItem,
  } from "@progress/kendo-react-charts";
import axios from "axios"




export default class Dashboard extends React.Component<any, any>{
    render(){
        return(
            <div className="container">
                <Sidebar/>
                <div className="sub-container">
                    <h1 className="title p">Welcome back to LibroSys</h1>
                    <input type="submit" value={"Add Book"} className="add" onClick={() => window.location.pathname = "/bookRegister"}/>
                    <input type="submit" value={"Add Student"} className="add" onClick={() => window.location.pathname = "/register"}/>

                </div>
            </div>
    
        )
        
    }

}