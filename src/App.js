import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import Navbar from "./components/navbar.component";
import ExercisesList  from "./components/exercises-list.component";
import CreateExercise  from "./components/create-exercise.component";
import EditExercise from "./components/edit-exercises.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className='container' >
      <Navbar />
       <br />
       <Switch>
       <Route exact path="/"  component={ExercisesList}/>
       <Route exact path="/create"  component={CreateExercise}/>
       <Route exact path="/edit/:id"  component={EditExercise}/>
       <Route exact path="/user"  component={CreateUser}/>
       </Switch>
       
      </div>
     
    </Router>
   
  );
}

export default App;
