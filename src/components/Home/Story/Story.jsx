import { useForkRef } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Story.scss';
import obj from '../../../Objects';

function Story(props) {
  let [num, setNum] = useState([1]);
  let [temp, setTemp] = useState([]);
  let [big, setBig] = useState("");
  let [input, setInput] = useState([]);

  const emailInputRef = React.useRef(null);

  React.useEffect(()=>{
    emailInputRef.current.focus();
  }, [num]);

  const inputHandler = (e) => {
    if(e.keyCode === 13){
      setNum([...num, 1]);
      setTemp([...temp, e.target.value]);
    } 
    if(e.target.value.length < 1){
      const list = [...num];
      list.splice(e.target.id, 1);
      setNum(num);
      emailInputRef.current.previousSibling.focus();
      emailInputRef.current.remove();
    }
  }

  const inputHandlerBig = (e) => {
    if(e.keyCode === 13){
      setNum([...num, 1]);
      setBig(e.target.value);
    }
  } 

  const publishHandler = () => {
    props.inputSave.push({
      id : props.keep,
      big : big,
      arr : temp.join(" ")
    });

    props.setKeep(props.keep + 1);

    obj.push({
      id : obj.length + 1,
      author : props.bio.name + props.bio.lastName,
      avatar : "https://imgur.com/oilQEAa.jpg",
      img : `https://picsum.photos/id/${100+props.keep}/692/460`,
      publish : "May 23",
      read : 7,
      title : big,
      smallDesc : temp[0],
      desc : temp.join(" "),
      like : 18,
      comment : 0,
      category : "Love",
      online : "6 days ago",
      commentArr : []
    })
  }

  return (
    <>
      <div className='story-container story d-flex align-items-center justify-content-between'>
        <div className='story__left '>
          <Link to={"/home"} className="d-flex align-items-center tdn">
            <div className='story__logo-box'>
              <svg className="svgIcon-use" height={25} viewBox="0 0 1043.63 592.71"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36" /><path d="M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279" /><path d="M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" /></g></g></svg>
            </div>
            <div className='story__title'>
              Draft
            </div>
          </Link>
        </div>
        <div className='story__right d-flex align-items-center'>
          <div className='story__publish'>
            <Link to={"/home/draft"} className="tdn">
              <button className='story__publish-btn' onClick={publishHandler}>
                Publish
              </button>
            </Link>
          </div>
          <div className='story__dots'>
            <button className='story__dots-btn'>
              <svg className="svgIcon-use" width={25} height={25}><path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z" fillRule="evenodd" /></svg>
            </button>
          </div>
          <div className='story__account-box'>
            <button className='story__notification-btn'>
              <svg className="svgIcon-use" width={25} height={25} viewBox="-293 409 25 25"><path d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 00-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 001 1h3.49a3.079 3.079 0 003.01 2.45 3.08 3.08 0 003.01-2.45h3.49a1 1 0 001-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 01-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 014.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z" /></svg>
            </button>
            <button className='story__account'>
              <img src="https://imgur.com/oilQEAa.jpg" alt="user" />
            </button>
          </div>
        </div>
      </div>
      <div className='story__holder'>
        {
          num.map((_, index) => {
            if(index == 0){
              return <input className='input-big d-block'
              onKeyUp={inputHandlerBig} 
              type="text" 
              index={index}
              key={"i" + index}
              ref={emailInputRef}
              placeholder="Title"
            />
            } else {
              return <input className='input-input d-block'
              onKeyUp={inputHandler} 
              id={index}
              type="text" 
              key={"i" + index}
              ref={emailInputRef}
              placeholder="Tell your story..."
            />
            }
          })
        }
      </div>
    </>
  )
}

export default Story
