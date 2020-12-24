import React from 'react';
import styles from './Login.module.css';
import { Field, reduxForm } from 'redux-form';


const LoginForm = props => {
   const { handleSubmit } = props;

   return (
      <form onSubmit={handleSubmit}  className={styles.login_form}>
         <div>
            <Field
            className={styles.form_textInput}
            type='text'
            placeholder={'login'}
            name={'login'}
            component={'input'}
            />
         </div>
         <div>
            <Field
            className={styles.form_textInput}
            type='text'
            placeholder={'password'}
            name={'password'}
            component={'input'}
            />
         </div>
         <div className={styles.form_checkbox}>
            <Field type={'checkbox'} name={'rememberMe'} component={'input'} />
            remember me
         </div>
         <div>
            <button className={styles.form_button}>Login</button>
         </div>
      </form>
   );
};

const LoginReduxForm = reduxForm({
   form: 'login'
})(LoginForm);

function Login(props) {
   const onSubmit = formData => {
      console.log(formData);
   };

   return (
      <div className={styles.login}>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   );
}

export default Login;
