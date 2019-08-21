import { handleActions } from 'redux-actions';
import { FETCH_CONTENT_FORMATS,
  CLEAR_CONTENT_FORMATS } from '../constants/actions';

export const contentFormats = handleActions({
  [FETCH_CONTENT_FORMATS]: (state, action) => [ ...action.payload ],
  [CLEAR_CONTENT_FORMATS]: (state, action) => [],
}, []);