import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import SpecComponent from '../components/specs/SpecComponent';
import {
  fetchSpecs,
  viewSpec
} from '../actions/index';
import { getViewedSpec } from '../selectors/specs';

class SpecContainer extends Component {

  handleViewSpec = id => {
    const { viewSpec } = this.props;
    viewSpec(id);
  }

  render() {
    const { spec } = this.props;
    return (
      <SpecComponent spec={spec} campaign={spec.campaign} onAddSpec={this.handleAddSpec} onViewSpec={this.handleViewSpec} />
    );
  }
}

SpecContainer.propTypes = {
  spec: PropTypes.object.isRequired,
  fetchSpecs: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  spec: getViewedSpec(state, props)
});

const mapDispatchToProps = { fetchSpecs, viewSpec };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpecContainer));