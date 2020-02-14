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

class DealsComponent extends Component {

  render(){
    const { mediums, medium, onMediumChange,
      deals, deal, onDealChange,
      countries, country, onCountryChange,
      formats, format, onFormatChange,
      handleSubmit, onBack } = this.props;
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
            <form className="light-bg" onSubmit={handleSubmit}>
              <div className='select-field'>
                <Field name='medium' component={RenderSelectComponent} onSelectChange={onMediumChange} placeholder='Medio' withFocus selectedValue={(medium && medium.id) ? medium.id : ``}>
                  <option value=''>Nueva</option>
                  {mediums.map(medium => (
                    <option key={medium.id} value={medium.id}>{medium.name}</option>
                  ))}
                </Field>
              </div>
              <div className='select-field'>
                <Field name='deal' component={RenderSelectComponent} onSelectChange={onDealChange} placeholder='Deal' withFocus selectedValue={(deal && deal.id) ? deal.id : ``}>
                  <option value=''>Nueva</option>
                  {deals.map(deal => (
                    <option key={deal.id} value={deal.id}>{deal.name}</option>
                  ))}
                </Field>
              </div>
              <div className='select-field'>
                <Field name='country' component={RenderSelectComponent} onSelectChange={onCountryChange} placeholder='País' withFocus selectedValue={(country && country.id) ? country.id : ``}>
                  <option value=''>Nueva</option>
                  {countries.map(country => (
                    <option key={country.id} value={country.id}>{country.name}</option>
                  ))}
                </Field>
              </div>
              <div className='select-field'>
                <Field name='format' component={RenderSelectComponent} onSelectChange={onFormatChange} placeholder='Formato' withFocus selectedValue={(format && format.id) ? format.id : ``}>
                  <option value=''>Nueva</option>
                  {formats.map(format => (
                    <option key={format.id} value={format.id}>{format.name}</option>
                  ))}
                </Field>
              </div>
              <button type='submit' className='button'>SIGUIENTE <FontAwesomeIcon icon='chevron-right' /></button>
            </form>
          </div>
        </div>
        <div className='sidebar'>
          <h1>
            MEDIO: {(medium && medium.name) ? <span>{medium.name}</span> : `` }
          </h1>
          <h1>
            DEAL: {(deal && deal.name) ? <span>{deal.name}</span> : ``}
          </h1>
          <h1>
            PAÍS: {(country && country.name) ? <span>{country.name}</span> : ``}
          </h1>
          <h1>
            FORMAT: {(format && format.name) ? <span>{format.name}</span> : ``}
          </h1>
        </div>
      </div>
    );
  }
}

const DealsForm = reduxForm({ form: 'Deals', validate })(DealsComponent);

export default setPropsAsInitial(DealsForm);