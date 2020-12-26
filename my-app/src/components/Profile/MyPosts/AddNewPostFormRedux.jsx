import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './MyPosts.module.css';

const AddNewPostForm = props => {
   return (
      <form onSubmit={props.handleSubmit} className={styles.postInput}>
         <Field
         component={'input'}
         name={'newPostText'}
         placeholder='Enter post'
         />

         <button className={styles.postInputButton}>Add post</button>
      </form>
   );
};

const AddNewPostFormRedux = reduxForm({
  form: 'userAddNewPostForm'
})(AddNewPostForm);

export default AddNewPostFormRedux;