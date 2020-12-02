import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {

   return (
      <div className={styles.profile}>
         <ProfileInfo/>

         <MyPostsContainer posts = {props.state.posts} />
      </div>
   );
}

export default Profile;
