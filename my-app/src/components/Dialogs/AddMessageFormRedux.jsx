import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddMessageForm = props => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
         <Field
            component={'textarea'}
            name={'newMessageText'}
            placeholder='Enter message'
         />
         </div>
         <div>
         <button>Send</button>
         </div>
      </form>
   );
};

const AddMessageFormRedux = reduxForm({
   form: 'dialogAddMessageFrom'
})(AddMessageForm);


export default AddMessageFormRedux;