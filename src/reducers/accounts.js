import { handleActions } from 'redux-actions';
import {
  FETCH_USER_ACCOUNTS,
  SELECT_USER_ACCOUNT,
  FETCH_ACCOUNTS,
  CREATE_ACCOUNT,
  UPDATE_ACCOUNT,
  DELETE_ACCOUNT,
  SET_ACCOUNT_LOGO } from './../constants/actions';

export const accounts = handleActions({
  [FETCH_USER_ACCOUNTS]: (state, action) => ({ ...state, userAccountList: [ ...action.payload ]}),
  [SELECT_USER_ACCOUNT]: (state, action) => ({ ...state, selected: action.payload }),
  [FETCH_ACCOUNTS]: (state, action) => ({ ...state, list: [ ...action.payload ] }),
  [CREATE_ACCOUNT]: (state, action) => ({ ...state }),
  [UPDATE_ACCOUNT]: (state, action) => ({ ...state }),
  [DELETE_ACCOUNT]: (state, action) => ({ ...state }),
  [SET_ACCOUNT_LOGO]: (state, action) => ({ ...state, logo: action.payload })
}, { userAccountList: [], selected: {}, list: [] });