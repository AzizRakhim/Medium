import { Checkbox } from '@mui/material';
import React, { useState } from 'react';
import "../Content.scss";

function ContentModal(props) {
  let [arr, setArr] = useState([]);

  return (
    <div className='content__dropdown' style={{display : props.check ? "block" : "none"}}>
      <div className='content__dropdown-top'>
        {
          props.save.map((el, idx) => (
            <div className='content__dropdown-container d-flex align-items-center' key={"d" + idx}>
              <Checkbox
                id={idx + 1}
                defaultChecked={el.isTrue}
                color="success" 
              />
              <label>
                {el.name}
              </label>
            </div>
          ))
        }
      </div>  
      <div className='content__dropdown-bottom'>
        <button className='content__dropdown-btn' onClick={props.modalHandler}>
          Create new list
        </button>
      </div>
    </div>
  )
}

export default ContentModal
