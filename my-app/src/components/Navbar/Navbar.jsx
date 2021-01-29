import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {
   return (
     <nav className={styles.nav}>
       <div className={`${styles.item}`}>
         <NavLink to='/Profile' activeClassName={styles.active}>
           Profile
         </NavLink>
       </div>
       <div className={styles.item}>
         <NavLink to='/Dialogs' activeClassName={styles.active}>
           Message
         </NavLink>
       </div>
       <div className={styles.item}>
         <NavLink to='/Users' activeClassName={styles.active}>
           Users
         </NavLink>
       </div>
       <div className={styles.item}>
         <a href='/#'>Music</a>
       </div>
       <div className={styles.item}>
         <a href='/#'>Settings</a>
       </div>
     </nav>
   );
}

export default Navbar;
