import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import CampaignsComponent from '../components/CampaignsComponent';
import { getUserAccountById } from '../selectors/accounts';
import {
  fetchAccountCampaigns,
  fetchSpecs,
  removeSpec,
  deselectSpec,
  selectUserAccount,
  setLoaderVisibility
} from '../actions/index';
import { getCampaigns } from '../selectors/campaigns';
import { getSelectedSpecs, getSpecs } from '../selectors/specs';
import { compareStringDate } from './../helpers/utils';
import { exportSpecs } from '../helpers/utils';
import { getUser } from '../selectors/user';

class CampaignsContainer extends Component {

  componentDidMount() {
    const { selectUserAccount, fetchAccountCampaigns, accountId, user, setLoaderVisibility } = this.props;
    selectUserAccount(accountId);
    setLoaderVisibility(true);
    fetchAccountCampaigns(user, accountId).then(() => setLoaderVisibility(false));
  }

  handleExport = () => {
    const { selectedSpecs, setLoaderVisibility } = this.props;
    setLoaderVisibility(true);
    exportSpecs(selectedSpecs).then(() => setLoaderVisibility(false));
  }

  handleExportCampaign = campaignId => {
    const { user, fetchSpecs, setLoaderVisibility } = this.props;
    setLoaderVisibility(true);
    fetchSpecs(user, campaignId)
      .then(res => {
        exportSpecs(res.payload).then(() => setLoaderVisibility(false));
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
  fetchAccountCampaigns: PropTypes.func.isRequired,
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

const mapDispatchToProps = { fetchAccountCampaigns, fetchSpecs, removeSpec, deselectSpec, selectUserAccount, setLoaderVisibility };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampaignsContainer));