import React, { useState, useRef } from 'react';
import "./Modal.scss";

function Modal(props) {
  let [name, setName] = useState("");
  let [count, setCount] = useState(0);
  const textInput = useRef(null);

  const disappearHandler = () => {
    props.setIsTrue(!props.show);
  }

  const countHandler = (e) => {
    setName(e.target.value);
    setCount(e.target.value.length);
  }

  const saveHandler = () => {
    let temp = props.save.length;
    console.log(temp);
    props.setSave([...props.save, {
      id : +temp+1,
      name : name, 
      isTrue : false,
      elArr : []
    }]);
    
    textInput.current.value = "";
    props.setIsTrue(false);

  }
  
  return (
    <div className='smodal' style={{display : props.show ? "block" : "none"}}>
      <div className='smodal__boxshadow'></div>
      <div className='smodal__wrapper'>
        <div className='smodal__container position-relative'>
          <div className='smodal__holder'>
            <div className='smodal__top'>
              <h2 className='smodal__title'>
                Create new list
              </h2>
              <div className='smodal__input-box'>
                <div className='smodal__input-border'>
                  <input 
                    className='smodal__input' 
                    type="text" 
                    name='text' 
                    placeholder='Give it a name' required  
                    onChange={countHandler} maxLength="60" 
                    ref={textInput}
                  />
                </div>
                <div className='smodal__numbers'>
                  <span className='smodal__num'>
                    {count}
                  </span>
                  /60
                </div>
              </div>
              <div className='smodal__desc-box'>
                <button className='smodal__btn'>
                  Add a description
                </button>
              </div>
              <div className='smodal__checkbox d-flex align-items-center'>
                <input 
                  className='smodal__checkbox' type="checkbox" 
                  id='private' 
                  name='private' 
                />
                <label className='smodal__label' htmlFor="private">
                  Make it private
                </label>
              </div>
            </div>
            <div className='smodal__bottom'>
              <button className='smodal__cancel' onClick={disappearHandler}>
                Cancel
              </button>
              <button className='smodal__create' disabled={count > 0 ? false : true} style={{opacity : count > 0 ? "1" : "0.3"}} onClick={saveHandler}>
                Create
              </button>
            </div>
          </div>
          <div className='smodal__x-box'>
            <button className='smodal__x-btn' onClick={disappearHandler}>
              <svg className="dg" width={29} height={29}><path d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62" fillRule="evenodd" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
