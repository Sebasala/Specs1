import { handleActions } from 'redux-actions';
import {
  SET_LOADER_VISIBILITY,
  TOGGLE_MENU_VISIBILITY
} from '../constants/actions';

export const ui = handleActions({
  [SET_LOADER_VISIBILITY]: (state, action) => ({ ...state, loaderVisibility: action.payload }),
  [TOGGLE_MENU_VISIBILITY]: (state, action) => ({ ...state, menuVisibility: !state.menuVisibility })
}, { loaderVisibility: false, menuVisibility: false });