import React from 'react';
import preloader from '../../../assets/img/oval.svg';
import styles from './preloader.module.css';

function Preloader(props) {
  return (
    <div className={styles.preloaderWrapper}>
      <img src={preloader} style={{ width: '60px'}} />
    </div>
  );
}

export default Preloader;
