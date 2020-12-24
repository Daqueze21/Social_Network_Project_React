import React from 'react';
import styles from './Login.module.css';


const LoginForm = props => {
   
   return (
     <form className={styles.login_form}>
       <div>
         <input
           className={styles.form_textInput}
           type='text'
           placeholder={'login'}
           name={'login'}
           component={'input'}
         />
       </div>
       <div>
         <input
           className={styles.form_textInput}
           type='text'
           placeholder={'password'}
           name={'password'}
           component={'input'}
         />
       </div>
       <div className={styles.form_checkbox}>
         <input type={'checkbox'} name={'rememberMe'} />
         remember me
       </div>
       <div>
         <button className={styles.form_button}>Login</button>
       </div>
     </form>
   );
};



function Login(props) {
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
