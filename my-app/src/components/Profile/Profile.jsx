import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

function Profile(props) {

   return (
      <div className={styles.profile}>
         <ProfileInfo/>

         <MyPosts posts = {props.state.posts} />
      </div>
   );
}

export default Profile;