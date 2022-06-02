import React from 'react';
import Navbar from '../Left/Navbar';
import Right from '../Right/Right';
import "./Draft.scss";
import DraftHeader from './DraftHeader/DraftHeader';

function Draft(props) {

  return (
    <div className='container d-flex'>
      <Navbar />
      <DraftHeader 
        inputSave={props.inputSave} 
        setInputSave={props.setInputSave} 
      />
      <Right />
    </div>
  )
}

export default Draft
