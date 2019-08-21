import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import RenderSelectComponent from './fields/RenderSelectComponent';
import SidebarComponent from './SidebarComponent';
// import './css/style.css';

const validate = values => {
  const errors = {};
  if (!values.medium) {
    errors.medium = 'Campo requerido';
  }
  if (!values.adFormat) {
    errors.adFormat = 'Campo requerido';
  }
  if (!values.creative) {
    errors.creative = 'Campo requerido';
  }
  return errors;
}

class AddMediumComponent extends Component {

  render(){
    const { campaign, mediums, medium, onMediumChange, adFormats, adFormat, onAdFormatChange, creatives, creative, onCreativeChange, handleSubmit, onBack } = this.props;
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
                <Field name='medium' component={RenderSelectComponent} onSelectChange={onMediumChange} placeholder='Medio' withFocus selectedValue={(medium && medium.id) ? medium.id : ``}>
                  <option value=''>Nueva</option>
                  {mediums.map(medium => (
                    <option key={medium.id} value={medium.id}>{medium.name}</option>
                  ))}
                </Field>
              </div>
              <div className='select-field'>
                <Field name='adFormat' component={RenderSelectComponent} onSelectChange={onAdFormatChange} placeholder='Formato' selectedValue={(adFormat && adFormat.id) ? adFormat.id : ``}>
                  <option value=''>Nueva</option>
                  {adFormats.map(adFormat => (
                    <option key={adFormat.id} value={adFormat.id}>{adFormat.name}</option>
                  ))}
                </Field>
              </div>
              <div className='select-field'>
                <Field name='creative' component={RenderSelectComponent} onSelectChange={onCreativeChange} placeholder='Creativo' selectedValue={(creative && creative.id) ? creative.id : ``}>
                  <option value=''>Nueva</option>
                  {creatives.map(creative => (
                    <option key={creative.id} value={creative.id}>{creative.name}</option>
                  ))}
                </Field>
              </div>
              <button type='submit' className='button'>SIGUIENTE <FontAwesomeIcon icon='chevron-right' /></button>
            </form>
          </div>
        </div>
        <SidebarComponent campaign={campaign} medium={medium} adFormat={adFormat} creative={creative} />
        {/*<div className='sidebar sidebar--2'>
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

const AddMediumForm = reduxForm({ form: 'AddMedium', validate })(AddMediumComponent);

export default setPropsAsInitial(AddMediumForm);