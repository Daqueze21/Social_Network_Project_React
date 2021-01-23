import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
   console.log('header', props);
   
   return (
      <header className={styles.header}>
         <div className={styles.header_logo}>
            <img
            src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/whatsapp-512.png'
            alt='logo'
            />
         </div>
         <div className={styles.header_userName}>
            {props.isAuth ? (
            <div className={styles.header_logout}>
               <NavLink to='/profile'>{props.userName}</NavLink>
               <button className={styles.header_logout_btn} onClick={props.logout}>
                  Logout
               </button>
            </div>
            ) : (
            <NavLink to='/login'>login</NavLink>
            )}
         </div>
      </header>
   );
}

export default Header;