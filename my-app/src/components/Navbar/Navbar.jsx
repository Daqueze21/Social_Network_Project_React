import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {
   return (
      <nav className={styles.nav}>
         <div className={`${styles.item}`}>
            <a className={styles.active}>Profile</a>
         </div>
         <div className={styles.item}>
            <a className={styles.active}>Message</a>
         </div>
         <div className={styles.item}>
            <a>News</a>
         </div>
         <div className={styles.item}>
            <a>Music</a>
         </div>
         <div className={styles.item}>
            <a>Settings</a>
         </div>
      </nav>
   );
}

export default Navbar;
