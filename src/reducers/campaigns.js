import { handleActions } from 'redux-actions';
import {
  FETCH_ACCOUNT_CAMPAIGNS,
  CREATE_ACCOUNT_CAMPAIGN
} from '../constants/actions';

export const campaigns = handleActions({
  [CREATE_ACCOUNT_CAMPAIGN]: (state, action) => ({ ...state }),
  [FETCH_ACCOUNT_CAMPAIGNS]: (state, action) => ({ ...state, list: [...action.payload] }),
}, { list: [] });