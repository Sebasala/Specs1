import { handleActions } from 'redux-actions';
import { FETCH_CONTENT_TYPES,
  CLEAR_CONTENT_TYPES } from '../constants/actions';

export const contentTypes = handleActions({
  [FETCH_CONTENT_TYPES]: (state, action) => [ ...action.payload ],
  [CLEAR_CONTENT_TYPES]: (state, action) => [],
}, []);