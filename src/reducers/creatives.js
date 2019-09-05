import { handleActions } from 'redux-actions';
import {
  FETCH_CREATIVES,
  CLEAR_CREATIVES
} from '../constants/actions';

export const creatives = handleActions({
  [FETCH_CREATIVES]: (state, action) => [...action.payload],
  [CLEAR_CREATIVES]: (state, action) => [],
}, []);