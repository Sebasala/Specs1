import { createAction } from 'redux-actions';
import {
  FETCH_CONTENT_TYPES,
  CLEAR_CONTENT_TYPES } from '../constants/actions';
import { apiGetContentTypes } from '../api/index';
import { contentTypesUrl } from '../api/urls';

export const fetchContentTypes = createAction(FETCH_CONTENT_TYPES, user => apiGetContentTypes(contentTypesUrl, user)());
export const clearContentTypes = createAction(CLEAR_CONTENT_TYPES);