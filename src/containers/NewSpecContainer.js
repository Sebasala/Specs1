import React, { Component } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import NewSpecCreativeDetailComponent from '../components/spec/NewSpecCreativeDetailComponent';
import NewSpecContentDetailComponent from '../components/spec/NewSpecContentDetailComponent';
import CreateMediumComponent from '../components/CreateMediumComponent';
import NewSpecContentComponent from '../components/spec/NewSpecContentComponent';
import PropTypes from 'prop-types';
import { getCampaigns, getCampaignById } from '../selectors/campaigns';
import { getNewSpec,
  getNewSpecMediumById,
  getNewSpecAdFormatById,
  getNewSpecCreativeById,
  getNewSpecContentTypeById,
  getNewSpecContentFormatById,
  getNewSpecContent,
  getNewSpecContentTmp,
  getNewSpecContentView } from '../selectors/specs';
import { getMediums } from '../selectors/mediums';
import { getAdFormats } from '../selectors/adFormats';
import { getCreatives } from '../selectors/creatives';
import { getContentTypes } from '../selectors/contentTypes';
import { getContentFormats } from '../selectors/contentFormats';
import { clearNewSpec,
  setNewSpecMedium,
  setNewSpecAdFormat,
  setNewSpecCreative,
  setNewSpecCreativeDetail,
  setNewSpecCreativeImage,
  setNewSpecContentType,
  setNewSpecContentFormat,
  setNewSpecContentDetail,
  setNewSpecContent,
  setNewSpecContentView,
  createSpec,

  fetchMediums,
  clearMediums,
  fetchAdFormats,
  clearAdFormats,
  fetchCreatives,
  clearCreatives,
  fetchContentTypes,
  fetchContentFormats } from '../actions/index';
import { getUser } from '../selectors/user';

class NewSpecContainer extends Component {

  componentDidMount() {
    const { location: { pathname }, user } = this.props;
    if (pathname.includes('/creative')) {
      this.props.clearNewSpec();
      this.props.fetchMediums(user);
    } else if (pathname.includes('/content')){
      this.props.clearMediums();
      this.props.clearAdFormats();
      this.props.fetchMediums(user);
      this.props.history.push('/new/spec/creative');
    }
  }

  handleMediumChange = event => {
    const mediumId = event.target.value;
    this.props.fetchAdFormats(this.props.user, mediumId);
    this.props.setNewSpecMedium(mediumId);
    this.props.setNewSpecAdFormat();
  }

  handleAdFormatChange = event => {
    const adFormatId = event.target.value;
    this.props.fetchCreatives(this.props.user, adFormatId);
    this.props.setNewSpecAdFormat(adFormatId);
  }

  handleCreativeChange = event => {
    const creativeId = event.target.value;
    this.props.setNewSpecCreative(creativeId);
  }

  handleCreativeSubmitSuccess = () => {
    this.props.history.push('/new/spec/creative/detail');
  }

  handleCreativeSubmit = values => {
  }

  handleCreativeImageChange = event => {
    const file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = (event) => {
      const content = fileReader.result;
      this.props.setNewSpecCreativeImage(content);
    };
    fileReader.readAsDataURL(file);
  }

  handleCreativeDetailSubmitSuccess = () => {
    this.props.fetchContentTypes(this.props.user);
    this.props.history.push('/new/spec/content');
  }

  handleCreativeDetailSubmit = values => {
    const { name, text, title, description } = values;
    this.props.setNewSpecCreativeDetail({ name, text, title, description });
  }

  handleContentTypeChange = event => {
    const { fetchContentFormats, setNewSpecContentType, setNewSpecContentFormat, contentTypes, user } = this.props;
    const contentTypeId = event.target.value;
    const contentType = contentTypes.find(ct => ct.id === contentTypeId);
    fetchContentFormats(user, contentType.id);
    setNewSpecContentType(contentType);
    setNewSpecContentFormat();
  }

  handleContentFormatChange = event => {
    const { setNewSpecContentFormat, contentFormats } = this.props;
    const contentFormatId = event.target.value;
    const contentFormat = contentFormats.find(cf => cf.id === contentFormatId);
    setNewSpecContentFormat(contentFormat);
  }

  handleContentSubmitSuccess = () => {
    this.props.history.push('/new/spec/content/detail');
  }

  handleContentSubmit = values => {
  }

  handleContentDetailSubmitSuccess = () => {
  }

  handleContentDetailSubmit = values => {
    const { size, weight, length, observation } = values;
    this.props.setNewSpecContentDetail({ size, weight, length, observation });
    this.props.setNewSpecContent();
    this.props.history.push('/new/spec/content');
  }

