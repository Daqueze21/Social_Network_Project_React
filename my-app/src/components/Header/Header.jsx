import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
   return (
      <header className={styles.header}>
         <div className={styles.header_logo}>
            <img
            src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/whatsapp-512.png'
            alt='logo'
            />
         </div>
         <div className={styles.header_login}>
            <NavLink to='/login'>login</NavLink>
         </div>
      </header>
   );
}

export default Header;