import React from 'react';
import styles from './users.module.css';
import userAvatar from '../../assets/img/img_avatar.png';

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

         {props.users.map(u =>
            <div className={styles.userCard} key={u.id}>
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
                  <div>{u.address.streets}</div>
                  <div>{u.address.city}</div>
               </span>
            </div>
            </div>
            //userCard
         )}
      </div>
   );
}

export default Users;
