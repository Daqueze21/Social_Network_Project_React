import React from 'react';
import style from './Post.module.css';

function Posts(props) {
   
   return (
      <div className={style.item}>
         <img
            className="avatar"
            src="https://www.netclipart.com/pp/m/135-1353105_img-avatar-2-png-illustration.png" alt = "avatar"
         />
         {props.message}
         <div>
            <span>like {props.likesCount}</span>
            <span>dislike</span>
         </div>
      </div>
   );
}

export default Posts;
