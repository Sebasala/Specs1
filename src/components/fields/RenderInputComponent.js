import React, { Component } from 'react';
import { setPropsAsInitial } from '../../helpers/setPropsAsInitial';

class RenderInputComponent extends Component {
  render(){
    const { input, meta, type, placeholder, withFocus, required, defaultValue } = this.props;
    return (
      <div className='field'>
        {/* Al input se le pasan todos los datos que tiene el input original para que se renderice de la misma forma, para mostrar el error,
        se valida si en meta.error viene algo, si es así muestra un span con el error, de lo contrario no renderiza nada*/}
        <input {...input} type={!type ? 'text' : type} ref={withFocus && (control => this.focus = control)} required={required ? required : false} />
        {/* Con meta.touched se puede validar que el campo se haya modificado una primera vez para no tener que mostrar el error desde
        la primera renderización del formulario*/}
        {meta.touched && meta.error && <span>{meta.error}</span>}
        <label htmlFor={input.name}>{placeholder}</label>
      </div>
    );
  }
}

export default setPropsAsInitial(RenderInputComponent);