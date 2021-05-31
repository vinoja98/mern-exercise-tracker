/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'

const Exercise=props=>(
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td><Link to={"/edit/"+props.exercise._id} className="navbar-brand " >edit</Link></td>
        <td><button className='btn btn-outline-info' >
            <a href="#" onClick={
                ()=>{props.deleteExercise(props.exercise._id)}
            }><div style={{color:'black'}}>delete</div></a>
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
            .then(res=>console.log(res.data)) 

            //update list after one is deleted
                this.setState({
                    exercises:this.state.exercises.filter(el=>el._id!==id)
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
               <h3>Exercises List</h3>
               <div className="main-container" style={{overflowY:'auto'}}>
               <div className="table-responsive" >
                <table className="table table-striped" >
                    <thead style={{backgroundColor:'yellow'}} >
                    <tr>
                        <th>User </th>
                        <th>Exercise </th>
                        <th>Duration</th>
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
