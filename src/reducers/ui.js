import { handleActions } from 'redux-actions';
import { SET_LOADER_VISIBILITY } from '../constants/actions';

export const ui = handleActions({
  [SET_LOADER_VISIBILITY]: (state, action) => ({ ...state, loaderVisibility: action.payload })
}, { loaderVisibility: false });