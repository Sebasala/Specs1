import { handleActions } from 'redux-actions';
import {
  FETCH_CAMPAIGNS,
  CREATE_CAMPAIGN } from '../constants/actions';

export const campaigns = handleActions({
  [CREATE_CAMPAIGN]: (state, action) => ({ ...state }),
  [FETCH_CAMPAIGNS]: (state, action) => ({ ...state, list: [ ...action.payload] }),
}, { list: [] });