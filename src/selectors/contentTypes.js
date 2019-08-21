import { createSelector } from 'reselect';

export const getContentTypes = state => state.contentTypes;
export const getContentTypeById = createSelector(
  (state, props) => state.contentTypes.find(ct => ct.id === props.contentTypeId),
  contentType => contentType
);