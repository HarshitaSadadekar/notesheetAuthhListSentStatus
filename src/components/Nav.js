import React from 'react'
import { BrowserRouter as Router, Link  } from "react-router-dom"

import './nav.css'

 const Nav = (props) => {

const logout= async()=>{
    await fetch("http://localhost:8000/api/logout", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  credentials: "include",
});
props.setName('');
}


let m;
if(props.name===""){
    m=(
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
            <Link to="/login" className="nav-link">Login</Link>
         </li>
         <li className="nav-item active">
            <Link to="/register" className="nav-link">Register</Link>
         </li>
     </ul>
    )
}
else {
      m= (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
            <Link to="/login" className="nav-link" onClick={logout}>Logout</Link>
         </li>
      
     </ul>
      )
}
return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">Go to Page</Link>

            <div>
          {m}
            </div>
        </div>
    </nav>
);
};

export default Nav;