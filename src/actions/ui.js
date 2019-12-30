import { createAction } from 'redux-actions';
import {
  SET_LOADER_VISIBILITY,
  TOGGLE_MENU_VISIBILITY
} from '../constants/actions';

export const setLoaderVisibility = createAction(SET_LOADER_VISIBILITY);
export const toggleMenuVisibility = createAction(TOGGLE_MENU_VISIBILITY);