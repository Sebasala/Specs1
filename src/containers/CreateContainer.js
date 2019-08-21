import React, { Component } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import CreateComponent from '../components/CreateComponent';
import AddMediumComponent from '../components/AddMediumComponent';
import AddContentComponent from '../components/AddContentComponent';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import { getCampaigns, getCampaignById } from '../selectors/campaigns';
import { getCreateSpec,
  getAddSpecMediumById,
  getAddSpecAdFormatById,
  getAddSpecCreativeById,
  getAddSpecContentById,
  getAddSpecContentFormatById } from '../selectors/specs';
import { getMediums } from '../selectors/mediums';
import {
  createCampaign,
  fetchCampaigns,
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
  fetchContents } from './../actions/index';
import { getAdFormats } from './../selectors/adFormats';
import { getCreatives } from './../selectors/creatives';
import { getContentTypes } from './../selectors/contentTypes';
import { getContentFormats } from './../selectors/contentFormats';
import { getUser } from './../selectors/user';
import { getContents } from './../selectors/contents';
import { getSelectedUserAccount } from './../selectors/accounts';

class CreateContainer extends Component {

  componentDidMount() {
    const { location: { pathname }, campaign, user, campaignId } = this.props;
    if (pathname.includes('/campaign')) {
      this.props.clearSpec();
    } else if (pathname.includes('/medium')) {
      this.props.clearMediums();
      this.props.clearAdFormats();
      this.props.clearCreatives();
      this.props.clearSpec();
      this.props.setSpecCampaign(campaignId ? campaignId : campaign.id);
      this.props.fetchMediums(user);
    } else if (pathname.includes('/content')) {
      this.props.clearMediums();
      this.props.clearAdFormats();
      this.props.clearCreatives();
      this.props.clearSpec();
      this.props.history.push('/create/campaign');
    }
  }

  handleCampaignChange = event => {
    const campaignId = event.target.value;
    this.props.setSpecCampaign(campaignId);
  }

  handleCampaignSubmitSuccess = () => {
    this.props.clearMediums();
    this.props.clearAdFormats();
    this.props.clearCreatives();
    this.props.fetchMediums(this.props.user);
    this.props.history.push('/create/medium');
  }

  handleCampaignSubmit = values => {
    if (values.name && !values.campaign){
      return this.props.createCampaign(this.props.user, { name: values.name, account: this.props.account.id })
        .then(res => {
          this.props.setSpecCampaign(res.payload.id);
          this.props.fetchCampaigns(this.props.user, this.props.account.id);
        }).catch(err => {
          throw new SubmissionError(err);
        });
    }
  }

  handleMediumChange = event => {
    const mediumId = event.target.value;
    this.props.fetchAdFormats(this.props.user, mediumId);
    this.props.clearCreatives();
    this.props.setSpecMedium(mediumId);
    this.props.setSpecAdFormat('');
    this.props.setSpecCreative('');
  }

  handleAdFormatChange = event => {
    const adFormatId = event.target.value;
    this.props.fetchCreatives(this.props.user, adFormatId);
    this.props.setSpecAdFormat(adFormatId);
    this.props.setSpecCreative('');
  }

  handleCreativeChange = event => {
    const creativeId = event.target.value;
    this.props.setSpecCreative(creativeId);
    this.props.fetchContents(this.props.user, creativeId);
  }

  handleMediumSubmitSuccess = () => {
    this.props.history.push('/create/content');
  }

  handleMediumSubmit = values => {
  }

  handleContentChange = event => {
    const contentId = event.target.value;
    this.props.setSpecContent(contentId);
  }

  handleContentSubmitSuccess = () => {
    this.props.clearSpec();
    this.props.history.push(`/account/${this.props.account.id}`);
  }

  handleContentSubmit = values => {
    const  { user, campaign } = this.props;
    return this.props.createCampaignSpec(this.props.user, { quantity: values.quantity,
      content: this.props.addSpec.content, campaign: this.props.addSpec.campaign })
      .then(res => {
        this.props.fetchSpecs(user, campaign.id);
      });
  }

