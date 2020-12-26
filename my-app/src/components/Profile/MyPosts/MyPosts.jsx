import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import AddNewPostFormRedux from './AddNewPostFormRedux';

function MyPosts(props) {
  let postsElements = props.posts.map(p => {
    return <Post message={p.body} likesCount={p.userId} key={p.id} />;
  });

  function addNewPost(values) {
    props.addPost(values.newPostText);
  }

  return (
    <div className={styles.postsBlock}>
      <h2>MyPosts</h2>

      <AddNewPostFormRedux onSubmit={addNewPost} />

      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
