import React from 'react';
import MyPosts from './MyPosts';

function MyPostsContainer(props) {

    return <MyPosts posts={props.posts} />;
}

export default MyPostsContainer;
