import React from 'react';
import styles from './users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

function Users({currentPage, onPageChange, totalUsersCount, pageSize, users, follow, unfollow,  ...props}) {

   return (
      <div className={styles.users}>
         <Paginator
            currentPage={currentPage}
            onPageChange={onPageChange}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
         />

         <div className={styles.list}>
            {users.map(u => (
            <User user={u} unfollow={unfollow} follow={follow} key={u.id} />
            ))}
         </div>
      </div>
   );
}

export default Users;
