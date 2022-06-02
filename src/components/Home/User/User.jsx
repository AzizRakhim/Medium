import React from 'react';
import Navbar from '../Left/Navbar';
import Right from '../Right/Right';
import "./User.scss";
import UserHeader from './UserHeader/UserHeader';

function User(props) {
  return (
    <div className='container d-flex'>
      <Navbar />
      <UserHeader 
        inputSave={props.inputSave} 
        setInputSave={props.setInputSave}
        bio={props.bio}
      />
      <Right />
    </div>
  )
}

export default User
