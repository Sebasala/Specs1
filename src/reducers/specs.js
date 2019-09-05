import { handleActions } from 'redux-actions';
import {
  FETCH_SPECS,
  SELECT_SPEC,
  ADD_SPEC,
  SET_SPECS_SELECTED,
  DESELECT_SPEC,
  REMOVE_SPEC,
  VIEW_SPEC,
  CLEAR_SPEC,
  SET_SPEC_CAMPAIGN,
  SET_SPEC_MEDIUM,
  SET_SPEC_AD_FORMAT,
  SET_SPEC_CREATIVE,
  SET_SPEC_CONTENT,
  SET_SPEC_CONTENT_FORMAT,
  CLEAR_NEW_SPEC,
  SET_NEW_SPEC_MEDIUM,
  SET_NEW_SPEC_AD_FORMAT,
  SET_NEW_SPEC_CREATIVE,
  SET_NEW_SPEC_CREATIVE_DETAIL,
  SET_NEW_SPEC_CREATIVE_IMAGE,
  SET_NEW_SPEC_CONTENT_TYPE_TMP,
  SET_NEW_SPEC_CONTENT_FORMAT_TMP,
  SET_NEW_SPEC_CONTENT_DETAIL_TMP,
  SET_NEW_SPEC_CONTENT,
  SET_NEW_SPEC_CONTENT_VIEW,
  CREATE_SPEC,
  CREATE_CAMPAIGN_SPEC
} from '../constants/actions';

export const specs = handleActions({
  [FETCH_SPECS]: (state, action) => ({ ...state, list: [...action.payload] }),
  [SELECT_SPEC]: (state, action) => {
    const specList = [...state.list].map(spec => {
      if (spec.id === action.payload) {
        spec.selected = true;
      }
      return spec;
    });
    return { ...state, list: specList };
  },
  [DESELECT_SPEC]: (state, action) => {
    const specList = [...state.list].map(spec => {
      if (spec.id === action.payload) {
        spec.selected = false;
      }
      return spec;
    });
    return { ...state, list: specList };
  },
  [ADD_SPEC]: (state, action) => {
    const spec = state.list.find(s => s.id === action.payload);
    return { ...state, selected: [...state.selected, spec] };
  },
  [REMOVE_SPEC]: (state, action) => {
    const selectedSpecs = state.selected.filter(s => s.id !== action.payload);
    return { ...state, selected: [...selectedSpecs] };
  },
  [VIEW_SPEC]: (state, action) => {
    let spec = state.list.find(s => s.id === action.payload);
    spec = spec ? { ...spec } : {};
    return { ...state, view: spec };
  },
  [SET_SPECS_SELECTED]: (state, action) => {
    const specList = [...state.list].map(spec => {
      if ([...state.selected].findIndex(ss => ss.id === spec.id) !== -1) {
        spec.selected = true;
      }
      return spec;
    });
    return { ...state, list: specList };
  },
  [CLEAR_SPEC]: (state, action) => {
    return { ...state, create: {} };
  },
  [SET_SPEC_CAMPAIGN]: (state, action) => {
    const campaign = action.payload;
    return { ...state, create: { ...state.create, campaign } };
  },
  [SET_SPEC_MEDIUM]: (state, action) => {
    const medium = action.payload;
    return { ...state, create: { ...state.create, medium } };
  },
  [SET_SPEC_AD_FORMAT]: (state, action) => {
    const format = action.payload;
    return { ...state, create: { ...state.create, format } };
  },
  [SET_SPEC_CREATIVE]: (state, action) => {
    const creative = action.payload;
    return { ...state, create: { ...state.create, creative } };
  },
  [SET_SPEC_CONTENT]: (state, action) => {
    const content = action.payload;
    return { ...state, create: { ...state.create, content } };
  },
  [SET_SPEC_CONTENT_FORMAT]: (state, action) => {
    const contentFormat = action.payload;
    return { ...state, create: { ...state.create, contentFormat } };
  },
  [CLEAR_NEW_SPEC]: (state, action) => {
    return { ...state, new: {} };
  },
  [SET_NEW_SPEC_MEDIUM]: (state, action) => {
    const medium = action.payload;
    return { ...state, new: { ...state.new, medium } };
  },
  [SET_NEW_SPEC_AD_FORMAT]: (state, action) => {
    const format = action.payload;
    return { ...state, new: { ...state.new, format } };
  },
  [SET_NEW_SPEC_CREATIVE]: (state, action) => {
    const creative = action.payload;
    return { ...state, new: { ...state.new, creative } };
  },
  [SET_NEW_SPEC_CREATIVE_DETAIL]: (state, action) => {
    const creative = action.payload;
    return { ...state, new: { ...state.new, creative: { ...state.new.creative, ...creative } } };
  },
  [SET_NEW_SPEC_CREATIVE_IMAGE]: (state, action) => {
    const base64Image = action.payload;
    return { ...state, new: { ...state.new, creative: { ...state.new.creative, image: base64Image } } };
  },
  [SET_NEW_SPEC_CONTENT_TYPE_TMP]: (state, action) => {
    const contentType = action.payload;
    return { ...state, new: { ...state.new, contentTmp: { ...state.new.contentTmp, contentType } } };
  },
  [SET_NEW_SPEC_CONTENT_FORMAT_TMP]: (state, action) => {
    const contentFormat = action.payload;
    return { ...state, new: { ...state.new, contentTmp: { ...state.new.contentTmp, contentFormat } } };
  },
  [SET_NEW_SPEC_CONTENT_DETAIL_TMP]: (state, action) => {
    const detail = action.payload;
    return { ...state, new: { ...state.new, contentTmp: { ...state.new.contentTmp, ...detail } } };
  },
  [SET_NEW_SPEC_CONTENT]: (state, action) => {
    const contentTmp = state.new.contentTmp;
    const content = {};
    content[contentTmp.contentType.id] = { ...contentTmp };
    return { ...state, new: { ...state.new, contentTmp: {}, content: { ...state.new.content, ...content } } };
  },
  [SET_NEW_SPEC_CONTENT_VIEW]: (state, action) => {
    return { ...state, new: { ...state.new, contentTmp: {}, contentView: action.payload } };
  },
  [CREATE_SPEC]: (state, action) => {
    return { ...state, new: {} };
  },
  [CREATE_CAMPAIGN_SPEC]: (state, action) => {
    return { ...state, create: {} };
  },
}, { list: [], selected: [], create: {}, view: {}, new: {} });