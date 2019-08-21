import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import RenderSelectComponent from './fields/RenderSelectComponent';
import RenderInputComponent from './fields/RenderInputComponent';
import SidebarComponent from './SidebarComponent';
// import './css/style.css';

const validate = values => {
  const errors = {};
  if (!values.contentType) {
    errors.contentType = 'Campo requerido';
  }
  if (!values.contentFormat) {
    errors.contentFormat = 'Campo requerido';
  }
  return errors;
}

class CreateContentComponent extends Component {

  render(){
    const { campaign, medium, adFormat, creative, contentTypes, contentType, onContentTypeChange, contentFormats, contentFormat, onContentFormatChange, handleSubmit, onBack } = this.props;
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
              <div className='select-field'>
                <Field name='contentType' component={RenderSelectComponent} onSelectChange={onContentTypeChange} placeholder='Tipo de contenido' withFocus selectedValue={(contentType && contentType.id) ? contentType.id : ``}>
                  <option value=''>Nueva</option>
                  {contentTypes.map(contentType => (
                    <option key={contentType.id} value={contentType.id}>{contentType.name}</option>
                  ))}
                </Field>
              </div>
              <div className='select-field'>
                <Field name='contentFormat' component={RenderSelectComponent} onSelectChange={onContentFormatChange} placeholder='Formato de contenido' selectedValue={(contentFormat && contentFormat.id) ? contentFormat.id : ``}>
                  <option value=''>Nueva</option>
                  {contentFormats.map(contentFormat => (
                    <option key={contentFormat.id} value={contentFormat.id}>{contentFormat.name}</option>
                  ))}
                </Field>
              </div>
              {(campaign && campaign.name) ? (
                <div className='numeric-field'>
                  <Field name='quantity' component={RenderInputComponent} type='number' placeholder='Cantidad' min={1} required></Field>
                </div>) : ``
              }
              <button type='submit' className='button'>SIGUIENTE <FontAwesomeIcon icon='chevron-right' /></button>
            </form>
          </div>
        </div>
        <SidebarComponent campaign={campaign} medium={medium} adFormat={adFormat} creative={creative} />
        {/*<div className='sidebar sidebar--3'>
          <h1>
            CAMPAÑA: {(campaign && campaign.name) ? <span>{campaign.name}</span> : ``}
          </h1>
          <div className='fields-output'>
            <div className='field-output'>
              <p>Medio</p>
              {(medium && medium.name) ? <h2>{medium.name}</h2> : ``}
            </div>
            <div className='field-output'>
              <p>Formato</p>
              {(adFormat && adFormat.name) ? <h2>{adFormat.name}</h2> : ``}
            </div>
            <div className='field-output'>
              <p>Creativo</p>
              {(creative && creative.name) ? <h2>{creative.name}</h2> : ``}
            </div>
          </div>
        </div>*/}
      </div>
    );
  }
}

const CreateContentForm = reduxForm({ form: 'CreateContent', validate })(CreateContentComponent);

export default setPropsAsInitial(CreateContentForm);