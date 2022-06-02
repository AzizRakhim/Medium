import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../Left/Navbar';
import Right from '../../Right/Right';
import DraftAbout from './DraftAbout/DraftAbout';
import "./DraftInside.scss";

function DraftInside(props) {
  let location = useLocation();

  return (
    <div className='container d-flex'>
      <Navbar />
      <DraftAbout arr={props.inputSave} location={location} />
      <Right />
    </div>
  )
}

export default DraftInside
