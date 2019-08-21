import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SelectedSpecListItemComponent from './SelectedSpecListItemComponent';

const SelectedSpecsListComponent = ({ selectedSpecs, campaigns, onRemoveSpec, onExport }) => {
  return (
    <section id='seleccion'>
      <div className='container'>
        <h3>SELECCIÓN</h3>
        <table>
          <tbody>
            {selectedSpecs.map(spec => {
              const campaign = campaigns.find(c => c.id === spec.campaign.id);
              return <SelectedSpecListItemComponent
                key={spec.id}
                id={spec.id}
                campaignName={campaign.name}
                medium={(spec && spec.content && spec.content.creative && spec.content.creative.adFormat &&
                  spec.content.creative.adFormat.medium && spec.content.creative.adFormat.medium.name) ? spec.content.creative.adFormat.medium.name : ``}
                onRemoveSpec={onRemoveSpec}
              />
            })}
          </tbody>
        </table>
        <Link to='#' className='button' onClick={onExport}>
          Exportar
        </Link>
      </div>
    </section>
  );
}

SelectedSpecsListComponent.propTypes = {
  selectedSpecs: PropTypes.array.isRequired,
  campaigns: PropTypes.array.isRequired,
};

export default SelectedSpecsListComponent;