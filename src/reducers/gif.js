import { handleActions } from 'redux-actions';
import {
  SET_VIDEO_DATA,
  SET_VIDEO_METADATA,
  SET_GIF_DATA,
  SET_GIF_METADATA,
} from '../constants/actions';

export const gif = handleActions({
  [SET_VIDEO_DATA]: (state, action) => ({ ...state, video: { ...state.video, data: action.payload } }),
  [SET_VIDEO_METADATA]: (state, action) => ({ ...state, video: { ...state.video, metadata: action.payload } }),
  [SET_GIF_DATA]: (state, action) => ({ ...state, gif: { ...state.gif, data: action.payload } }),
  [SET_GIF_METADATA]: (state, action) => ({ ...state, gif: { ...state.gif, metadata: action.payload } })
}, { video: {}, gif: {} });