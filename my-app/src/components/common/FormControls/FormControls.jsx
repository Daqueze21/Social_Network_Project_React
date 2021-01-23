import React from 'react';
import styles from './FormControls.module.css';
import { Field } from 'redux-form';

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>
        <input {...input} {...props}></input>
      </div>
      {hasError && meta.error && <span>{meta.error}</span>}
    </div>
  );
};

export const CreateField = (
  type,
  placeholder,
  name,
  component,
  validate,
  className = '',
  text = ''
) => (
  <div >
    <Field 
      className={className}
      type={type}
      placeholder={placeholder}
      name={name}
      component={component}
      validate={validate}
    />
    {text}
  </div>
);