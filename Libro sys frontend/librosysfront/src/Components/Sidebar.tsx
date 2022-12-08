import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GoDashboard } from "react-icons/go"
import { HiUsers } from "react-icons/hi"
import { AiTwotoneBook } from "react-icons/ai"
import { BiTransfer } from "react-icons/bi"
import { AiFillCaretDown } from "react-icons/ai"


export function Sidebar(){
    return(
        <div className='sidebar'>
            <div className='logo'>
                <h3>LibroSys</h3>
            </div>
            <ul>
                <li>
                    <span className='icon'><GoDashboard/></span>
                    <Link to="/dashboard" className="item">Dashboard</Link>
                </li>
                <li>
                    <span className='icon'><AiTwotoneBook/></span>
                    <Link to="/books" className="item">Books</Link>
                </li>
                <li className='has-sub'>
                    <span className='icon'><BiTransfer/></span>
                    <Link to="/transactions" className="item">
                        Transactions
                        <span className="icon1"><AiFillCaretDown/></span>
                    </Link>
                    <ul className='sub collapse'>
                        <li>
                            <Link to="/transactions" className="item">Borrowed</Link>
                        </li>
                        <li>
                            <Link to="/transactions" className="item">Returned</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span className='icon'><HiUsers/></span>
                    <Link to="/students" className="item">Students</Link>
                </li>
            </ul>
            {/* <ul className='sidebarList'>
                {SidebarData.map((val, key)=>{
                    return 
                    <li key={key} 
                            onClick={() => {window.location.pathname = val.link}} 
                            className="row"
                            id={window.location.pathname == val.link? "active": ""}>
                        <div id='title'>{val.title}</div>
                        </li>
                })}
            </ul>
             */}
        </div>
    )
}