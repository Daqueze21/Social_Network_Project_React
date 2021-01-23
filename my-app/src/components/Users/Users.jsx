import React from 'react';
import styles from './users.module.css';
import User from './User';

function Users({currentPage, onPageChange, totalUsersCount, pageSize, users, follow, unfollow,  ...props}) {
   let pageCount = Math.ceil(totalUsersCount / pageSize);
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
                     className={currentPage === p && styles.selectedPage}
                     key={p}
                     onClick={e => {
                     onPageChange(p);
                     }}>
                     {p}
                  </span>
               );
            })}
         </div>

         <div className={styles.list}>
            {users.map(u => (
            <User user={u} unfollow={unfollow} follow={follow} key={u.id} />
            ))}
         </div>

      </div>
   );
}

export default Users;
