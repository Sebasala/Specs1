import { createAction } from 'redux-actions';
import {
  VALIDATE_USER,
  FETCH_USER_ACCOUNTS,
  FETCH_USERS,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  SET_SELECTED_USER,
  SET_USER_ACCOUNTS,
  CLEAR_USER_ACCOUNTS } from '../constants/actions';
import {
  apiGetUserByCredentials,
  apiGetUserAccounts,
  apiGetUsers,
  apiPostUser,
  //apiPutUser,
  apiDeleteUser } from './../api/index';
import { authUrl, usersUrl } from '../api/urls';

export const validateUser = createAction(VALIDATE_USER, user => apiGetUserByCredentials(authUrl, user)());
export const fetchUserAccounts = createAction(FETCH_USER_ACCOUNTS, user => apiGetUserAccounts(usersUrl, user)());

export const fetchUsers = createAction(FETCH_USERS, user => apiGetUsers(usersUrl, user)());
export const createUser = createAction(CREATE_USER, (user, userData) => apiPostUser(usersUrl, user, userData)());
//export const updateUser = createAction(UPDATE_USER, (user, userData) => apiPutUser(usersUrl, user, userData)());
export const deleteUser = createAction(DELETE_USER, (user, userId) => apiDeleteUser(usersUrl, user, userId)());
export const setSelectedUser = createAction(SET_SELECTED_USER);
export const setUserAccounts = createAction(SET_USER_ACCOUNTS);
export const clearUserAccounts = createAction(CLEAR_USER_ACCOUNTS);