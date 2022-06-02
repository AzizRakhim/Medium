import React from 'react';
import Navbar from '../Left/Navbar';
import Right from '../Right/Right';
import "./Notification.scss";
import "../Save/Save.scss";
import NotificationItem from './NotificationContent/NotificationItem';

function Notification() {
  return (
    <div className='container d-flex'>
      <Navbar />
      <NotificationItem />
      <Right />
    </div>
  )
}

export default Notification
