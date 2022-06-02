import React, { useState } from 'react';
import Centre from './Centre/Centre';
import Navbar from './Left/Navbar';
import Right from './Right/Right';
import obj from '../../Objects';

function Home(props) {
  let [items, setItems] = useState(obj);
  let categories = ["All", ...new Set(obj.map(item => item.category))];

  const filterHandler = (type) => {
    if(type === "All"){
      setItems(obj);
      return
    } 

    const newItems = obj.filter(item => item.category === type);

    setItems(newItems);
  }

  return (
    <div className='container d-flex'>
      <Navbar />
      <Centre 
        obj={obj} 
        categories={categories}
        filterHandler={filterHandler}
        items={items}
        save={props.save}
        setSave={props.setSave}
        clicked={props.clicked}
        setClicked={props.setClicked}correct={props.correct}
        setCorrect={props.setCorrect}
      />
      <Right />
    </div>
  )
}

export default Home
