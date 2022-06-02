import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import "../Save.scss";

function SaveList(props) {
  return (
    <>
      <div className='save__bottom'> 
        <div className='save__trigger d-flex'>
          <div className='save__left col-6'>
            <h2 className='save__desc'>
              Create a list to easily organize and share stories
            </h2>
            <button className='save__add-btn'>
              Start a list
            </button>
          </div>
          <div className='save__right col-6 d-flex'>
            <div className='save__circle col-10'>
              <svg width={283} height={174} viewBox="0 0 283 174" fill="none"><circle opacity="0.15" cx="141.5" cy="87.5" r="141.5" fill="#E8F3E8" /><circle cx="141.5" cy="87.5" r="29.5" fill="#fff" /><path fillRule="evenodd" clipRule="evenodd" d="M148.71 74.32a.66.66 0 0 1 1.31.07v3.28h3.28a.66.66 0 1 1 0 1.3h-3.28v3.29a.66.66 0 1 1-1.3 0v-3.28h-3.29a.66.66 0 0 1 0-1.31h3.28v-3.28-.07zm-13.77 4c-.72 0-1.3.59-1.3 1.31v17.68l7.46-5.74a.66.66 0 0 1 .8 0l7.47 5.74V87.5a.66.66 0 1 1 1.3 0v11.14a.66.66 0 0 1-1.05.52l-8.12-6.24-8.12 6.24a.65.65 0 0 1-1.06-.52v-19a2.62 2.62 0 0 1 2.62-2.63h5.25a.66.66 0 0 1 0 1.31h-5.25z" fill="#0F730C" /></svg>
            </div>
            <div className='save__add col-2'>
              <button className='save__x-btn'>
                <svg width={19} height={19} viewBox="0 0 19 19" className="pq"><path d="M13.8 4.6L9.5 8.89 5.21 4.6l-.61.61 4.29 4.3-4.29 4.28.61.62 4.3-4.3 4.28 4.3.62-.62-4.3-4.29 4.3-4.29" fillRule="evenodd" /></svg>
              </button>
            </div>
          </div>
        </div>
        {
          props.save.map((item, index) => {
            return (
              <Link to="chosen" className='tdn' key={"c" + index}>
                <div className='save__box d-flex'>
                  <div className='save__box-left'>
                    <h2 className='save__box-title'>
                      {item.name}
                    </h2>
                    <div className='save__box-btn-box'>
                      <div className='save__box-btn-real-box'>
                        <button className='save__box-btn'>
                          View list
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='save__box-right d-flex'>
                    <div className='save__box-one save__box-all'>
                      <div className='save__box-grey'></div>
                    </div>
                    <div className='save__box-two save__box-all'>
                      <div className='save__box-grey'></div>
                    </div>
                    <div className='save__box-three save__box-all'>
                      <div className='save__box-grey'></div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </>
  )
}

export default SaveList
