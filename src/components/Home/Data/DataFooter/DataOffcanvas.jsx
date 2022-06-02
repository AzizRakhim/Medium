import React, { useState, useRef } from 'react';
import "./DataFooter.scss";
import obj from '../../../../Objects';
import DataItem from './DataItem';

function DataOffcanvas(props) {
  let [check, setCheck] = useState(false);
  let [text, setText] = useState("");
  const inputPlace = useRef(null);

  const xHandler = () => {
    props.setIsTrue(!props.isTrue);
  }

  const inputChangeHandler = (e) => {
    setText(e.target.value);
  }

  const cancelHandler = () => {
    setCheck(false);
  }

  const inputClickHandler = () => {
    setCheck(true);
  }

  const respondHandler = () => {
    obj[props.index].commentArr.unshift({
      commentId : obj[props.index].commentArr.length + 1,
      commentName : props.bio.name + props.bio.lastName,
      commentPic : "https://imgur.com/oilQEAa.jpg",
      commentDesc : text,
      commentLike : 0,
      commentArrs : [],
    });
    obj[props.index].comment = obj[props.index].commentArr.length;
    setCheck(false);
    inputPlace.current.value = "";
  }

  return (
    <div style={{transform : props.isTrue ? "translateX(0)" : "translateX(414px)"}} className='dataOffcanvas'>
      <div className='dataOffcanvas__top d-flex align-items-center justify-content-between'>
        <div className='dataOffcanvas__left'>
          Responses ({props.item.comment})
        </div>
        <div className='dataOffcanvas__right d-flex align-items-center'>
          <div className='dataOffcanvas__holder'>
            <button className='dataOffcanvas__btn'>
              <svg width={25} height={25} viewBox="0 0 25 25"><path fillRule="evenodd" clipRule="evenodd" d="M11.99 5.04c.26-.21.64-.22.91-.01.97.72 1.77 1.21 2.6 1.54.83.32 1.72.48 2.89.5.41.01.74.35.74.76-.02 3.62-.43 6.26-1.45 8.21-1.03 1.98-2.66 3.21-4.97 4.08a.75.75 0 0 1-.53 0c-2.25-.87-3.86-2.1-4.9-4.07-1.02-1.95-1.46-4.59-1.48-8.22 0-.41.33-.75.75-.76 1.19-.02 2.1-.18 2.92-.5.82-.32 1.6-.81 2.52-1.53zm.46.9c-.9.69-1.71 1.21-2.62 1.56a8.9 8.9 0 0 1-3.02.57c.03 3.45.46 5.82 1.36 7.51.88 1.69 2.25 2.77 4.28 3.57 2.1-.8 3.47-1.89 4.34-3.57.89-1.7 1.3-4.07 1.34-7.51a8.8 8.8 0 0 1-3-.57 11.8 11.8 0 0 1-2.68-1.56zm0 9.15a2.67 2.67 0 1 0 0-5.34 2.67 2.67 0 0 0 0 5.34zm0 1a3.67 3.67 0 1 0 0-7.34 3.67 3.67 0 0 0 0 7.34zm-1.82-3.77l.53-.53.91.92 1.63-1.63.52.53-2.15 2.15-1.44-1.44z" /></svg>
            </button>
          </div>
          <div className='dataOffcanvas__holder'>
            <button className='dataOffcanvas__btn' onClick={xHandler}>
              <svg width={25} height={25} viewBox="0 0 25 25" className="dg"><path d="M18.13 6.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62" /></svg>
            </button>
          </div>
        </div>
      </div>
      <div className='dataOffcanvas__form'>
        <div className={`dataOffcanvas__form-box align-items-center ${check ? "d-show" : "d-not-show"}`}>
          <div className='dataOffcanvas__hidden-img-box'>
            <img src="https://imgur.com/oilQEAa.jpg" alt="user" />
          </div>
          <div className='dataOffcanvas__hidden-text'>
            {props.bio.name} {props.bio.lastName}
          </div>
        </div>
        <input 
          type="text" 
          name='text' 
          className='dataOffcanvas__input' placeholder='What are your thoughts?' 
          required 
          onChange={inputChangeHandler} 
          onClick={inputClickHandler} 
          ref={inputPlace}
        />
        <div className={`hidden-btn-holders ${check ? "d-show" : "d-not-show"}`}>
          <button className='hidden-btn' onClick={cancelHandler}>
            Cancel
          </button>
          <button className='hidden-btn' onClick={respondHandler}>
            Respond
          </button>
        </div>
      </div>
      <div className='dataOffcanvas__selection'>
        <select name="posts" id="posts">
          <option value="relevant">Most relevant</option>
          <option value="recent">Most recent</option>
        </select>
      </div>
      <div className='dataOffcanvas__box'>
        <ul className='dataOffcanvas__list'>
          {
            props.item.commentArr.map((item, index) => {
              return (
                <DataItem 
                  bio={props.bio}
                  item={item} 
                  index={props.index} 
                  cIndex={index}
                  key={"z" + index} 
                />
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default DataOffcanvas
