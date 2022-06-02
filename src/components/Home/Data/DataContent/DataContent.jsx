import React from 'react';
import "./DataContent.scss";

function DataContent(props) {
  return (
    <section className='dataContent'>
      <h2 className='dataContent__title'>
        {props.item.title}
      </h2>
      <p className='dataContent__d'>
        {props.item.smallDesc}
      </p>
      <br />
      <p className='dataContent__d'>
        {props.item.desc}
      </p>
      <div className='dataContent__img-holder'>
        <img src={props.item.img} alt={props.item.title} />
      </div>
    </section>
  )
}

export default DataContent
