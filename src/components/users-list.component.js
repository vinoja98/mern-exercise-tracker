/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import axios from 'axios'

const User=props=>(
    <tr>
        <td>{props.user.username}</td>
        <td><button className='btn btn-outline-primary' >
            <a href="#" onClick={
                ()=>{props.deleteUser(props.user._id)}
            }><div style={{color:'black'}}>delete</div></a>
        </button></td>
    </tr>
)

export class UsersList extends Component {
    constructor(props) {
        super(props)
    
        this.deleteUser=this.deleteUser.bind(this)
        this.state = {
             users:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/users/')
        .then(response =>{
            this.setState({
                users:response.data
            })
        })
        .catch(function (error) { alert(error); });}
     

         deleteUser(id){
            axios.delete('http://localhost:5000/users/'+id)
            .then(res=>{console.log(res.data)

            //update list after one is deleted
                this.setState({
                    users:this.state.users.filter(el=>el._id!==id)
                })
            })
            .catch((error) =>{ alert('error'); }); }
            
           usersList(){
                return this.state.users.map(currentUser=>{
                    return <User user={currentUser} deleteUser={this.deleteUser} key={currentUser._id}/>
                })
            } 

    render() {
        return (
            <div>
               
               <div className="container" style={{overflowY:'auto'}}>
               <h3>Users List</h3>
               <div className="table-responsive" >
                <table className="table table-striped" style={{backgroundColor:'#3FEEE6'}} >
                    <thead style={{backgroundColor:'#45A29E'}} >
                    <tr>
                        <th>User </th>
                       
                        <th>Delete</th>
                        
                    </tr>
                    </thead>
                   

                    <tbody>{this.usersList()}</tbody>

                </table>
            
                </div>
            </div>
        </div>
        )
    }
}

export default UsersList
