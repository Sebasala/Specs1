import { createAction } from 'redux-actions';
import {
  SET_VIDEO_DATA,
  SET_VIDEO_METADATA,
  SET_GIF_DATA,
  SET_GIF_METADATA,
  VERIFY_DRIVE_CONNECTION,
  SAVE_DRIVE_CONNECTION_TOKEN
} from '../constants/actions';
import {
  apiVerifyDriveConnection
} from '../api';
import { gifsUrl } from '../api/urls';

export const setVideoData = createAction(SET_VIDEO_DATA);
export const setVideoMetadata = createAction(SET_VIDEO_METADATA);
export const setGifData = createAction(SET_GIF_DATA);
export const setGifMetadata = createAction(SET_GIF_METADATA);

export const verifyDriveConnection = createAction(VERIFY_DRIVE_CONNECTION, (user) => apiVerifyDriveConnection(gifsUrl, user)());
export const saveDriveConnectionToken = createAction(SAVE_DRIVE_CONNECTION_TOKEN, (user, code) => apiVerifyDriveConnection(gifsUrl, user)());