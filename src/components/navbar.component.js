import React, {Component} from 'react';
import { NavLink} from "react-router-dom"

import './navbar.css'

export class Navbar extends Component {
   

    render() {
        return (
           <nav className="navbar navbar-expand navbar-light bg-info navbar shadow-md" style={{backgroundColor:'lightgreen',width:'100%'}}>
               <div className="navbar-brand " style={{color:'black',marginLeft:'10%'}}>ExerciseTracker</div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink exact activeClassName="active" to="/" className="nav-link" >Exercises</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/create" className="nav-link" >Create Exercises Log</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/user" className="nav-link" >Create User</NavLink>
                        </li>
                    </ul>
                </div>
             

           </nav>
           

        )
    }
}

export default Navbar
