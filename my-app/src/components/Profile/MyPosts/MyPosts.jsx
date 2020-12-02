import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
  console.log(props);
  
  let postsElements = props.posts.map(p => {
    return <Post message={p.message} likesCount={p.likes} key={p.id} />;
  });

  function onPostSendClick() {
    console.log('send post');
  }

  return (
    <div className={styles.postsBlock}>
      <h2>MyPosts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button onClick={onPostSendClick}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
