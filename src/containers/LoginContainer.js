import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';
import { validateUser, setLoaderVisibility } from '../actions/index';
import { SubmissionError } from 'redux-form';
import { getUser } from '../selectors/user';
//TODO: GTM
import TagManager from 'react-gtm-module';

class LoginContainer extends Component {

  componentDidMount() {
    const { user, history } = this.props;
    if (user && Object.keys(user).length > 0 && localStorage.getItem('jwtToken')) {
      history.push('/accounts');
    }
  }

  handleSubmit = values => {
    const { validateUser, setLoaderVisibility } = this.props;
    setLoaderVisibility(true);
    return validateUser(values)
      .then(() => setLoaderVisibility(false))
      .catch(e => {
        setLoaderVisibility(false);
        throw new SubmissionError(e);
      });
  }

  handleSubmitSuccess = () => {
    const { user, history } = this.props;
    TagManager.dataLayer({
      dataLayer: {
        event: 'login',
        user: {
          name: user.name,
          email: user.email
        }
      }
    });
    history.push('/accounts');
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

const mapDispatchToProps = { validateUser, setLoaderVisibility };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));