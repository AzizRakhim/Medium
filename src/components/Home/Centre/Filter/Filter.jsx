import React, { useState } from 'react';
import "./Filter.scss";

function Filter(props) {
  return (
    <div className='filter filter d-flex'>
      <span className='filter__topics'>
        your topics
      </span>
      <ul className='filter__list d-flex'>
        {
          props.categories.map((item, index) => {
            return (
              <li className='filter__item' key={"b" + index}>
                <button className='filter__btn' onClick={() => props.filterHandler(item)}>
                  {item}
                </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Filter
