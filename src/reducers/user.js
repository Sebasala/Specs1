import { handleActions } from 'redux-actions';
import {
  VALIDATE_USER,
  LOGOUT_USER
} from '../constants/actions';

export const user = handleActions({
  [VALIDATE_USER]: (state, action) => action.payload,
  [LOGOUT_USER]: (state, action) => ({})
}, {});