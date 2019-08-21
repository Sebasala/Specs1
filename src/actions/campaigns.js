import { createAction } from 'redux-actions';
import { apiGetCampaignsByAccount, apiPostCampaign } from '../api/index';
import { campaignsUrl } from '../api/urls';
import {
  CREATE_CAMPAIGN,
  FETCH_CAMPAIGNS,
  FETCH_ACCOUNT_CAMPAIGNS } from '../constants/actions';

//TODO: Cambiar los nombres de las acciones
export const createCampaign = createAction(CREATE_CAMPAIGN, (user, campaign) => apiPostCampaign(campaignsUrl, user, campaign)());
export const fetchCampaigns = createAction(FETCH_CAMPAIGNS, (user, account) => apiGetCampaignsByAccount(campaignsUrl, user, account)());
export const fetchAccountCampaigns = createAction(FETCH_ACCOUNT_CAMPAIGNS, account => apiGetCampaignsByAccount(campaignsUrl, account)());