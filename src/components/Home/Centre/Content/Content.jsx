import React from 'react';
import "./Content.scss";
import ContentItem from './ContentItem/ContentItem';

function Content(props) {
  return (
    <div className='content'>
      <ul className='content__list'>
        {
          props.items.map((item, index) => (
            <ContentItem 
              key={"a" + index} 
              item={item} 
              save={props.save}
              setSave={props.setSave}
              clicked={props.clicked}
              setClicked={props.setClicked}
              correct={props.correct}
              setCorrect={props.setCorrect}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default Content
