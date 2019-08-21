import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import SpecComponent from '../components/specs/SpecComponent';
import {
  fetchSpecs,
  viewSpec } from '../actions/index';
import { getSpecById } from '../selectors/specs';
import { getCampaignById } from '../selectors/campaigns';

class SpecContainer extends Component {

  handleViewSpec = id => {
    const { viewSpec } = this.props;
    viewSpec(id);
  }

  render() {
    const { spec, campaign } = this.props;
    return (
      <SpecComponent spec={spec} campaign={campaign} onAddSpec={this.handleAddSpec} onViewSpec={this.handleViewSpec} />
    );
  }
}

SpecContainer.propTypes = {
  spec: PropTypes.object.isRequired,
  fetchSpecs: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  spec: getSpecById(state, props),
  campaign: getCampaignById(state, props)
});

const mapDispatchToProps = { fetchSpecs, viewSpec };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpecContainer));