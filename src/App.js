import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserTie, faChevronLeft, faChevronRight, faPencilAlt, faCheckCircle as fasCheckCircle, faCloudDownloadAlt, faPlusSquare, faBowlingBall, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons';
//import 'materialize-css/dist/css/materialize.min.css';
/*import HomeContainer from './containers/HomeContainer';
import AccountsContainer from './containers/AccountsContainer';
import CampaignsContainer from './containers/CampaignsContainer';
import CreateContainer from './containers/CreateContainer';
import LoginContainer from './containers/LoginContainer';
import SpecsContainer from './containers/SpecsContainer';
import NewSpecContainer from './containers/NewSpecContainer';
import NotFoundContainer from './containers/NotFoundContainer';
import { PrivateRoute } from './helpers/PrivateRoute';*/

// COMPONENTS
import Routes from './helpers/Routes';

library.add(faUserTie, faChevronLeft, faChevronRight, faPencilAlt, fasCheckCircle, faCloudDownloadAlt, faPlusSquare, farCheckCircle, faBowlingBall, faTrash);

class App extends Component {

  render() {
    return (<Router>
      <Routes />
      {/*<Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/login' component={LoginContainer} />
        <PrivateRoute exact path='/accounts' component={AccountsContainer} />

        <Route path='/create/:campaignId' render={props => <CreateContainer campaignId={props.match.params.campaignId} />} />
        <Route path='/create' component={CreateContainer} />

        <Route path='/new/spec' component={NewSpecContainer} />
        <Route path='/account/:accountId' render={props => <CampaignsContainer accountId={props.match.params.accountId} />} />
        <Route path='/campaign/:campaignId' render={props => <SpecsContainer campaignId={props.match.params.campaignId} />} />
        <Route component={NotFoundContainer} />
      </Switch>*/}
    </Router>)
  }
}

export default App;
