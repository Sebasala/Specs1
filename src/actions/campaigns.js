import { createAction } from 'redux-actions';
import { apiGetCampaignsByAccount, apiPostCampaign } from '../api/index';
import { campaignsUrl } from '../api/urls';
import {
  CREATE_ACCOUNT_CAMPAIGN,
  FETCH_ACCOUNT_CAMPAIGNS
} from '../constants/actions';

export const createAccountCampaign = createAction(CREATE_ACCOUNT_CAMPAIGN, (user, campaign) => apiPostCampaign(campaignsUrl, user, campaign)());
export const fetchAccountCampaigns = createAction(FETCH_ACCOUNT_CAMPAIGNS, (user, account) => apiGetCampaignsByAccount(campaignsUrl, user, account)());