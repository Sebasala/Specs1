import { createAction } from 'redux-actions';
import {
  FETCH_CONTENT_FORMATS,
  CLEAR_CONTENT_FORMATS } from '../constants/actions';
import { apiGetContentFormatsByContentType } from '../api/index';
import { contentFormatsUrl } from './../api/urls';

export const fetchContentFormats = createAction(FETCH_CONTENT_FORMATS, (user, contentType) => apiGetContentFormatsByContentType(contentFormatsUrl, user, contentType)());
export const clearContentFormats = createAction(CLEAR_CONTENT_FORMATS);