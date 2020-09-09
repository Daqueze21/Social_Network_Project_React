import React from 'react';
import styles from './Header.module.css';

function Header() {
   return (
      <header className={styles.header}>
         <img
            src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/whatsapp-512.png"
            alt="logo"
         />
      </header>
   );
}

export default Header;