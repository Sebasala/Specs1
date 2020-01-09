import { handleActions } from 'redux-actions';
import {
  SET_LOADER_VISIBILITY,
  SET_LOADER_PROGRESS,
  TOGGLE_MENU_VISIBILITY
} from '../constants/actions';

export const ui = handleActions({
  [SET_LOADER_VISIBILITY]: (state, action) => ({ ...state, loaderVisibility: action.payload }),
  [SET_LOADER_PROGRESS]: (state, action) => ({ ...state, loaderProgress: action.payload }),
  [TOGGLE_MENU_VISIBILITY]: (state, action) => ({ ...state, menuVisibility: !state.menuVisibility })
}, { loaderVisibility: false, loaderProgress: undefined, menuVisibility: false });