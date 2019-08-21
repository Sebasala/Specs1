import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { formatDate } from '../helpers/env';

const CampaignListItemComponent = ({ id, name, date, urlPath, onExportCampaign }) => {
  return (
    <tr>
      <td className='left checkbox'><FontAwesomeIcon icon='check-circle' /></td>
      <td className='left categoria'>{name}</td>
      <td className='left fecha'>{moment(date).format(formatDate)}</td>
      <td className='download' onClick={() => onExportCampaign(id)}><FontAwesomeIcon icon='cloud-download-alt' /></td>
      <td className='ver-mas'><Link to={`/${urlPath}/${id}`}><FontAwesomeIcon icon='plus-square' /></Link></td>
    </tr>
  );
};

CampaignListItemComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default CampaignListItemComponent;