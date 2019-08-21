import { handleActions } from 'redux-actions';
import {
  FETCH_USERS,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  SET_SELECTED_USER,
  SET_USER_ACCOUNTS,
  CLEAR_USER_ACCOUNTS } from '../constants/actions';

export const users = handleActions({
  [FETCH_USERS]: (state, action) => ({ ...state, list: action.payload }),
  [CREATE_USER]: (state, action) => ({ ...state }),
  [UPDATE_USER]: (state, action) => ({ ...state }),
  [DELETE_USER]: (state, action) => ({ ...state }),
  [SET_SELECTED_USER]: (state, action) => {
    const selectedUser = state.list.find(u => u.id === action.payload);
    return { ...state, selectedUser: selectedUser ? selectedUser : {} };
  },
  [SET_USER_ACCOUNTS]: (state, action) => ({ ...state, selectedUser: { ...state.selectedUser, accounts: [ ...action.payload ] } }),
  [CLEAR_USER_ACCOUNTS]: (state, action) => ({ ...state, selectedUser: { ...state.selectedUser, accounts: [] } }),
}, { list: [], selectedUser: {} });