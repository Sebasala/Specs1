import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SelectedSpecListItemComponent = ({ id, campaignName, medium, onRemoveSpec }) => {
  return (
    <tr>
      <td className='left'>{campaignName}</td>
      <td className='left fecha'>{medium}</td>
      <td className='eliminar'>
        <Link to='#' onClick={() => onRemoveSpec(id)}>
          Eliminar
        </Link></td>
    </tr>
  );
};

SelectedSpecListItemComponent.propTypes = {
  campaignName: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
};

export default SelectedSpecListItemComponent;