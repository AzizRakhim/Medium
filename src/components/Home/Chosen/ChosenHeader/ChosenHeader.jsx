import React, { useEffect } from 'react';
import ContentItem from '../../Centre/Content/ContentItem/ContentItem';
import "../Chosen.scss";

function ChosenHeader(props) {
  return (
    <div className='chosen'>
      <div className='chosen__account'>
        <header className="chosen__header d-flex align-items-center justify-content-between">
          <div className='chosen__left d-flex align-items-center'>
            <div className='chosen__img-box'>
              <img src="https://imgur.com/oilQEAa.jpg" alt="user" />
            </div>
            <div className='chosen__info'>
              <div className='chosen__top'>
                {props.bio.name} {props.bio.lastName}
              </div>
              <div className='chosen__bottom d-flex align-items-center'>
                <p className='chosen__date'>
                  May 30
                </p>
                <div className='chosen__dot'>
                  ·
                </div>
                <p className='chosen__stories'>
                  {props.clicked.length} stories
                </p>
              </div>
            </div>
          </div>
          <div className='chosen__right'>
            <button className='chosen__dots-btn'>
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z" fill="#000" /></svg>
            </button>
          </div>
        </header>
        <h2 className='chosen__title'>
          Reading list
        </h2>
        <ul className='chosen__render-list'>
          {
            props.clicked.map((item, i) => {
              return <ContentItem
                key={"g" + i} 
                item={item} 
                save={props.save}
                setSave={props.setSave}
                clicked={props.clicked}
                setClicked={props.setClicked}  
              />;
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default ChosenHeader
