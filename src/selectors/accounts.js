import { createSelector } from 'reselect';

//TODO: Cambiar getAccounts por getUserAccounts
export const getUserAccounts = state => state.accounts.userAccountList;
export const getSelectedUserAccount = createSelector(
  (state) => state.accounts.userAccountList.find(a => a.id === state.accounts.selected),
  account => account
);
export const getUserAccountById = createSelector(
  (state, props) => state.accounts.userAccountList.find(a => a.id === props.accountId),
  account => account
);
export const getAccounts = state => state.accounts.list;
export const getSelectedAccount = (state, props) => (props.accountId ? state.accounts.list.find(a => a.id === props.accountId) : {});
export const getAccountLogo = state => state.accounts.logo ? state.accounts.logo : undefined;