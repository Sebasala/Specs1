import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AccountsComponent from '../components/AccountsComponent';
import { getUserAccounts } from './../selectors/accounts';
import { fetchUserAccounts, setLoaderVisibility } from './../actions/index';
import { getUser } from '../selectors/user';

//TODO: Refactorizar a UserAccountsContainer
class AccountsContainer extends Component {

  componentDidMount() {
    const { fetchUserAccounts, setLoaderVisibility, user } = this.props;
    setLoaderVisibility(true);
    fetchUserAccounts(user).then(() => setLoaderVisibility(false));
  }

  render() {
    const { accounts } = this.props;
    return (
      <AccountsComponent accounts={accounts} urlPath={'account/'} />
    );
  }
}

AccountsContainer.propTypes = {
  fetchUserAccounts: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

AccountsContainer.defaultProps = {
  accounts: []
}

const mapStateToProps = state => ({
  accounts: getUserAccounts(state),
  user: getUser(state)
});

const mapDispatchToProps = { fetchUserAccounts, setLoaderVisibility };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountsContainer));