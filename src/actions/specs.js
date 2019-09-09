import { createAction } from 'redux-actions';
import {
  FETCH_SPECS,
  ADD_SPEC,
  REMOVE_SPEC,
  SELECT_SPEC,
  DESELECT_SPEC,
  SET_SPECS_SELECTED,
  VIEW_SPEC,
  CLEAR_SPEC,
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
  CREATE_CAMPAIGN_SPEC,
  DELETE_CAMPAIGN_SPEC,

  SET_SPEC_CAMPAIGN,
  SET_SPEC_MEDIUM,
  SET_SPEC_AD_FORMAT,
  SET_SPEC_CREATIVE,
  SET_SPEC_CONTENT,
  SET_SPEC_CONTENT_FORMAT
} from '../constants/actions';
import {
  apiGetSpecsByCampaign,
  apiPostSpec,
  apiPostCampaignSpec,
  apiDeleteSpec
} from '../api/index';
import { specsUrl, creativesUrl, contentsUrl } from '../api/urls';

export const fetchSpecs = createAction(FETCH_SPECS, (user, campaign) => apiGetSpecsByCampaign(specsUrl, user, campaign)());
export const addSpec = createAction(ADD_SPEC, id => id);
export const removeSpec = createAction(REMOVE_SPEC, id => id);
export const selectSpec = createAction(SELECT_SPEC, id => id);
export const deselectSpec = createAction(DESELECT_SPEC, id => id);
export const setSpecsSelected = createAction(SET_SPECS_SELECTED);
export const viewSpec = createAction(VIEW_SPEC, id => id);
export const clearSpec = createAction(CLEAR_SPEC);

export const clearNewSpec = createAction(CLEAR_NEW_SPEC);
export const setNewSpecMedium = createAction(SET_NEW_SPEC_MEDIUM);
export const setNewSpecAdFormat = createAction(SET_NEW_SPEC_AD_FORMAT);
export const setNewSpecCreative = createAction(SET_NEW_SPEC_CREATIVE);
export const setNewSpecCreativeDetail = createAction(SET_NEW_SPEC_CREATIVE_DETAIL);
export const setNewSpecCreativeImage = createAction(SET_NEW_SPEC_CREATIVE_IMAGE);
export const setNewSpecContentType = createAction(SET_NEW_SPEC_CONTENT_TYPE_TMP);
export const setNewSpecContentFormat = createAction(SET_NEW_SPEC_CONTENT_FORMAT_TMP);
export const setNewSpecContentDetail = createAction(SET_NEW_SPEC_CONTENT_DETAIL_TMP);
export const setNewSpecContent = createAction(SET_NEW_SPEC_CONTENT);
export const setNewSpecContentView = createAction(SET_NEW_SPEC_CONTENT_VIEW);
export const createSpec = createAction(CREATE_SPEC, (user, spec) => apiPostSpec(creativesUrl, contentsUrl, user, spec)());
export const createCampaignSpec = createAction(CREATE_CAMPAIGN_SPEC, (user, spec) => apiPostCampaignSpec(specsUrl, user, spec)());
export const deleteCampaignSpec = createAction(DELETE_CAMPAIGN_SPEC, (user, specId) => apiDeleteSpec(specsUrl, user, specId)());

export const setSpecCampaign = createAction(SET_SPEC_CAMPAIGN);
export const setSpecMedium = createAction(SET_SPEC_MEDIUM);
export const setSpecAdFormat = createAction(SET_SPEC_AD_FORMAT);
export const setSpecCreative = createAction(SET_SPEC_CREATIVE);
export const setSpecContent = createAction(SET_SPEC_CONTENT);
export const setSpecContentFormat = createAction(SET_SPEC_CONTENT_FORMAT);