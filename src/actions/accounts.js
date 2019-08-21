import { createAction } from 'redux-actions';
import {
  SELECT_USER_ACCOUNT,
  FETCH_ACCOUNTS,
  CREATE_ACCOUNT,
  UPDATE_ACCOUNT,
  DELETE_ACCOUNT,
  SET_ACCOUNT_LOGO } from '../constants/actions';
import { apiGetAccounts, apiPostAccount, apiPatchAccount, apiDeleteAccount } from '../api/index';
import { accountsUrl } from '../api/urls';

export const selectUserAccount = createAction(SELECT_USER_ACCOUNT);
export const fetchAccounts = createAction(FETCH_ACCOUNTS, user => apiGetAccounts(accountsUrl, user)());
export const createAccount = createAction(CREATE_ACCOUNT, (user, accountData) => apiPostAccount(accountsUrl, user, accountData)());
export const updateAccount = createAction(UPDATE_ACCOUNT, (user, accountData) => apiPatchAccount(accountsUrl, user, accountData)());
export const deleteAccount = createAction(DELETE_ACCOUNT, (user, accountId) => apiDeleteAccount(accountsUrl, user, accountId)());
export const setAccountLogo = createAction(SET_ACCOUNT_LOGO);