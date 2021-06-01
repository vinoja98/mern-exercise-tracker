import React, {Component} from 'react';
import { NavLink} from "react-router-dom"

import './navbar.css'

export class Navbar extends Component {
   

    render() {
        return (
            <div className='container'>
           <nav className="navbar navbar-expand navbar-light navbar shadow-md" style={{width:'100%',backgroundColor:'#14505c'}}>
               <div className="navbar-brand " style={{color:'black',marginLeft:'10%',fontSize:'40px'}}>ExerciseTracker</div>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto" >
                        <li className="nav-item active" style={{fontSize:'30px'}}>
                            <NavLink exact activeClassName="active" to="/" className="nav-link" >Exercises|</NavLink>
                        </li>
                        <li className="nav-item" style={{fontSize:'30px'}}>
                            <NavLink exact activeClassName="active" to="/create" className="nav-link" >Create Exercises Log|</NavLink>
                        </li>
                        <li className="nav-item" style={{fontSize:'30px'}}>
                            <NavLink exact activeClassName="active" to="/user" className="nav-link" >Create User|</NavLink>
                        </li>
                        <li className="nav-item" style={{fontSize:'30px'}}>
                            <NavLink exact activeClassName="active" to="/userslist" className="nav-link" >Users</NavLink>
                        </li>
                    </ul>
                </div>
             

           </nav>
           </div>

        )
    }
}

export default Navbar
