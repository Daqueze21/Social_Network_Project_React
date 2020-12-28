import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './MyPosts.module.css';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Input } from '../../common/FormControls/FormControls';

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = props => {
   return (
      <form onSubmit={props.handleSubmit} className={styles.postInput}>
         <Field component={Input} name={'newPostText'} placeholder='Enter post' validate = {[required, maxLength10]}/>

         <button className={styles.postInputButton}>Add post</button>
      </form>
   );
};

const AddNewPostFormRedux = reduxForm({
  form: 'userAddNewPostForm'
})(AddNewPostForm);

export default AddNewPostFormRedux;