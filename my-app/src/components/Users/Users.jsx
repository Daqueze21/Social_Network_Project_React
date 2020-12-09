import React from 'react';
import styles from './users.module.css';
import userAvatar from '../../assets/img/img_avatar.png';

function Users(props) {
   
   return (
      <div className={styles.users}>
         {props.users.map(u => (
            <div className={styles.userCard}>
            <div className={styles.userAvatar}>
               <div className={styles.img}>
                  <img src={userAvatar} alt='avatar' />
               </div>
               <div>
                  <button onClick={() => console.log('follow')}>Follow</button>
               </div>
            </div>
            <div>
               <span>
                  <div>{u.name}</div>
                  <div>{u.username}</div>
               </span>
               <span>
                  <div>{u.streets}</div>
                  <div>{u.city}</div>
               </span>
            </div>
            </div>
         ))}
      </div>
   );
}

export default Users;
