import { handleActions } from 'redux-actions';
import {
  FETCH_MEDIUMS,
  CLEAR_MEDIUMS
} from '../constants/actions';

export const mediums = handleActions({
  [FETCH_MEDIUMS]: (state, action) => [...action.payload],
  [CLEAR_MEDIUMS]: (state, action) => [],
}, []);