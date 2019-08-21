import { handleActions } from 'redux-actions';
import { FETCH_CONTENTS } from '../constants/actions';

export const contents = handleActions({
  [FETCH_CONTENTS]: (state, action) => ({ ...state, list: [...action.payload] }),
}, []);