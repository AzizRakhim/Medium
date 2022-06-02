import React from 'react';
import "./Chosen.scss";
import Navbar from '../Left/Navbar'
import Right from '../Right/Right';
import ChosenHeader from './ChosenHeader/ChosenHeader';

function Chosen(props) {
  return (
    <div className='container d-flex'>
      <Navbar />
      <ChosenHeader 
        save={props.save} 
        setSave={props.setSave} clicked={props.clicked} setClicked={props.setClicked} 
        bio={props.bio}
      />
      <Right />
    </div>
  )
}

export default Chosen
