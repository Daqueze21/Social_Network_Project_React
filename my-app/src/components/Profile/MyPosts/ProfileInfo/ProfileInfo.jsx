import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader/Preloader';
import userAvatar from '../../../../assets/img/img_avatar.png';

function ProfileInfo(props) {
    console.log(props);
    
    if (!props.profile) {
      return <Preloader />;
    }

    return (
      <div className={styles.profile_wrapper}>
        <div className={styles.header_img}>
          <img
            className={styles.background_img}
            src='https://userscontent2.emaze.com/images/0d22496a-33d0-49cc-b6fd-f9abc7ca1054/d9687d33c8a5cbf0607abbb4ab8285b1.jpg'
            alt='mountain'
          />
          <img className={styles.avatar} src={userAvatar} alt='avatar' />
        </div>

        <div className={styles.profile_details}>
          <div className={styles.profile_name}>
            <h1 className={styles.name}>
                {props.profile.name}
            </h1>
            <div className={styles.company}>
                {props.profile.company.name}
            </div>
          </div>

          <div className={styles.profile_contactsList}>
            <ul>
              <li>
                <i className='fa fa-calendar' aria-hidden='true'></i> 14th May,
                1992
              </li>
              <li>
                <i className='fas fa-phone' aria-hidden='true'></i>{' '}
                {props.profile.phone}
              </li>
              <li>
                <i className='fa fa-envelope' aria-hidden='true'></i>{' '}
                  {props.profile.email}
              </li>
              <li>
                <i className='fa fa-map-marker' aria-hidden='true'></i>
                {props.profile.address.city}, {props.profile.address.street}, 
                {props.profile.address.suite}
              </li>
            </ul>
          </div>
        </div>
    </div>
    );
}

export default ProfileInfo;
