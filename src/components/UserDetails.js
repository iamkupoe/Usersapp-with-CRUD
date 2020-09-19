import React from "react";
import { Link } from 'react-router-dom';

const UserDetails = ({name, number, email, id, removeUser}) => {
  const handleClick = () => {
    removeUser(id)
  }
    return (
      <div className="users">
      
        <h4>
        Name: {name}
        </h4>
        <p>
        Number: {number}
        </p>
        <p>
        Email: {email}
        </p>
        <hr/>
        <button className='btn btn-sm btn-danger' onClick={handleClick} style={{color:'white', borderRadius:'1rem'}}>Remove User</button>
        <Link to={`/edit/${id}`} style={{color:'green'}}>Edit User</Link>
       
      </div>
    );
}

export default UserDetails;
