import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import SpecsComponent from '../components/specs/SpecsComponent';
import {
  fetchSpecs,
  addSpec,
  removeSpec,
  selectSpec,
  deselectSpec,
  setSpecsSelected,
  viewSpec,
  deleteCampaignSpec,
  setLoaderVisibility
} from './../actions/index';
import { getCampaignById, getCampaigns } from '../selectors/campaigns';
import { getSpecs, getSelectedSpecs, getViewedSpec } from '../selectors/specs';
import { compareStringDate, exportSpecs } from './../helpers/utils';
import { getUser } from '../selectors/user';
import { getSelectedUserAccount } from '../selectors/accounts';
//TODO: GTM
import TagManager from 'react-gtm-module';

class SpecsContainer extends Component {

  componentDidMount() {
    const { fetchSpecs, viewSpec, setSpecsSelected, campaignId, campaign, user, setLoaderVisibility } = this.props;
    setLoaderVisibility(true);
    viewSpec(-1);
    fetchSpecs(user, campaignId).then(() => {
      setLoaderVisibility(false);
      setSpecsSelected();
    });
    const { account, ...gtmCampaign } = campaign;
    TagManager.dataLayer({
      dataLayer: {
        event: 'viewCampaign',
        campaign: gtmCampaign
      }
    });
  }

  handleExport = () => {
    const { selectedSpecs, setLoaderVisibility } = this.props;
    setLoaderVisibility(true);
    exportSpecs(selectedSpecs).then(() => setLoaderVisibility(false));
  }

  handleAddSpec = id => {
    const { addSpec, selectSpec } = this.props;
    addSpec(id);
    selectSpec(id);
  }

  handleRemoveSpec = id => {
    const { removeSpec, deselectSpec } = this.props;
    removeSpec(id);
    deselectSpec(id);
  }

  handleViewSpec = id => {
    const { viewSpec } = this.props;
    viewSpec(id);
  }

  handleExportCampaign = campaignId => {
    const { user, fetchSpecs, setLoaderVisibility } = this.props;
    setLoaderVisibility(true);
    fetchSpecs(user, campaignId)
      .then(res => {
        exportSpecs(res.payload).then(() => setLoaderVisibility(false));
      });
  }

  handleDeleteCampaignSpec = specId => {
    const { user, fetchSpecs, deleteCampaignSpec, campaignId, setLoaderVisibility } = this.props;
    setLoaderVisibility(true);
    deleteCampaignSpec(user, specId)
      .then(() => {
        fetchSpecs(user, campaignId).then(() => setLoaderVisibility(false));
      })
  }

  render() {
    const { specs, campaign, selectedSpecs, campaigns, viewedSpec } = this.props;
    specs.sort(compareStringDate);
    return (
      <SpecsComponent
        specs={specs} campaign={campaign}
        urlPath={'spec'} onAddSpec={this.handleAddSpec}
        onRemoveSpec={this.handleRemoveSpec} selectedSpecs={selectedSpecs}
        campaigns={campaigns} onExport={this.handleExport}
        onViewSpec={this.handleViewSpec} viewedSpec={viewedSpec}
        onExportCampaign={this.handleExportCampaign}
        onDeleteCampaignSpec={this.handleDeleteCampaignSpec}
      />
    );
  }
}

SpecsContainer.propTypes = {
  fetchSpecs: PropTypes.func.isRequired,
  campaign: PropTypes.object.isRequired,
  specs: PropTypes.array.isRequired,
  campaignId: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => ({
  user: getUser(state),
  account: getSelectedUserAccount(state),
  campaign: getCampaignById(state, props),
  campaigns: getCampaigns(state),
  specs: getSpecs(state),
  selectedSpecs: getSelectedSpecs(state),
  viewedSpec: getViewedSpec(state),
});

const mapDispatchToProps = { fetchSpecs, addSpec, removeSpec, selectSpec, deselectSpec, setSpecsSelected, viewSpec, deleteCampaignSpec, setLoaderVisibility };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpecsContainer));