import { createSelector } from 'reselect';

export const getCampaigns = state => state.campaigns.list;
export const getCampaignById = createSelector(
  (state, props) => (state.specs.create && state.specs.create.campaign) ? state.campaigns.list.find(c => c.id === state.specs.create.campaign) : state.campaigns.list.find(c => c.id === props.campaignId),
  campaign => campaign
);