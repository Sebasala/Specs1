import React, { Component } from 'react';

class NotFoundContainer extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/login');
    }, 5000);
  }

  render() {
    return (
      <h1>Ruta no encontrada, redireccionando a /login</h1>
    );
  }
}

export default NotFoundContainer;