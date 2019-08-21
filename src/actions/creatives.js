import { createAction } from 'redux-actions';
import {
  FETCH_CREATIVES,
  CLEAR_CREATIVES } from '../constants/actions';
import { apiGetCreativesByAdFormat } from '../api/index';
import { creativesUrl } from '../api/urls';

export const fetchCreatives = createAction(FETCH_CREATIVES, (user, adFormat) => apiGetCreativesByAdFormat(creativesUrl, user, adFormat)());
export const clearCreatives = createAction(CLEAR_CREATIVES);