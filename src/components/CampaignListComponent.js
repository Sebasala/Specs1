import React from 'react';
import PropTypes from 'prop-types';
import CampaignListItemComponent from './CampaignListItemComponent';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CampaignListComponent = ({ campaigns, urlPath, onExportCampaign }) => {
  return (
    <table>
      <tbody>
        {campaigns.map(campaign => (
          <CampaignListItemComponent
            key={campaign.id}
            id={campaign.id}
            name={campaign.name}
            date={campaign.date}
            urlPath={urlPath}
            onExportCampaign={onExportCampaign}
          />
        ))}
      </tbody>
    </table>
  );
}

CampaignListComponent.propTypes = {
  campaigns: PropTypes.array.isRequired,
};

export default CampaignListComponent;