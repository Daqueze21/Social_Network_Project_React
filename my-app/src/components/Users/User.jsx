import React from 'react';
import styles from './users.module.css';
import userAvatar from '../../assets/img/img_avatar.png';
import { NavLink } from 'react-router-dom';

function User({ user, follow, unfollow }) {
   return (
      <div className={styles.userCard} key={user.id}>
         <div className={styles.avatar}>
         <div>
            <NavLink to={`/profile/${user.id}`}>
               <img className={styles.avatarImg} src={userAvatar} alt='avatar' />
            </NavLink>
         </div>
         <div a>
            {user.followed ? (
               <button
               className={styles.avatar_btn}
               onClick={() => unfollow(user.id)}>
               Unfollow
               </button>
            ) : (
               <button
               className={styles.avatar_btn}
               onClick={() => follow(user.id)}>
               Follow
               </button>
            )}
         </div>
         </div>
         <div className={styles.user_content}>
         <div className={styles.user_name}>{user.name}</div>
         <div className={styles.user_email}>{user.email}</div>
         <div className={styles.user_city}>{user.address.city}</div>
         </div>
      </div>
   );
}

export default User;
