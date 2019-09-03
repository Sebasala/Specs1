import React from 'react';
import PropTypes from 'prop-types';
import { Prompt } from 'react-router-dom';
import RenderInputComponent from '../fields/RenderInputComponent';
import RenderMultiSelectComponent from '../fields/RenderMultiSelectComponent';
import { Field, reduxForm } from 'redux-form';
import { setPropsAsInitial } from '../../helpers/setPropsAsInitial';

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Campo requerido';
  }
  if (!values.lastName) {
    errors.lastName = 'Campo requerido';
  }
  if (!values.email) {
    errors.email = 'Campo requerido';
  }
  return errors;
}

const validatePassword = value => (
  !/(?=.{6,})/i.test(value) && 'La contraseña debe tener al menos 6 caracteres'
);

const validateEmail = value => (
  !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(value) &&
  'Formato de correo inválido'
);

const validatePermissionLevel = value => (
  Number(value) !== 1 && Number(value) !== 8 &&
  '1 - USER, 8 = ADMIN'
);

const UserFormComponent = ({ handleSubmit, submitting, pristine, submitSucceeded, onBack, newUser, accounts, userAccounts, onSelectChange }) => {
  return (
    <div className='user-form-component'>
      <header>
        <img className='logo' src='../images/logospecs.png' alt='Specs' />
        <h1>USUARIO</h1>
      </header>
      <form className="light-bg" onSubmit={handleSubmit}>
        <div className='field'>
          <Field name='firstName' component={RenderInputComponent} type='text' placeholder='Nombre' required></Field>
        </div>
        <div className='field'>
          <Field name='lastName' component={RenderInputComponent} type='text' placeholder='Apellido' required></Field>
        </div>
        <div className='field'>
          <Field name='email' component={RenderInputComponent} type='text' placeholder='Correo' required validate={validateEmail} ></Field>
        </div>
        <div className='field'>
          <Field name='password' component={RenderInputComponent} type='password' placeholder='Contraseña' required={!!newUser} validate={validatePassword} ></Field>
        </div>
        <div className='numeric-field'>
          <Field name='permissionLevel' component={RenderInputComponent} type='number' placeholder='Nivel de permiso' min={1} validate={validatePermissionLevel}></Field>
        </div>
        <div className='select-field'>
          <Field name='userAccounts' component={RenderMultiSelectComponent} placeholder='Campaña' selectedValue={userAccounts} onSelectChange={onSelectChange} >
            {accounts.map(account => (
              <option key={account.id} value={account.id}>{account.name}</option>
            ))}
          </Field>
        </div>
        <div className='container--buttons'>
          <button type='submit' disabled={submitting || pristine} className='button'>Guardar</button>
          <button type='button' disabled={submitting} onClick={onBack}>Cancelar</button>
        </div>
        <Prompt when={!pristine && !submitSucceeded} message={'Los datos modificados se perderán al continuar la acción'}></Prompt>
      </form>
    </div>
  );
};

UserFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const UserForm = reduxForm({ form: 'UserForm', validate })(UserFormComponent);

export default setPropsAsInitial(UserForm);