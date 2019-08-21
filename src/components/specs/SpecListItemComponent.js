import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { formatDate } from '../../helpers/env';

const SpecListItemComponent = ({ id, date, campaignName, campaignId, urlPath, onAddSpec, onRemoveSpec, selected, onViewSpec }) => {
  return (
    <tr>
      <td className='left checkbox'><FontAwesomeIcon icon={[selected ? 'far' : 'fas', 'check-circle']} onClick={selected ? () => onRemoveSpec(id) : () => onAddSpec(id)} /></td>
      <td className='left categoria'>{campaignName}</td>
      <td className='left fecha'>{moment(date).format(formatDate)}</td>
      <td className='download'><FontAwesomeIcon icon='cloud-download-alt' /></td>
      <td className='ver-mas'>
        <Link to='#' onClick={() => onViewSpec(id)}>
          <FontAwesomeIcon icon='plus-square' />
        </Link>
      </td>
      {/*<td className='ver-mas'><Link to={`/campaign/${campaignId}/${urlPath}/${id}`}><FontAwesomeIcon icon='plus-square' /></Link></td>*/}
    </tr>
  );
};

SpecListItemComponent.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  campaignName: PropTypes.string.isRequired,
  campaignId: PropTypes.string.isRequired,
};

export default SpecListItemComponent;