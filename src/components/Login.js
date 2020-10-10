import React from 'react';
import { connect } from 'react-redux';
import { loginWithEmail, loginWithGoogle } from '../store/authActions';



function Login (props) {
   if (!props.auth.isLoaded) return null;

   if (props.auth.uid) props.history.push('/');
   
  const handleSubmit = (e) => {
     e.preventDefault()
     let email = e.target.elements.email.value;
     let password = e.target.elements.password.value;
     props.loginWithEmail(email, password);

      
  }
    return (
        <div>
        <h3 id="login">Login</h3>
           <form className="login-form" onSubmit={handleSubmit}>
            <div>
              <label id="label-login">Email:</label>
              <input id="input-login" name="email" type="email"  placeholder="Email" />
            </div>

            <div>
              <label id="label-login">Password:</label>
              <input id="input-login" name="password" type="password" placeholder="Password" />
            </div>

            <hr id="horizontal"/><br/>
            
            <button id="button-login" type="submit">Login</button>

            <hr id="horizontal-google" />

            <button className="button-google" onClick={props.loginWithGoogle}>
            <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2014/09/google-logo-760x380.png" alt="google button" height="25rem" />
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
 loginWithEmail,
 loginWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
