import React, { useState } from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';

function Paginator({
   currentPage,
   onPageChange,
   totalUsersCount,
   pageSize,
   portionSize = 5
}) {
   
   let pagesCount = Math.ceil(totalUsersCount / pageSize);

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   let portionCount = Math.ceil(pagesCount / portionSize);
   let [portionNumber, setPortionNumber] = useState(1);
   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
   let rightPortionPageNumber = portionNumber * portionSize;

   return (
      <div className={styles.paginator}>
         {portionNumber > 1 && (
            <button
            className={styles.paginator_btn}
            onClick={() => {
               setPortionNumber(portionNumber - 1);
            }}>
            prev
            </button>
         )}

         {pages
         .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
         .map(p => {
            return (
               <span
                  className={cn(
                  {
                     [styles.selectedPage]: currentPage === p
                  },
                  styles.pageNumber
                  )}
                  key={p}
                  onClick={e => {
                  onPageChange(p);
                  }}>
                  {p}
               </span>
            );
         })}

         {portionCount > portionNumber && (
            <button
            className={styles.paginator_btn}
            onClick={() => {
               setPortionNumber(portionNumber + 1);
            }}>
            next
            </button>
         )}
      </div>
   );
}

export default Paginator;
