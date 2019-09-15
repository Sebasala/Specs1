import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserTie, faChevronLeft, faChevronRight, faPencilAlt, faCheckCircle as fasCheckCircle, faCloudDownloadAlt, faPlusSquare, faBowlingBall, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons';
import Routes from './helpers/Routes';

library.add(faUserTie, faChevronLeft, faChevronRight, faPencilAlt, fasCheckCircle, faCloudDownloadAlt, faPlusSquare, farCheckCircle, faBowlingBall, faTrash);

class App extends Component {

  render() {
    return (
    <Router>
      <Routes />
    </Router>)
  }
}

export default App;
