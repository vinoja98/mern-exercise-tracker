/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

import axios from 'axios'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EditExercises from './edit-exercises.component'

const Exercise=props=>(
    
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            {/* <Link to={"/edit/"+props.exercise._id} className="navbar-brand " style={{color:'black'}} >edit</Link> */}
            <Popup trigger={<button className='btn btn-outline-primary' > Edit</button>} position="right center">
                <div><EditExercises id={props.exercise._id}></EditExercises></div>
            </Popup>
            
        </td>
        <td><button className='btn btn-outline-primary' >
            <a href="#" onClick={
                ()=>{props.deleteExercise(props.exercise._id)}
            }>delete</a>
        </button></td>
    </tr>
)

export class ExercisesList extends Component {
    constructor(props) {
        super(props)
    
        this.deleteExercise=this.deleteExercise.bind(this)
        this.state = {
             exercises:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
        .then(response =>{
            this.setState({
                exercises:response.data
            })
        })
        .catch(function (error) { alert(error); });}
     

         deleteExercise(id){
            axios.delete('http://localhost:5000/exercises/'+id)
            .then(res=>{console.log(res.data) 

            //update list after one is deleted
                this.setState({
                    exercises:this.state.exercises.filter(el=>el._id!==id)
                })
            })
            .catch((error) =>{ alert(error); }); }
            
            exercisesList(){
                return this.state.exercises.map(currentExercise=>{
                    return <Exercise exercise={currentExercise} deleteExercise={this.deleteExercise} key={currentExercise._id}/>
                })
            } 

    render() {
        return (
            <div>
               
               <div className="container" style={{overflowY:'auto'}}>
               <h3>Exercises List</h3>
               <div className="table-responsive" >
                <table className="table table-striped" style={{backgroundColor:'#3FEEE6'}} >
                    <thead style={{backgroundColor:'#45A29E'}} >
                    <tr>
                        <th>User </th>
                        <th>Exercise </th>
                        <th>Duration(in minutes)</th>
                        <th>Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        
                    </tr>
                    </thead>
                   

                    <tbody>{this.exercisesList()}</tbody>

                </table>
            
                </div>
            </div>
        </div>
        )
    }
}

export default ExercisesList
