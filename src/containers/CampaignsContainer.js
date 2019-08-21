import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import CampaignsComponent from '../components/CampaignsComponent';
import { getUserAccountById } from '../selectors/accounts';
import {
  fetchCampaigns,
  fetchSpecs,
  removeSpec,
  deselectSpec,
  selectUserAccount } from '../actions/index';
import { getCampaigns } from '../selectors/campaigns';
import { getSelectedSpecs, getSpecs } from '../selectors/specs';
import { compareStringDate } from './../helpers/utils';
import { exportSpecs } from '../helpers/utils';
import { getUser } from '../selectors/user';

class CampaignsContainer extends Component {

  componentDidMount(){
    this.props.selectUserAccount(this.props.accountId);
    this.props.fetchCampaigns(this.props.user, this.props.accountId);
  }

  handleExport = () => {
    const { selectedSpecs } = this.props;
    exportSpecs(selectedSpecs);
  }

  handleExportCampaign = campaignId => {
    const { user, fetchSpecs } = this.props;
    fetchSpecs(user, campaignId)
      .then(res => {
        exportSpecs(res.payload);
      });
  }

  handleRemoveSpec = id => {
    const { removeSpec, deselectSpec } = this.props;
    removeSpec(id);
    deselectSpec(id);
  }

  render() {
    const { campaigns, selectedSpecs, account } = this.props;
    campaigns.sort(compareStringDate);
    return (
      <CampaignsComponent
        campaigns={campaigns.slice(0, -1)}
        lastCampaign={campaigns.slice(-1)}
        urlPath={'campaign'}
        selectedSpecs={selectedSpecs}
        account={account}
        onRemoveSpec={this.handleRemoveSpec}
        onExport={this.handleExport}
        onExportCampaign={this.handleExportCampaign} />
    );
  }
}

CampaignsContainer.propTypes = {
  fetchCampaigns: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired,
  campaigns: PropTypes.array.isRequired,
  accountId: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => ({
  user: getUser(state),
  account: getUserAccountById(state, props),
  campaigns: getCampaigns(state),
  selectedSpecs: getSelectedSpecs(state),
  specs: getSpecs(state),
});

const mapDispatchToProps = { fetchCampaigns, fetchSpecs, removeSpec, deselectSpec, selectUserAccount };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampaignsContainer));