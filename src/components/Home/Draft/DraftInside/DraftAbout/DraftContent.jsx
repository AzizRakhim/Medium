import React from 'react';
import "../DraftInside.scss";

function DraftContent(props) {
  return (
    <div className='data__wrapper'>
      <h1 className='draftContent__title'>
        {props.item.big}
      </h1>
      <p className='draftContent__text'>
        {props.item.arr}
      </p>
    </div>
  )
}

export default DraftContent
