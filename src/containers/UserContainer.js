import React, { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
  fetchAccounts,
  setSelectedUser,
  setUserAccounts } from '../actions/index';
import { getUser } from './../selectors/user';
import { getUsers, getSelectedUser, getUserAccounts } from './../selectors/users';
import { getAccounts } from './../selectors/accounts';
import UserListComponent from '../components/user/UserListComponent';
import UserFormComponent from '../components/user/UserFormComponent';
import { SubmissionError } from 'redux-form';
import UserItemComponent from '../components/user/UserItemComponent';
import M from 'materialize-css';

class UserContainer extends Component {

  componentDidMount() {
    const { fetchUsers, fetchAccounts, user } = this.props;
    fetchUsers(user);
    fetchAccounts(user);
  }

  handleNewUserSubmitSuccess = () => {
    const { fetchUsers, user } = this.props;
    fetchUsers(user);
    this.props.history.goBack();
  }

  handleNewUserSubmit = values => {
    const { createUser, userAccounts } = this.props;
    return createUser(this.props.user, { ...values, accounts: userAccounts }).catch(e => {
      throw new SubmissionError(e);
    });
  }

  handleEditUserSubmitSuccess = () => {
    const { fetchUsers, user } = this.props;
    fetchUsers(user);
    this.props.history.goBack();
  }

  handleEditUserSubmit = values => {
    const { updateUser, userAccounts } = this.props;
    return updateUser(this.props.user, {
      ...values,
      id: this.props.selectedUser.id,
      accounts: userAccounts
    })
      .catch(e => {
        throw new SubmissionError(e);
      });
  }

  handleDeleteUser = id => {
    const { fetchUsers, user, deleteUser } = this.props;
    deleteUser(user, id).then(() => {
      fetchUsers(user);
    });
    this.props.history.goBack();
  }

  handleBack = () => {
    const { setSelectedUser, history } = this.props;
    history.goBack();
    setSelectedUser(undefined);
  }

  handleSelectChange = event => {
    const { setUserAccounts } = this.props;
    const userAccounts = Object.values(event.target.options).filter(option => option.selected);
    setUserAccounts(Array.from(userAccounts, userAccount => ({ id: userAccount.value })));
  }

  handleEditDeleteClick = (userId) => {
    const { setSelectedUser } = this.props;
    setSelectedUser(userId);
  }

  render() {
    const { users, selectedUser, accounts, userAccounts } = this.props;
    /*var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);*/
    return (
      <div>
        <Switch>
          <Route path={'/users'} render={() => <UserListComponent
            users={users} onEditDeleteClick={this.handleEditDeleteClick} />}
          />
          <Route path={'/user/delete/:userId'} render={() => <UserItemComponent
            confirmation={true}
            id={selectedUser.id}
            name={`${selectedUser.firstName} ${selectedUser.lastName}`}
            email={selectedUser.email}
            permissionLevel={selectedUser.permissionLevel}
            onDelete={this.handleDeleteUser}
            onBack={this.handleBack} />}
          />
          <Route path={'/user/new'} render={() => <UserFormComponent
            userAccounts={userAccounts}
            accounts={accounts}
            onSelectChange={this.handleSelectChange}
            onSubmit={this.handleNewUserSubmit}
            onSubmitSuccess={this.handleNewUserSubmitSuccess}
            onBack={this.handleBack} />}
          />
          <Route path={'/user/:userId'} render={() => <UserFormComponent
            firstName={selectedUser.firstName}
            lastName={selectedUser.lastName}
            email={selectedUser.email}
            permissionLevel={selectedUser.permissionLevel}
            userAccounts={userAccounts}
            accounts={accounts}
            onSelectChange={this.handleSelectChange}
            onSubmit={this.handleEditUserSubmit}
            onSubmitSuccess={this.handleEditUserSubmitSuccess}
            onBack={this.handleBack} />}
          />
        </Switch>
      </div>
    );
  }
}

UserContainer.propTypes = {
  users: PropTypes.array.isRequired,
};

const mapStateToProps = (state, props) => ({
  users: getUsers(state),
  selectedUser: getSelectedUser(state, props),
  user: getUser(state),
  accounts: getAccounts(state),
  userAccounts: getUserAccounts(state)
});

const mapDispatchToProps = { fetchUsers, createUser, updateUser, deleteUser, fetchAccounts, setSelectedUser, setUserAccounts };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserContainer));