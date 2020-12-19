import React from 'react';
import style from './Post.module.css';
import userAvatar from '../../../../assets/img/img_avatar.png';

function Posts(props) {

   return (
      <div className={style.post_card}>
         <div className={style.post_header}>
            <div className={style.post_img}>
            <img className='avatar' src={userAvatar} alt='avatar' />
            </div>
            <div className={style.post_body}>{props.message}</div>
         </div>
         <div>
            <span>like: {props.likesCount}</span>/<span>dislike</span>
         </div>
      </div>
   );
}

export default Posts;
