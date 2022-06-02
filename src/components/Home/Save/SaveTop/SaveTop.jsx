import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import "../Save.scss";

function SaveTop(props) {
  let [isTrue, setIsTrue] = useState(false);

  const modalHandler = () => {
    setIsTrue(!isTrue);
  }

  return (
    <>
      <Modal 
        show={isTrue} 
        setIsTrue={setIsTrue} 
        save={props.save} 
        setSave={props.setSave} 
      />
      <div className='save__top'>
        <div className='save__margin d-flex align-items-center justify-content-between'>
          <div className='save__title'>
            Your lists
          </div>  
          <div className='save__btns'>
            <button className='save__btn' onClick={modalHandler}>
              New list
            </button>
          </div>
        </div>
        <div className='save__filter'>
          <ul className='save__list d-flex'>
            <li className="save__item">
              Saved
            </li>
            <li className="save__item">
              Highlights
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SaveTop
