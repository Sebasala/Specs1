import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { setPropsAsInitial } from './../../helpers/setPropsAsInitial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import RenderInputComponent from './../fields/RenderInputComponent';
import SidebarComponent from './../SidebarComponent';
import './../css/style.css';

const validate = values => {
  const errors = {};
  if (values.text === ``) {
    errors.text = 'Campo requerido';
  }
  if (values.title === ``) {
    errors.title = 'Campo requerido';
  }
  if (values.description === ``) {
    errors.description = 'Campo requerido';
  }
  return errors;
}

const toNumber = value => value && Number(value);
const onlyPositive = (value, values) => value && value >= 0 ? value : 0;
const isNumber = value => (
  isNaN(Number(value)) && 'El campo debe ser numérico'
);

class NewSpecCreativeDetailComponent extends Component {

  render(){
    const { medium, adFormat, creative, handleSubmit, onBack, onImageChange } = this.props;
    return (
      <div className='crear'>
        <div className='wrapper'>
          <div className='container'>
            <header className='main'>
              <ul className='actions'>
                <li>
                  <Link to='#' onClick={onBack}>
                    <FontAwesomeIcon icon='chevron-left' /> ATRAS
                  </Link>
                </li>
              </ul>
              <img className='logo' src='/images/logospecs.png' alt='Specs' />
            </header>
            <form onSubmit={handleSubmit}>
              <div className='field'>
                <Field name='name' component={RenderInputComponent} type='text' placeholder='Nombre de creativo' required></Field>
              </div>
              <div className='numeric-field'>
                <Field name='text' component={RenderInputComponent} type='number' placeholder='Longitud de texto' min={0}
                  parse={toNumber} validate={isNumber} normalize={onlyPositive} required></Field>
              </div>
              <div className='numeric-field'>
                <Field name='title' component={RenderInputComponent} type='number' placeholder='Longitud de título' min={0}
                  parse={toNumber} validate={isNumber} normalize={onlyPositive} required></Field>
              </div>
              <div className='numeric-field'>
                <Field name='description' component={RenderInputComponent} type='number' placeholder='Longitud de descripción' min={0}
                  parse={toNumber} validate={isNumber} normalize={onlyPositive} required></Field>
              </div>
              <div>
                <input type='file' name='image' onChange={onImageChange} />
                {/*<Field name='image' component={RenderInputComponent} type='file' placeholder='Imágen de ejemplo' onChange={onImageChange}></Field>*/}
              </div>
              <button type='submit' className='button'>SIGUIENTE <FontAwesomeIcon icon='chevron-right' /></button>
            </form>
          </div>
        </div>
        <SidebarComponent medium={medium} adFormat={adFormat} creative={creative}/>
      </div>
    );
  }
}

const NewSpecCreativeDetailForm = reduxForm({ form: 'NewSpecCreativeDetail', validate })(NewSpecCreativeDetailComponent);

export default setPropsAsInitial(NewSpecCreativeDetailForm);