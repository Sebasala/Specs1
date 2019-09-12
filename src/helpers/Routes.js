import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import HomeContainer from '../containers/HomeContainer';
import AccountsContainer from '../containers/AccountsContainer';
import CampaignsContainer from '../containers/CampaignsContainer';
import CreateContainer from '../containers/CreateContainer';
import LoginContainer from '../containers/LoginContainer';
import SpecsContainer from '../containers/SpecsContainer';
import UserContainer from './../containers/UserContainer';
import AccountContainer from './../containers/AccountContainer';
import NewSpecContainer from '../containers/NewSpecContainer';
import NotFoundContainer from '../containers/NotFoundContainer';
import { getUser } from '../selectors/user';
import { getLoaderVisibility } from '../selectors/ui';
import Sidebar from './Sidebar';
import { Loader } from './Loader';

class Routes extends Component {

  render() {
    const { user, loaderVisibility } = this.props;
    return (<Router>
      <div>
        <Sidebar></Sidebar>
        <Loader loaderVisibility={loaderVisibility}></Loader>
        <Switch>
          <Route exact path='/login' component={LoginContainer} />
          <Route exact path='/' component={HomeContainer} />

          <PrivateRoute path='/users' component={UserContainer} user={user} />
          <PrivateRoute path='/user/delete/:userId' render={props => {
            //console.log(props.match.params.userId);
            return <UserContainer userId={props.match.params.userId} />;
          }} user={user} />
          <PrivateRoute path='/user/:userId' render={props => {
            //console.log(props.match.params.userId);
            return <UserContainer userId={props.match.params.userId} />
          }} user={user} />

          <PrivateRoute path='/accounts2' component={AccountContainer} user={user} />
          <PrivateRoute path='/account2/delete/:accountId' render={props => <AccountContainer accountId={props.match.params.accountId} />} user={user} />
          <PrivateRoute path='/account2/:accountId' render={props => <AccountContainer accountId={props.match.params.accountId} />} user={user} />

          <PrivateRoute exact path='/accounts' component={AccountsContainer} user={user} />

          <PrivateRoute path='/create/:path(campaign|medium|content)' component={CreateContainer} user={user} />
          <PrivateRoute path='/create/:campaignId' render={props => <CreateContainer campaignId={props.match.params.campaignId} />} user={user} />

          <PrivateRoute path='/new/spec' component={NewSpecContainer} user={user} />
          <PrivateRoute path='/account/:accountId' render={props => <CampaignsContainer accountId={props.match.params.accountId} />} user={user} />
          <PrivateRoute path='/campaign/:campaignId' render={props => <SpecsContainer campaignId={props.match.params.campaignId} />} user={user} />
          <PrivateRoute component={NotFoundContainer} user={user} />
        </Switch>
      </div>
    </Router>)
  }
}

const mapStateToProps = (state, props) => ({
  user: getUser(state),
  loaderVisibility: getLoaderVisibility(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);