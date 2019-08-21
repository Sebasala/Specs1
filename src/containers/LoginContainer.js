import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';
import { validateUser } from '../actions/index';
import { SubmissionError } from 'redux-form';
import { getUser } from '../selectors/user';

class LoginContainer extends Component {

  componentDidMount() {
    if (this.props.user && Object.keys(this.props.user).length > 0) {
      //this.props.history.push('/accounts');
    }
  }

  handleSubmit = values => {
    return this.props.validateUser(values).catch(e => {
      throw new SubmissionError(e);
    });
  }

  handleSubmitSuccess = () => {
    this.props.history.push('/accounts');
  }

  render() {
    return (
      <LoginComponent
        onSubmit={this.handleSubmit}
        onSubmitSuccess={this.handleSubmitSuccess}
      />
    );
  }
}

LoginContainer.propTypes = {
  validateUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: getUser(state)
});

const mapDispatchToProps = { validateUser };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));