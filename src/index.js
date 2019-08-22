import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "./scss/styles.scss"

const rootComponent = (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(rootComponent, document.getElementById('root'));
registerServiceWorker();
