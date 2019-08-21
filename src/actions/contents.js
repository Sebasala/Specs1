import { createAction } from 'redux-actions';
import { FETCH_CONTENTS } from '../constants/actions';
import { apiGetContentsByCreative } from '../api/index';
import { contentsUrl } from '../api/urls';

export const fetchContents = createAction(FETCH_CONTENTS, (user, creative) => apiGetContentsByCreative(contentsUrl, user, creative)());