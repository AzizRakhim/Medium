import React from 'react'
import Filter from './Filter/Filter';
import "./Centre.scss";
import Following from './Following/Following';
import Content from './Content/Content';

function Centre(props) {
  return (
    <div className='centre'>
      <Filter 
        obj={props.obj} 
        categories={props.categories} 
        filterHandler={props.filterHandler}
      />
      <Following />
      <Content 
        obj={props.obj} 
        items={props.items}
        save={props.save}
        setSave={props.setSave}
        clicked={props.clicked}
        setClicked={props.setClicked}
        correct={props.correct}
        setCorrect={props.setCorrect}
      />
    </div>
  )
}

export default Centre