  handleBack = () => {
    this.props.history.goBack();
  }

  handleContentShow = contentId => {
    this.props.setNewSpecContentView(contentId);
  }

  handleSaveSpec = () => {
    this.props.createSpec(this.props.user, this.props.newSpec);
    this.props.history.push('/new/spec/creative');
  }

  render() {
    const { mediums, medium, adFormats, adFormat, creatives, creative, contentTypes, contentType, contentFormats, contentFormat, newSpec, contents, contentView } = this.props;
    return (
      <div>
        <Route exact path={'/new/spec/creative'}
          render={() => <CreateMediumComponent mediums={mediums} medium={medium}
            adFormats={(medium && Object.keys(medium).length > 0) ? adFormats : []} adFormat={adFormat}
            creatives={(adFormat && Object.keys(adFormat).length > 0) ? creatives : []} creative={creative}
            onMediumChange={this.handleMediumChange}
            onAdFormatChange={this.handleAdFormatChange}
            onCreativeChange={this.handleCreativeChange}
            onSubmitSuccess={this.handleCreativeSubmitSuccess}
            onSubmit={this.handleCreativeSubmit}
            onBack={this.handleBack}
          />}
        />
        <Route exact path={'/new/spec/creative/detail'}
          render={() => <NewSpecCreativeDetailComponent mediums={mediums} medium={medium}
            adFormats={(medium && Object.keys(medium).length > 0) ? adFormats : []} adFormat={adFormat}
            creatives={(adFormat && Object.keys(adFormat).length > 0) ? creatives : []} creative={creative}
            onSubmitSuccess={this.handleCreativeDetailSubmitSuccess}
            onSubmit={this.handleCreativeDetailSubmit}
            onBack={this.handleBack}
            onImageChange={this.handleCreativeImageChange}
          />}
        />
        <Route exact path={'/new/spec/content'}
          render={() => <NewSpecContentComponent medium={medium}
            adFormat={adFormat} creative={creative}
            contentTypes={contentTypes} contentType={contentType}
            contentFormats={contentFormats} contentFormat={contentFormat}
            onContentTypeChange={this.handleContentTypeChange}
            onContentFormatChange={this.handleContentFormatChange}
            onSubmitSuccess={this.handleContentSubmitSuccess}
            onSubmit={this.handleContentSubmit}
            onBack={this.handleBack}
            contents={contents}
            contentView={contentView}
            onContentClick={this.handleContentShow}
            onSaveSpec={this.handleSaveSpec}
          />}
        />
        <Route exact path={'/new/spec/content/detail'}
          render={() => <NewSpecContentDetailComponent mediums={mediums} medium={medium}
            adFormats={(medium && Object.keys(medium).length > 0) ? adFormats : []} adFormat={adFormat}
            creatives={(adFormat && Object.keys(adFormat).length > 0) ? creatives : []} creative={creative}
            onSubmitSuccess={this.handleContentDetailSubmitSuccess}
            onSubmit={this.handleContentDetailSubmit}
            onBack={this.handleBack}
          />}
        />
      </div>
    );
  }
}

NewSpecContainer.propTypes = {
  campaigns: PropTypes.array.isRequired,
};

const mapStateToProps = (state, props) => ({
  user: getUser(state),
  campaigns: getCampaigns(state),
  campaign: getCampaignById(state, props),
  mediums: getMediums(state),
  medium: getNewSpecMediumById(state),
  adFormats: getAdFormats(state),
  adFormat: getNewSpecAdFormatById(state),
  creatives: getCreatives(state),
  creative: getNewSpecCreativeById(state),
  contentTypes: getContentTypes(state),
  contentType: getNewSpecContentTypeById(state),
  contentFormats: getContentFormats(state),
  contentFormat: getNewSpecContentFormatById(state),
  contents: getNewSpecContent(state),
  contentTmp: getNewSpecContentTmp(state),
  contentView: getNewSpecContentView(state),
  newSpec: getNewSpec(state),
});

const mapDispatchToProps = {
  setNewSpecMedium, setNewSpecAdFormat, setNewSpecCreative,
  setNewSpecCreativeDetail, setNewSpecCreativeImage,
  setNewSpecContentType, setNewSpecContentFormat,
  setNewSpecContentDetail, setNewSpecContent,
  fetchMediums, clearMediums, fetchAdFormats, clearAdFormats,
  fetchCreatives, clearCreatives, fetchContentTypes, fetchContentFormats, clearNewSpec,
  setNewSpecContentView, createSpec };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewSpecContainer));