import React, { Component } from 'react'
import axios from 'axios'

export class CreateUser extends Component {
    constructor(props) {
        super(props)

        this.onChangeUsername=this.onChangeUsername.bind(this)
    
        this.onSubmit=this.onSubmit.bind(this) //to refer word this to the class 

        this.state = {
             username:"",
        }
    }
   

    onChangeUsername(e){
        this.setState({
            username:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()

        const user={
            username:this.state.username,
          
        }
        console.log(user)
        axios.post('http://localhost:5000/users/add',user)
        .then((response) => { if(response){ alert("OK"); }else{ alert('NOT OK'); } }).catch(function (error) { alert('NOT OK.'); }); } catch (err) { alert('NOT OK.'); 
       
    }

    render() {
        return (
            <div>
                <div className='container' style={{backgroundColor: 'rgb(63,238,230)',
background: 'linear-gradient(90deg, rgba(63,238,230,1) 0%, rgba(69,162,158,1) 35%, rgba(2,30,36,1) 100%)'}}>
                <h3>Create New User</h3>
              <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                    <label className="form-label"  >Username :</label>
                    <input type='text'
                    required
                    className='form-control'
                    value={this.state.username}
                    onChange={this.onChangeUsername}/>
                </div>
                <br/>
                <br/>
            
                <br/><br/><br/>
                <div className='form-group'>
                    <input type='submit' value='Create User' className='btn btn-primary'/>
                </div>
                <br/><br/><br/>
              </form>
            </div>
            </div>
        )
    }
}

export default CreateUser 