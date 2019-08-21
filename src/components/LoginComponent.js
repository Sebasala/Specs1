import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import RenderInputComponent from './fields/RenderInputComponent';
// import './css/style.css';

// En el parametro values van todos los campos del formulario
const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'El campo username es requerido';
  }
  if (!values.password) {
    errors.password = 'El campo password es requerido';
  }
  return errors;
};

class LoginComponent extends Component {

  render(){
    const { handleSubmit } = this.props;
    return (
      <div className='login'>
        <div className='container'>
          <img className='logo' src='images/logospecs.png' alt='Specs' />
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <Field name='username' component={RenderInputComponent} type='text' placeholder='Username' withFocus required></Field>
            <Field name='password' component={RenderInputComponent} type='password' placeholder='Password' required></Field>
            <input type='submit' value='ENTRAR' />
          </form>
        </div>
      </div>
    );
  }
}

const LoginForm = reduxForm({ form: 'Login', validate })(LoginComponent);

export default setPropsAsInitial(LoginForm);