  handleBack = () => {
    this.props.history.goBack();
  }

  renderCreateMediumComponent = (campaign, mediums, medium, adFormats, adFormat, creatives, creative, createSpec) => (
    <AddMediumComponent campaign={campaign} mediums={(campaign && Object.keys(campaign).length > 0) ? mediums : []} medium={medium}
      adFormats={(medium && Object.keys(medium).length > 0) ? adFormats : []} adFormat={adFormat}
      creatives={(adFormat && Object.keys(adFormat).length > 0) ? creatives : []} creative={creative}
      onMediumChange={this.handleMediumChange}
      onAdFormatChange={this.handleAdFormatChange}
      onCreativeChange={this.handleCreativeChange}
      onSubmitSuccess={this.handleMediumSubmitSuccess}
      onSubmit={this.handleMediumSubmit}
      newSpec={createSpec}
      onBack={this.handleBack}
    />)

  render() {
    const { campaigns, campaign, mediums, medium, adFormats, adFormat, creatives, creative, contents, content, contentFormats, contentFormat, createSpec } = this.props;
    return (
      <div>
        <Route path={'/create/campaign'}
          render={() => <CreateComponent campaigns={campaigns} campaign={campaign}
            onCampaignChange={this.handleCampaignChange}
            onSubmitSuccess={this.handleCampaignSubmitSuccess}
            onSubmit={this.handleCampaignSubmit}
            newSpec={createSpec}
            onBack={this.handleBack}
          />}
        />
        <Switch>
          <Route path={'/create/:campaignId/medium'}
            render={() => this.renderCreateMediumComponent(campaign, mediums, medium, adFormats, adFormat, creatives, creative, createSpec)}
          />
          <Route path={'/create/medium'}
            render={() => this.renderCreateMediumComponent(campaign, mediums, medium, adFormats, adFormat, creatives, creative, createSpec)}
          />
        </Switch>
        <Route path={'/create/content'}
          render={() => <AddContentComponent campaign={campaign} medium={medium}
            quantity={1}
            adFormat={adFormat} creative={creative}
            contents={contents} content={content}
            contentFormats={contentFormats} contentFormat={contentFormat}
            onContentChange={this.handleContentChange}
            onContentFormatChange={this.handleContentFormatChange}
            onSubmitSuccess={this.handleContentSubmitSuccess}
            onSubmit={this.handleContentSubmit}
            newSpec={createSpec}
            onBack={this.handleBack}
            //onAddSpec={this.handleAddSpec}
          />}
        />
      </div>
    );
  }
}

CreateContainer.propTypes = {
  campaigns: PropTypes.array.isRequired,
};

const mapStateToProps = (state, props) => ({
  user: getUser(state),
  account: getSelectedUserAccount(state),
  campaigns: getCampaigns(state),
  campaign: getCampaignById(state, props),
  mediums: getMediums(state),
  medium: getAddSpecMediumById(state),
  adFormats: getAdFormats(state),
  adFormat: getAddSpecAdFormatById(state),
  creatives: getCreatives(state),
  creative: getAddSpecCreativeById(state),
  contents: getContents(state),
  content: getAddSpecContentById(state),
  contentTypes: getContentTypes(state),
  contentFormats: getContentFormats(state),
  contentFormat: getAddSpecContentFormatById(state),
  addSpec: getCreateSpec(state),
});

const mapDispatchToProps = {
  fetchSpecs, createCampaign, fetchCampaigns,
  setSpecCampaign, setSpecMedium, setSpecAdFormat, setSpecCreative,
  setSpecContent, setSpecContentFormat, fetchMediums, clearMediums, fetchAdFormats, clearAdFormats,
  fetchCreatives, clearCreatives, fetchContentTypes, fetchContentFormats, clearSpec, fetchContents, createCampaignSpec };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateContainer));