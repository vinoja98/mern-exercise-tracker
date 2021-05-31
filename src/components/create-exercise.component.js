import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'


export class CreateExercise extends Component {
    constructor(props) {
        super(props)
        this.userInput = React.createRef()

        this.onChangeUsername=this.onChangeUsername.bind(this)
        this.onChangeDescription=this.onChangeDescription.bind(this)
        this.onChangeDuration=this.onChangeDuration.bind(this)
        this.onChangeDate=this.onChangeDate.bind(this)
        this.onSubmit=this.onSubmit.bind(this) //to refer word this to the class 

        this.state = {
             username:"",
             description:"",
             duration:0,
             date:new Date(),
             users:[] //to get users dropdown
        }
    }
    
    //react lifecycle method occurs when loading the page
    componentDidMount(){
        axios.get('http://localhost:5000/users/')
        .then((response) => { if(response.data.length>0){ 
            this.setState({
                users:response.data.map(user=>user.username),
                username:response.data[0].username
            })
         }else{ alert('NO USERS IN DATABASES'); } }).catch(function (error) { alert('NO USERS IN DATABASE'); }); } 

       
    

    onChangeUsername(e){
        this.setState({
            username:e.target.value
        })
    }

    onChangeDescription(e){
        this.setState({
            description:e.target.value
        })
    }

    onChangeDuration(e){
        this.setState({
            duration:e.target.value
        })
    }

    onChangeDate(date){
        this.setState({
            date:date
        })
    }

    onSubmit(e){
        e.preventDefault()

        const exercise={
            username:this.state.username,
            description:this.state.description,
            duration:this.state.duration,
            date:this.state.date
        }
        console.log(exercise)
        axios.post('http://localhost:5000/exercises/add',exercise)
        .then((response) => { if(response){ alert("OK"); }else{ alert('NOT OK'); } }).catch(function (error) { alert(error); }); 
       
        window.location='/'  //go back to home page after update
    }
    
    render() {
        return (
            <div>
                <div className='container' style={{backgroundColor:'gold'}}>
              <h3>Create New Exercise Log</h3>
              <form onSubmit={this.onSubmit}>
               
                <div className='form-group'>
                    <label className="form-label" >Username :</label>
                    <select ref={this.userInput}
                    required
                    className='custom-select form-control '
                    value={this.state.username}
                    onChange={this.onChangeUsername}>
                        {this.state.users.map(function(user){
                            return<option key={user} value={user}>{user}</option>
                        })}
                    </select>
                    </div>
         
                <br/>
                <div className='form-group'>
                    <label  className="form-label" >Description :</label>
                    <input type='text'
                    required
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChangeDescription}/>
                </div>
                <br/>
                <div className='form-group'>
                    <label className="form-label"  >Duration(in minutes) :</label>
                    <input type='text'
                    required
                    className='form-control'
                    value={this.state.duration}
                    onChange={this.onChangeDuration}/>
                </div>
                <br/>
                <div className='form-group'>
                    <label  className="form-label"  >Date :</label>
                    <div>
                        <DatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}/>
                    </div>
                </div>
                <br/><br/><br/>
                <div className='form-group'>
                    <input type='submit' value='Create Exercise Log' className='btn btn-primary'/>
                </div>
                <br/><br/><br/>
              </form>
              </div>
            </div>
        )
    }
}

export default CreateExercise
