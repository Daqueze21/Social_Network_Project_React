import React from 'react';
import styles from './users.module.css';
import userAvatar from '../../assets/img/img_avatar.png';
import { NavLink } from 'react-router-dom';

function Users(props) {
   let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
   }

   return (
      <div className={styles.users}>
         <div className={styles.pageNumbers}>
            {pages.map(p => {
            return (
               <span
                  className={props.currentPage === p && styles.selectedPage}
                  key={p}
                  onClick={e => {
                  props.onPageChange(p);
                  }}>
                  {p}
               </span>
            );
            })}
         </div>

         {props.users.map(
            u => (
            <div className={styles.userCard} key={u.id}>
               <div className={styles.userAvatar}>
                  <NavLink to={`/profile/${u.id}`}>
                     <div className={styles.img}>
                        <img src={userAvatar} alt='avatar' />
                     </div>
                  </NavLink>

                  <div>
                  {u.followed ? (
                     <button onClick={() => props.unfollow(u.id)}>
                        Unfollow
                     </button>
                  ) : (
                     <button onClick={() => props.follow(u.id)}>Follow</button>
                  )}
                  </div>
               </div>
               <div>
                  <span>
                  <div>{u.name}</div>
                  <div>{u.username}</div>
                  </span>
                  <span>
                  <div>{u.address.streets}</div>
                  <div>{u.address.city}</div>
                  </span>
               </div>
            </div>
            )
            //--< userCard end>--
         )}
      </div>
   );
}

export default Users;
