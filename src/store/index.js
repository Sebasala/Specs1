import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './../reducers';
import { saveState, loadState } from './../helpers/utils';

const initialData = loadState() || {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, initialData, composeEnhancers(applyMiddleware(promiseMiddleware)));

store.subscribe(() => {
  saveState(store.getState());
});