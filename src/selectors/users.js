//import { createSelector } from 'reselect';

export const getUsers = state => state.users.list;
export const getSelectedUser = state => state.users.selectedUser;
//export const getSelectedUser = (state, props) => (props.userId ? state.users.list.find(u => u.id === props.userId) : {});
export const getUserAccounts = state => state.users.selectedUser && state.users.selectedUser.accounts ?
    Array.from(state.users.selectedUser.accounts, userAccount => userAccount.id) : [];