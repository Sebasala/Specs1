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
  viewSpec
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
    const { fetchSpecs, setSpecsSelected, campaignId, campaign, user } = this.props;
    fetchSpecs(user, campaignId).then(() => setSpecsSelected());
    const { account, ...gtmCampaign } = campaign;
    TagManager.dataLayer({
      dataLayer: {
        event: 'viewCampaign',
        campaign: gtmCampaign
      }
    });
  }

  handleExport = () => {
    const { selectedSpecs } = this.props;
    exportSpecs(selectedSpecs);
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
    const { user, fetchSpecs } = this.props;
    fetchSpecs(user, campaignId)
      .then(res => {
        exportSpecs(res.payload);
      });
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

const mapDispatchToProps = { fetchSpecs, addSpec, removeSpec, selectSpec, deselectSpec, setSpecsSelected, viewSpec };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpecsContainer));