import React from 'react';
import "./Following.scss";

function Following() {
  return (
    <div className='following'>
      <ul className='following__list d-flex'>
        <li className='following__item'>
          <button className='following__btn'>
            Following
          </button>
        </li>
        <li className='following__item'>
          <button className='following__btn'>
            Recommended
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Following
