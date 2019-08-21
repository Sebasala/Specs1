import React from 'react';
import PropTypes from 'prop-types';
import { Prompt } from 'react-router-dom';
import RenderInputComponent from '../fields/RenderInputComponent';
import { Field, reduxForm } from 'redux-form';
import { setPropsAsInitial } from '../../helpers/setPropsAsInitial';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.firstName = 'Campo requerido';
  }
  return errors;
}

const AccountFormComponent = ({ handleSubmit, submitting, pristine, submitSucceeded, onBack, onLogoChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='field'>
        <Field name='name' component={RenderInputComponent} type='text' placeholder='Nombre' required></Field>
      </div>
      <div className='field'>
        <input type='file' name='logo' onChange={onLogoChange}/>
        {/*<Field name='logo' component={RenderInputComponent} type='file' placeholder='Logo'></Field>*/}
      </div>
      <button type='submit' disabled={submitting} className='button'>Guardar</button>
      <button type='button' disabled={submitting} onClick={onBack}>Cancelar</button>
      <Prompt when={!pristine && !submitSucceeded} message={'Los datos modificados se perderán al continuar la acción'}></Prompt>
    </form>
  );
};

AccountFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const AccountForm = reduxForm({ form: 'AccountForm', validate })(AccountFormComponent);

export default setPropsAsInitial(AccountForm);