import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { accounts } from './accounts';
import { user } from './user';
import { specs } from './specs'
import { campaigns } from './campaigns';
import { mediums } from './mediums';
import { adFormats} from './adFormats';
import { creatives } from './creatives';
import { contentTypes } from './contentTypes';
import { contentFormats } from './contentFormats';
import { contents } from './contents';
import { users } from './users';

export default combineReducers({
  form: reduxForm,
  accounts,
  user,
  users,
  campaigns,
  specs,
  mediums,
  adFormats,
  creatives,
  contents,
  contentTypes,
  contentFormats
});