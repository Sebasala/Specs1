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
  if (!values.content) {
    errors.content = 'Campo requerido';
  }
  return errors;
}

class AddContentComponent extends Component {

  render(){
    const { campaign, medium, adFormat, creative, contents, content, onContentChange, handleSubmit, onBack, onAddSpec } = this.props;
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
                <Field name='content' component={RenderSelectComponent} onSelectChange={onContentChange} placeholder='Tipo de contenido' withFocus selectedValue={(content && content.id) ? content.id : ``}>
                  <option value=''>Nueva</option>
                  {contents.map(content => (
                    <option key={content.id} value={content.id}>{content.contentFormat.contentType.name}</option>
                  ))}
                </Field>
              </div>
              <div className='numeric-field'>
                <Field name='quantity' component={RenderInputComponent} type='number' placeholder='Cantidad' min={1} required></Field>
              </div>
              <button type='submit' className='button'>ADD SPEC <FontAwesomeIcon icon='chevron-right' /></button>
            </form>
          </div>
        </div>
        <SidebarComponent campaign={campaign} medium={medium} adFormat={adFormat} creative={creative} content={content} onAddSpec={onAddSpec} />
      </div>
    );
  }
}

const AddContentForm = reduxForm({ form: 'AddContent', validate })(AddContentComponent);

export default setPropsAsInitial(AddContentForm);