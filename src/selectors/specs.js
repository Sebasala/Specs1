import { createSelector } from 'reselect';

export const getSpecs = state => state.specs.list;
export const getViewedSpec = state => state.specs.view;
export const getSelectedSpecs = state => state.specs.selected;
export const getSpecById = createSelector(
  (state, props) => state.specs.list.find(s => s.id === props.specId),
  spec => spec
);
export const getCreateSpec = state => state.specs.create;
//export const getNewSpecCampaignById = state => (state.specs.create && state.specs.create.campaign) ? state.campaigns.find(c => c.id === state.specs.create.campaign) : {};
export const getAddSpecMediumById = state => (state.specs.create && state.specs.create.medium) ? state.mediums.find(c => c.id === state.specs.create.medium) : undefined;
export const getAddSpecAdFormatById = state => (state.specs.create && state.specs.create.format) ? state.adFormats.find(c => c.id === state.specs.create.format) : undefined;
export const getAddSpecCreativeById = state => (state.specs.create && state.specs.create.creative) ? state.creatives.find(c => c.id === state.specs.create.creative) : undefined;
export const getAddSpecContentById = state => (state.specs.create && state.specs.create.content) ? state.contents.list.find(c => c.id === state.specs.create.content) : undefined;
export const getAddSpecContentFormatById = state => (state.specs.create && state.specs.create.contentFormat) ? state.contentFormats.find(c => c.id === state.specs.create.contentFormat) : undefined;

export const getNewSpec = state => state.specs.new;
export const getNewSpecMediumById = state => (state.specs.new && state.specs.new.medium) ? state.mediums.find(c => c.id === state.specs.new.medium) : undefined;
export const getNewSpecAdFormatById = state => (state.specs.new && state.specs.new.format) ? state.adFormats.find(c => c.id === state.specs.new.format) : undefined;
export const getNewSpecCreativeById = state => (state.specs.new && state.specs.new.creative) ? state.creatives.find(c => c.id === state.specs.new.creative) : undefined;
export const getNewSpecContentTypeById = state => (state.specs.new && state.specs.new.contentTmp && state.specs.new.contentTmp.contentType) ? state.specs.new.contentTmp.contentType : undefined;
export const getNewSpecContentFormatById = state => (state.specs.new && state.specs.new.contentTmp && state.specs.new.contentTmp.contentFormat) ? state.specs.new.contentTmp.contentFormat : undefined;
export const getNewSpecContent = state => (state.specs.new && state.specs.new.content) ? state.specs.new.content : undefined;
export const getNewSpecContentTmp = state => (state.specs.new && state.specs.new.contentTmp) ? state.specs.new.contentTmp : undefined;
export const getNewSpecContentView = state => (state.specs.new && state.specs.new.contentView) ? state.specs.new.contentView : undefined;