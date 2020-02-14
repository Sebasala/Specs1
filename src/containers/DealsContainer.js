import React, { Component } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import CreateComponent from '../components/CreateComponent';
import AddMediumComponent from '../components/AddMediumComponent';
import AddContentComponent from '../components/AddContentComponent';
import DealsComponent from '../components/DealsComponent';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import { getCampaigns, getCampaignById } from '../selectors/campaigns';
import {
  getCreateSpec,
  getAddSpecMediumById,
  getAddSpecAdFormatById,
  getAddSpecCreativeById,
  getAddSpecContentById,
  getAddSpecContentFormatById
} from '../selectors/specs';
import { getMediums } from '../selectors/mediums';
import {
  createAccountCampaign,
  fetchAccountCampaigns,
  fetchSpecs,

  fetchMediums,
  clearMediums,
  fetchAdFormats,
  clearAdFormats,
  fetchCreatives,
  clearCreatives,
  fetchContentTypes,
  fetchContentFormats,
  clearSpec,
  createCampaignSpec,

  setSpecCampaign,
  setSpecMedium,
  setSpecAdFormat,
  setSpecCreative,
  setSpecContent,
  setSpecContentFormat,
  fetchContents
} from '../actions/index';
import { getAdFormats } from '../selectors/adFormats';
import { getCreatives } from '../selectors/creatives';
import { getContentTypes } from '../selectors/contentTypes';
import { getContentFormats } from '../selectors/contentFormats';
import { getUser } from '../selectors/user';
import { getContents } from '../selectors/contents';
import { getSelectedUserAccount } from '../selectors/accounts';

class DealsContainer extends Component {

  componentDidMount() {

  }

  handleBack = () => {
    this.props.history.goBack();
  }

  render() {
    const {  } = this.props;
    const mediums = [{ id: 1, name: 'Twitter' }, { id: 2, name: 'La Patria' }];
    const deals = [{id: 1, name: 'PMP'}, {id: 2, name: 'Preferente Fixed'}];
    const countries = [{ id: 1, name: 'CO' }, { id: 2, name: 'BR' }];
    const formats = [{ id: 1, name: 'Display' }, { id: 2, name: 'Video' }];
    return (
      <DealsComponent mediums={mediums} deals={deals} countries={countries} formats={formats} ></DealsComponent>
    );
  }
}

DealsContainer.propTypes = {

};

const mapStateToProps = (state, props) => ({
  user: getUser(state)
});

const mapDispatchToProps = {

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DealsContainer));