import React from 'react';
import styles from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../utils/validators/validators';
import { Input } from '../common/FormControls/FormControls';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/auth-reducer';

const maxLength25 = maxLengthCreator(25);
const maxLength15 = maxLengthCreator(15);

const LoginForm = props => {
   const { handleSubmit } = props;

   return (
      <form onSubmit={handleSubmit} className={styles.login_form}>
         
         <Field
         className={styles.form_textInput}
         type='text'
         placeholder={'login'}
         name={'login'}
         component={Input}
         validate={[required, maxLength25]}
         />
         
         <Field
         className={styles.form_textInput}
         type='text'
         placeholder={'password'}
         name={'password'}
         component={Input}
         validate={[required, maxLength15]}
         />
         
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
      props.login(formData.login, formData.password);
   };

   if (props.isAuth) {
      return <Redirect to={'profile'} />;
   }
   return (
      <div className={styles.login}>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   );
}

const mapStateToProps = state => ({
   isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {
   login,
   logout
})(Login);

