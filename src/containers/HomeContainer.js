import React, { Component } from 'react';

class HomeContainer extends Component {

  componentDidMount() {
    const { history } = this.props;
    history.push('/login');
  }

  render() {
    return (
      <div>
        <h1>Home Specs</h1>
      </div>
    );
  }
}

export default HomeContainer;