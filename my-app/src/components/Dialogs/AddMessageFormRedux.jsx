import React from 'react';
import styles from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { maxLengthCreator, required } from '../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = props => {
   return (
      <form onSubmit={props.handleSubmit} className={styles.sendMessageForm}>
         <div>
            <Field
            component={Input}
            name={'newMessageText'}
            placeholder='Enter message'
            validate={[required, maxLength50]}
            />
         </div>
         <div>
            <button className={styles.sendMessageButton}>Send</button>
         </div>
      </form>
   );
};

const AddMessageFormRedux = reduxForm({
   form: 'dialogAddMessageFrom'
})(AddMessageForm);


export default AddMessageFormRedux;