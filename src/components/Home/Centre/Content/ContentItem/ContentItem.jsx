import { Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../../Save/Modal/Modal';
import "../Content.scss";
import ContentModal from '../ContentModal/ContentModal';

function ContentItem(props) {
  let [check, setCheck] = useState(false);
  let temp = [...new Set(props.clicked.map(item => item))];
  let [isTrue, setIsTrue] = useState(false);
  let [correct, setCorrect] = useState(false);
  
  useEffect(() => {
    props.setClicked(temp);
  }, []);

  const addHandler = (item) => {
    setCheck(!check);
    props.setClicked([...props.clicked, item]);
    setCorrect(true);
  }

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
      <li className='content__item'>
        <Link to={`/home/${props.item.id}`} className="tdn">
          <div className='content__top d-flex align-items-center'>
            <div className='content__avatar-box'>
              <img src={props.item.avatar} alt="avatar" />
            </div>
            <div className='content__name-box d-flex align-items-center'>
              <div className='content__name'>
                {props.item.author}
              </div>
              <div className='content__date-box'>
                <span className='content__dot'>
                  ·
                </span>
                <span className='content__date'>
                  {props.item.online}
                </span>
                <svg className="pa pb pc" width={15} height={15} viewBox="0 0 15 15" aria-label="Member only content"><path d="M7.44 2.32c.03-.1.09-.1.12 0l1.2 3.53a.29.29 0 0 0 .26.2h3.88c.11 0 .13.04.04.1L9.8 8.33a.27.27 0 0 0-.1.29l1.2 3.53c.03.1-.01.13-.1.07l-3.14-2.18a.3.3 0 0 0-.32 0L4.2 12.22c-.1.06-.14.03-.1-.07l1.2-3.53a.27.27 0 0 0-.1-.3L2.06 6.16c-.1-.06-.07-.12.03-.12h3.89a.29.29 0 0 0 .26-.19l1.2-3.52z" /></svg>
              </div>
            </div>
          </div>
        </Link>  
        <div className='content__data'>
          <div className='content__desc-bo d-flex'>
            <div className='content__data-box col-9'>
              <Link to={`/home/${props.item.id}`} className="tdn">
                <div>
                  <h2 className='content__title'>
                    {props.item.title}
                  </h2>
                  <p className='content__text'>
                    {props.item.smallDesc}
                  </p>
                </div>
              </Link>
              <div className='content__genre-box d-flex align-items-center justify-content-between'>
                <div className='content__genre-left d-flex align-items-center'>
                  <button className='content__genre'>
                    {props.item.category}
                  </button>
                  <div className='content__time'>
                    {props.item.read} min read
                  </div>
                  <div className='content__dot'>
                    ·
                  </div>
                  <div className='content__genre-desc'>
                    Popular on Medium
                  </div>  
                </div>
                <div className='content__genre-right d-flex align-items-center'>
                  <div className='content__save position-relative'>
                    <button className='content__save-btn' onClick={() => addHandler(props.item)}>
                      {correct ? <svg width={24} height={24} viewBox="0 0 24 24" fill="none" className="vv"><path d="M7.5 3.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2h-9z" fill="#000" /></svg> : <svg width={24} height={24} viewBox="0 0 24 24" fill="none" className="qt"><path d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z" fill="#000" /></svg>}
                    </button>
                    <ContentModal 
                      save={props.save} 
                      check={check} 
                      modalHandler={modalHandler}
                      setSave={props.setSave}
                      item={props.item}
                    />
                  </div>
                  <div className='content__dots'>
                    <button className='content__dots-btn'>
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z" fill="#000" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='content__img-box col-3'>
              <img src={props.item.img} alt={props.item.title} />
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export default ContentItem
