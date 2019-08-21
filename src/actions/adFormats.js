import { createAction } from 'redux-actions';
import {
  FETCH_AD_FORMATS,
  CLEAR_AD_FORMATS } from '../constants/actions';
import { apiGetAdFormatsByMedium } from '../api/index';
import { adFormatsUrl } from '../api/urls';

export const fetchAdFormats = createAction(FETCH_AD_FORMATS, (user, medium) => apiGetAdFormatsByMedium(adFormatsUrl, user, medium)());
export const clearAdFormats = createAction(CLEAR_AD_FORMATS);