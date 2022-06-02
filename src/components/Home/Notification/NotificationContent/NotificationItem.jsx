import React from 'react';
import "../../Save/Save.scss";
import "../Notification.scss";

function NotificationItem() {
  return (
    <div className='notification'>
      <div className='save__top'>
        <div className='save__margin d-flex align-items-center justify-content-between'>
          <div className='save__title'>
            Notifications
          </div>
        </div>
        <div className='save__filter'>
          <ul className='save__list d-flex'>
            <li className="save__item">
              All
            </li>
            <li className="save__item">
              Responses
            </li>
          </ul>
        </div>
        <div className='notification-bottom d-flex align-items-center justify-content-between'>
          <p className='notification-text'>
            You're all caught up.
          </p>
          <p className='notification-text'>
            Your stats
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotificationItem

