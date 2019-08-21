import React from 'react';
import PropTypes from 'prop-types';
import SpecListItemComponent from './SpecListItemComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SpecListComponent = ({ specs, campaign, urlPath, onAddSpec, onRemoveSpec, onViewSpec }) => {
  return (
    <table align='center'>
      <tbody>
        <tr>
          <th className='left'><FontAwesomeIcon icon='check-circle' /></th>
          <th className='left categoria'>CAMPAÑA</th>
          <th className='left'>FECHA</th>
          <th>DESCARGAR</th>
          <th className='ver-mas'>VER MÁS</th>
        </tr>
        {specs.map(spec => (
          <SpecListItemComponent
            key={spec.id}
            id={spec.id}
            campaignName={campaign.name}
            campaignId={campaign.id}
            date={spec.date}
            urlPath={urlPath}
            onAddSpec={onAddSpec}
            onRemoveSpec={onRemoveSpec}
            selected={spec.selected}
            onViewSpec={onViewSpec}
          />
        ))}
      </tbody>
    </table>
  );
}

SpecListComponent.propTypes = {
  specs: PropTypes.array.isRequired,
  campaign: PropTypes.object.isRequired,
};

export default SpecListComponent;