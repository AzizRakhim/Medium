import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Left/Navbar';
import Right from '../Right/Right';
import "./Data.scss";
import obj from '../../../Objects';
import DataHeader from './DataHeader/DataHeader';

function Data(props) {
  let [arr, setArr] = useState(obj);
  let location = useLocation();

  return (
    <div className='container d-flex'>
      <Navbar />
      <DataHeader 
        arr={arr} 
        location={location} 
        bio={props.bio}
      />
      <Right />
    </div>
  )
}

export default Data
