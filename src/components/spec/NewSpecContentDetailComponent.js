import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { setPropsAsInitial } from '../../helpers/setPropsAsInitial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import RenderInputComponent from '../fields/RenderInputComponent';
import SidebarComponent from '../SidebarComponent';
// import './../css/style.css';

const validate = values => {
  const errors = {};
  if (values.size === ``) {
    errors.size = 'Campo requerido';
  }
  if (values.weight === ``) {
    errors.weight = 'Campo requerido';
  }
  return errors;
}

class NewSpecContentDetailComponent extends Component {

  render(){
    const { medium, adFormat, creative, handleSubmit, onBack, contentTmp } = this.props;
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
              <Field name='size' component={RenderInputComponent} type='text' placeholder='Tamaño' required></Field>
              <Field name='weight' component={RenderInputComponent} type='text' placeholder='Peso máximo' required></Field>
              <Field name='length' component={RenderInputComponent} type='text' placeholder='Longitud de video'></Field>
              <Field name='observation' component={RenderInputComponent} type='text' placeholder='Observación'></Field>
              <button type='submit' className='button'>GUARDAR CONTENIDO <FontAwesomeIcon icon='chevron-right' /></button>
            </form>
          </div>
        </div>
        <SidebarComponent medium={medium} adFormat={adFormat} creative={creative} contentTmp={contentTmp}/>
      </div>
    );
  }
}

const NewSpecContentDetailForm = reduxForm({ form: 'NewSpecContentDetail', validate })(NewSpecContentDetailComponent);

export default setPropsAsInitial(NewSpecContentDetailForm);