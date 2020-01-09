import { createAction } from 'redux-actions';
import {
  SET_LOADER_VISIBILITY,
  SET_LOADER_PROGRESS,
  TOGGLE_MENU_VISIBILITY
} from '../constants/actions';

export const setLoaderVisibility = createAction(SET_LOADER_VISIBILITY);
export const setLoaderProgress = createAction(SET_LOADER_PROGRESS);
export const toggleMenuVisibility = createAction(TOGGLE_MENU_VISIBILITY);