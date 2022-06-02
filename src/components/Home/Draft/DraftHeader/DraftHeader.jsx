import React from 'react';
import { Link } from 'react-router-dom';
import "../Draft.scss";
import DraftPublish from './DraftPublish';

function DraftHeader(props) {
  return (
    <div className='draft'>
      <div className='draft__container'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='draft__left'>
            <h1 className='draft__title'>
              Your stories
            </h1>
          </div>
          <div className='draft__right d-flex align-items-center'>
            <Link to="/home/story" className='draft__btn'>
              Write a story
            </Link>
            <button className='draft__btn'>
              Import a story
            </button> 
          </div>
        </div>
        <div className='draft__list'>
          <ul className='draft__real-list d-flex'>
            <li className="draft__item">
              Drafts
            </li>
            <li className="draft__item">
              Published {props.inputSave.length }
            </li>
            <li className="draft__item">
              Responses
            </li>
          </ul>
        </div>
        <ul className='draft__publish-list'>
          {
            props.inputSave.map((item, index) => {
              return <DraftPublish 
              key={"o"+index} 
              inputSave={props.inputSave} 
              item={item}
            />
            })
          }
          
        </ul>
      </div>
    </div>
  )
}

export default DraftHeader
