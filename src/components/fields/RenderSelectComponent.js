import React, { Component } from 'react';
import { setPropsAsInitial } from '../../helpers/setPropsAsInitial';

class RenderSelectComponent extends Component {
  render(){
    const { input, meta, withFocus, children, onSelectChange, selectedValue, required, placeholder } = this.props;
    return (
      <div>
        <label htmlFor={input.name}>{placeholder}</label>
        <select {...input} ref={withFocus && (control => this.focus = control)} onChange={onSelectChange} value={selectedValue} required={required ? required : false}>
          {children}
        </select>
        {meta.touched && meta.error && <span>{meta.error}</span>}
      </div>
    );
  }
}

export default setPropsAsInitial(RenderSelectComponent);