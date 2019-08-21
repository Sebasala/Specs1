import { handleActions } from 'redux-actions';
import { FETCH_AD_FORMATS,
  CLEAR_AD_FORMATS } from '../constants/actions';

export const adFormats = handleActions({
  [FETCH_AD_FORMATS]: (state, action) => [ ...action.payload ],
  [CLEAR_AD_FORMATS]: (state, action) => [],
}, []);