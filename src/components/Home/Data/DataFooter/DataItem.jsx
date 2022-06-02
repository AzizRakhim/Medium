import React, { useState, useRef } from 'react';
import "./DataFooter.scss";
import obj from '../../../../Objects';

function DataItem(props) {
  let [reply, setReply] = useState(false);
  let [keepIt, setKeepIt] = useState("");
  const inputPlace = useRef(null);

  const replyHandler = () => {
    setReply(!reply);

    inputPlace.current.value = "";
  }

  const deletePlz = () => {
    setReply(false);

    inputPlace.current.value = "";
  }

  const replyReplyHandler = (e) => {
    setKeepIt(e.target.value);
  }

  const saveSaveHandler = () => {
    obj[props.index].commentArr[props.cIndex].commentArrs.push({
      sDesc: keepIt
    });

    setReply(false);

    inputPlace.current.value = "";
  }

  return (
    <li className='dataOffcanvas__item'>
      <div className='dataOffcanvas__item-top d-flex align-items-center justify-content-between'>
        <div className='dataOffcanvas__info d-flex align-items-center'>
          <div className='dataOffcanvas__img-box'>
            <img src={props.item.commentPic} alt={props.item.commentName} />
          </div>
          <div className='dataOffcanvas__user'>
            <div className='dataOffcanvas__name'>
              {props.item.commentName}
            </div>
            <div className='dataOffcanvas__time'>
              4 months ago
            </div>
          </div>
        </div>
        <button className='dataOffcanvas__dots'>
          <svg className="overflow-dots-filled-25px_svg__svgIcon-use" width={25} height={25}><path d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z" fillRule="evenodd" /></svg>
        </button>
      </div>
      <div className='dataOffcanvas__item-middle'>
        {props.item.commentDesc}
      </div>
      <div className='dataOffcanvas__item-footer d-flex align-items-center justify-content-between'>
        <div className='dataOffcanvas__item-bottom-left'>
          <div className='dataOffcanvas__claps-box d-flex align-items-center'>
            <div className='dataOffcanvas__claps'>
              <svg width={24} height={24} viewBox="0 0 24 24" aria-label="clap"><path fillRule="evenodd" clipRule="evenodd" d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z" /></svg>
            </div>
            <div className='dataOffcanvas__likes'>
              {props.item.commentLike}
            </div>
          </div>
        </div>
        <div className='dataOffcanvas__item-bottom-right'>
          <button className='dataOffcanvas__reply-btn' onClick={replyHandler}>
            Reply
          </button>
        </div>
      </div>
      <div className={`reply-box ${reply ? "reply-show" : "reply-hide"}`}>
        <div className='reply-inside-box'>
          <div className='reply-top'>
            <input
              type="text"
              name='text'
              className='reply-input'
              required
              placeholder={`Replying to ${props.item.commentName}`}
              onChange={replyReplyHandler}
              ref={inputPlace}
            />
          </div>
          <div className='reply-bottom d-flex align-items-center justify-content-between'>
            <div className='reply-shrift d-flex align-items-center'>
              <div className='reply-bold'>
                <svg width={21} height={21}><path d="M10.3 18H4.4l.1-.9.8-.12c.55-.11.78-.23.78-.45V5.37c0-.22-.11-.34-.9-.45H4.5l-.11-.9h6.25c4.02 0 5.58 1.24 5.58 3.14 0 1.9-1.78 3.12-3.79 3.46v.11c2.7.34 4.25 1.56 4.25 3.57 0 2.35-2 3.7-6.37 3.7h.02-.02zM9.98 5.02h-1v5.47h1.23c1.79 0 2.79-1.23 2.79-2.68 0-1.69-1-2.8-3-2.8v.01zm-.22 6.36h-.78V17l1.22.22h.22c1.67 0 3.01-1 3.01-2.8 0-2.11-1.56-3-3.69-3h.02z" fillRule="evenodd" /></svg>
              </div>
              <div className='reply-italic'>
                <svg width={21} height={21}><path d="M9.85 18.04c-.54 0-2.03-.64-1.92-.85L9.95 9.5l-.64-.22-1.38 1.5-.43-.43c.53-1.17 1.7-2.67 2.77-2.67.54 0 2.24.54 2.14.86l-2.14 7.78.54.22 1.6-1.07.42.43c-.64 1.06-1.92 2.13-2.98 2.13zm2.34-11.73c-.96 0-1.38-.64-1.38-1.39 0-1.07.74-1.92 1.49-1.92.85 0 1.39.64 1.39 1.5-.11 1.06-.75 1.8-1.5 1.8z" fillRule="evenodd" /></svg>
              </div>
            </div>
            <div className="hidden-btn-holders">
              <button className='hidden-btn' onClick={deletePlz}>
                Cancel
              </button>
              <button className='hidden-btn' onClick={saveSaveHandler}>
                Respond
              </button>
            </div>
          </div>
        </div>
      </div>
      {
        props.item.commentArrs < 0 ? "" : props.item.commentArrs !== undefined ?
          props.item.commentArrs.map((item, idx) => {
            return (
              <div className='inside-reply-me' key={"o" + idx}>
                <div className='dataOffcanvas__item-top d-flex align-items-center justify-content-between'>
                  <div className='dataOffcanvas__info d-flex align-items-center'>
                    <div className='dataOffcanvas__img-box'>
                      <img src="https://imgur.com/oilQEAa.jpg" alt="user" />
                    </div>
                    <div className='dataOffcanvas__user'>
                      <div className='dataOffcanvas__name'>
                        {props.bio.name} {props.bio.lastName}
                      </div>
                      <div className='dataOffcanvas__time'>
                        About 1 hour ago
                      </div>
                    </div>
                  </div>
                  <button className='dataOffcanvas__dots'>
                    <svg className="overflow-dots-filled-25px_svg__svgIcon-use" width={25} height={25}><path d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z" fillRule="evenodd" /></svg>
                  </button>
                </div>
                <div className='dataOffcanvas__item-middle'>
                  {item.sDesc}
                </div>
                <div className='dataOffcanvas__item-footer d-flex align-items-center justify-content-between'>
                  <div className='dataOffcanvas__item-bottom-left'>
                    <div className='dataOffcanvas__claps-box d-flex align-items-center'>
                      <div className='dataOffcanvas__claps'>
                        <svg width={24} height={24} viewBox="0 0 24 24" aria-label="clap"><path fillRule="evenodd" clipRule="evenodd" d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z" /></svg>
                      </div>
                      <div className='dataOffcanvas__likes'>
                        0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
          : ""
      }

    </li>
  )
}

export default DataItem
