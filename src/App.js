import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import Navbar from "./components/navbar.component";
import ExercisesList  from "./components/exercises-list.component";
import CreateExercise  from "./components/create-exercise.component";
import EditExercise from "./components/edit-exercises.component";
import CreateUser from "./components/create-user.component";
import UsersList from "./components/users-list.component";

function App() {
  return (
    <Router>
        <div className='main-container' >
       
      <div className='container' >
      <Navbar />
       <br />
       <Switch>
       <Route exact path="/"  component={ExercisesList}/>
       <Route exact path="/create"  component={CreateExercise}/>
       {/* <Route exact path="/edit/:id"  component={EditExercise}/> */}
       <Route exact path="/user"  component={CreateUser}/>
       <Route exact path="/userslist"  component={UsersList}/>
       </Switch>
       </div>
       </div>
    </Router>
   
  );
}

export default App;
