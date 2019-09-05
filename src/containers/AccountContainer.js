import React, { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
  setAccountLogo
} from '../actions/index';
import { getUser } from '../selectors/user';
import { getAccounts, getSelectedAccount, getAccountLogo } from '../selectors/accounts';
import AccountListComponent from './../components/account/AccountListComponent';
import AccountItemComponent from './../components/account/AccountItemComponent';
import AccountFormComponent from '../components/account/AccountFormComponent';
import { SubmissionError } from 'redux-form';

class AccountContainer extends Component {

  componentDidMount() {
    const { fetchAccounts, user } = this.props;
    fetchAccounts(user);
  }

  handleLogoChange = event => {
    const file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = (event) => {
      const content = fileReader.result;
      this.props.setAccountLogo(content);
    };
    fileReader.readAsDataURL(file);
  }

  handleNewAccountSubmitSuccess = () => {
    const { fetchAccounts, setAccountLogo, user, history } = this.props;
    setAccountLogo(undefined);
    fetchAccounts(user);
    history.goBack();

  }

  handleNewAccountSubmit = values => {
    const { createAccount, user, accountLogo } = this.props;
    return createAccount(user, { name: values.name, logo: accountLogo })
      .catch(e => {
        setAccountLogo(undefined);
        throw new SubmissionError(e);
      });
  }

  handleEditAccountSubmitSuccess = () => {
    const { fetchAccounts, setAccountLogo, user, history } = this.props;
    setAccountLogo(undefined);
    fetchAccounts(user);
    history.goBack();
  }

  handleEditAccountSubmit = values => {
    const { updateAccount, user, selectedAccount, accountLogo } = this.props;
    return updateAccount(user, { ...values, id: selectedAccount.id, logo: accountLogo })
      .catch(e => {
        setAccountLogo(undefined);
        throw new SubmissionError(e);
      });
  }

  handleDeleteAccount = id => {
    const { fetchAccounts, user, deleteAccount, history } = this.props;
    deleteAccount(user, id).then(() => {
      fetchAccounts(user);
    });
    history.goBack();
  }

  handleBack = () => {
    const { setAccountLogo, history } = this.props;
    history.goBack();
    setAccountLogo(undefined);
  }
  //TODO: Controlar las rutas desde una propiedad en el container
  render() {
    const { accounts, selectedAccount, accountLogo } = this.props;
    return (
      <div>
        <Route path={'/accounts2'} render={() => <AccountListComponent accounts={accounts} />} />
        <Switch>
          <Route path={'/account2/delete/:accountId'} render={() => <AccountItemComponent
            id={selectedAccount.id}
            name={selectedAccount.name}
            logo={selectedAccount.logo}
            onDelete={this.handleDeleteAccount}
            onBack={this.handleBack} />}
          />
          <Route path={'/account2/new'} render={() => <AccountFormComponent
            onLogoChange={this.handleLogoChange}
            onSubmit={this.handleNewAccountSubmit}
            onSubmitSuccess={this.handleNewAccountSubmitSuccess}
            onBack={this.handleBack} />}
          />
          <Route path={'/account2/:accountId'} render={() => <AccountFormComponent
            name={selectedAccount.name}
            onLogoChange={this.handleLogoChange}
            onSubmit={this.handleEditAccountSubmit}
            onSubmitSuccess={this.handleEditAccountSubmitSuccess}
            onBack={this.handleBack} />}
          />
        </Switch>
      </div>
    );
  }
}

AccountContainer.propTypes = {
  accounts: PropTypes.array.isRequired,
};

const mapStateToProps = (state, props) => ({
  accounts: getAccounts(state),
  selectedAccount: getSelectedAccount(state, props),
  accountLogo: getAccountLogo(state),
  user: getUser(state)
});

const mapDispatchToProps = { fetchAccounts, createAccount, updateAccount, deleteAccount, setAccountLogo };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountContainer));