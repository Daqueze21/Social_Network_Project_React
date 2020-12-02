import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
  
  let postsElements = props.posts.map(p => {
    return <Post message={p.message} likesCount={p.likes} key={p.id} />;
  });

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={styles.postsBlock}>
      <h2>MyPosts</h2>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
