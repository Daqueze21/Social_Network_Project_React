import React from 'react';
import styles from './users.module.css';
import userAvatar from '../../assets/img/img_avatar.png';

function Users(props) {
   return (
      <div className={styles.users}>
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
                  <div>name</div>
                  <div>username</div>
               </span>
               <span>
                  <div>streets</div>
                  <div>city</div>
               </span>
            </div>
         </div>
      </div>
   );
}

export default Users;
