import React, { Component } from "react";
import { connect } from 'react-redux';
import  { addUser, getAllUsers } from './store/usersActions';
import { deleteUser } from './store/usersActions';
import { logOutUser } from './store/authActions';
import UserDetails from "./components/UserDetails";
import UserForm from './components/UserForm';
import "./App.css";


export class App extends Component {

  addNewUser = newUser => {
    console.log("from App", newUser)
    this.props.addUser(newUser)
  };
  deleteUser = user_id => {
    this.props.deleteUser(user_id);
  }

  componentDidMount(){
     this.props.getAllUsers();
  }
   
  render() {
    return (
      <div className="App" >

      <div className="form" style={{marginLeft:'4rem', float:'left'}}>
          {/* Form to add new user */}
          
        <UserForm addUser = {this.addNewUser} />
        <button style={{width:"5rem", color:"white", marginLeft:'7.5rem', backgroundColor:'blue', borderRadius:'1rem'}} onClick={this.props.logOutUser}>Logout</button>
      </div>
        

        {/* List of users */}
        <div className="User-details" style={{float: 'right', marginRight:'3rem'}}> <h2 style={{marginLeft:'10rem', color:'rgba(238, 8, 19, 0.411)'}}>All Users</h2>
         {this.props.users.map((item) => {
             return (
               <UserDetails
               key={item.id}
               id={item.id}
               name={item.name}
               number={item.number}
               email={item.email}
               removeUser={this.deleteUser} />
              
             );
         })}
        </div>
      </div>
    );
  }
  }

  const mapStateToProps = (state) => {
    console.log(state);
    return {
     users:state.usersState.users
  };}

  const mapDispatchToProps = {
    addUser,
    deleteUser,
    getAllUsers,
    logOutUser
  }


export default connect(mapStateToProps, mapDispatchToProps)(App);
