import React from 'react';
import "./Save.scss";
import Navbar from '../Left/Navbar'
import Right from '../Right/Right'
import SaveTop from './SaveTop/SaveTop';
import SaveList from './SaveList/SaveList';

function Save(props) {
  return (
    <div className='container d-flex'>
      <Navbar />
      <div className='save'>
        <SaveTop 
          save={props.save} 
          setSave={props.setSave} />
        <SaveList 
          save={props.save} 
        />
      </div>
      <Right />
    </div>
  )
}

export default Save
