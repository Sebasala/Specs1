import React, { Component } from 'react';

// La propiedad enableReinitialize permite volver a instanciar el initialValues y no solo la primera vez que carga el componente
export const setPropsAsInitial = WrappedComponent => (
  class extends Component {
    render() {
      // return <WrappedComponent {...this.props} initialValues={this.props} enableReinitialize/>;
      return <WrappedComponent {...this.props} initialValues={this.props} />;
    }
  }
);