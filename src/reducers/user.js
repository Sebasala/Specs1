import { handleActions } from 'redux-actions';
import { VALIDATE_USER } from '../constants/actions';

export const user = handleActions({
  [VALIDATE_USER]: (state, action) => action.payload,
}, {});