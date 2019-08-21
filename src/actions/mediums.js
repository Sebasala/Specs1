import { createAction } from 'redux-actions';
import {
  FETCH_MEDIUMS,
  CLEAR_MEDIUMS } from '../constants/actions';
import { apiGetMediums } from '../api/index';
import { mediumsUrl } from '../api/urls';

export const fetchMediums = createAction(FETCH_MEDIUMS, user => apiGetMediums(mediumsUrl, user)());
export const clearMediums = createAction(CLEAR_MEDIUMS);