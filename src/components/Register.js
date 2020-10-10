import React from 'react';
import { connect } from 'react-redux';
import { registerWithEmail, loginWithGoogle } from '../store/authActions';



function Register(props) {
  if (!props.auth.isLoaded) return null;

  if (props.auth.uid) props.history.push('/');
  const handleSubmit = (e) => {
     e.preventDefault()
     let email = e.target.elements.email.value;
     let password = e.target.elements.password.value;
      props.registerWithEmail(email, password);
  }
    return (
        <div className="reg-form">
        <h3 id="register-form">Register Form</h3>
           <form className="form-submit" onSubmit={handleSubmit}>
            <div>
              <label className="label-form">Email:</label>
              <input name="email" type="email"  placeholder="Email" id="input-form" />
            </div>

            <div>
              <label className="label-form">Password:</label>
              <input  name="password" type="password" placeholder="Password" id="input-form"/>
            </div>

            <hr id="horizontal"/><br/>

            <button type="submit" id="button-reg">Register</button>

      
            <hr id="horizontal-google" />

            <button id="google-but"  onClick={props.loginWithGoogle}>
            <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2014/09/google-logo-760x380.png" alt="google button" id="google-submit" height="25rem" />
            </button>
           
           </form>
            
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
   auth:state.firebase.auth,
  }
};

const mapDispatchToProps = {
 registerWithEmail,
 loginWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
