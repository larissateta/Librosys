import React from 'react';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';

export function Sidebar(){
    return(
        <div className='sidebar'>
            <ul>
                {SidebarData.map((val, key)=>{
                    return <li key={key}> {" "}  <div> <Link to={val.link}> {val.title}</Link></div>{" "} </li>
                })}
            </ul>
            
        </div>
    )
}