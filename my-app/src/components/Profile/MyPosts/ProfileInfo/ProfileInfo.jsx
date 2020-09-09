import React from 'react';
import styles from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div className={styles.profile}>
            <div>
                <img
                    src="https://userscontent2.emaze.com/images/0d22496a-33d0-49cc-b6fd-f9abc7ca1054/d9687d33c8a5cbf0607abbb4ab8285b1.jpg"
                    alt="mountain"
                />
            </div>

            <div className={styles.descriptionBlock}>
                avatar +desc
            </div>

        </div>
    );
}

export default ProfileInfo;
