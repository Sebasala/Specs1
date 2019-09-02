import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import RenderSelectComponent from './fields/RenderSelectComponent';
import RenderInputComponent from './fields/RenderInputComponent';
// import './css/style.css';

const validate = values => {
  const errors = {};
  if (!values.campaign) {
    if (!values.name){
      errors.name = 'Campo requerido';
    }
  }
  return errors;
}

class CreateComponent extends Component {

  render(){
    const { campaigns, onCampaignChange, campaign, handleSubmit, onBack } = this.props;
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
                <Field name='campaign' component={RenderSelectComponent} onSelectChange={onCampaignChange} placeholder='Campaña' withFocus selectedValue={(campaign && campaign.id) ? campaign.id : ``}>
                  <option value=''>Nueva</option>
                  {campaigns.map(campaign => (
                    <option key={campaign.id} value={campaign.id}>{campaign.name}</option>
                  ))}
                </Field>
              </div>
              {(!campaign) ? (
                <div>
                  <div className='field'>
                    <Field name='name' component={RenderInputComponent} type='text' placeholder='Nombre de campaña' required></Field>
                  </div>
                </div>
              ) : ``}
              <button type='submit' className='button'>SIGUIENTE <FontAwesomeIcon icon='chevron-right' /></button>
            </form>
          </div>
        </div>
        <div className='sidebar'>
          <h1>
            CAMPAÑA: {(campaign && campaign.name) ? <span>{campaign.name}</span> : `` }
          </h1>
        </div>
      </div>
    );
  }
}

const CreateForm = reduxForm({ form: 'Create', validate })(CreateComponent);

export default setPropsAsInitial(CreateForm);