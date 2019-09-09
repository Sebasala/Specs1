import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../css/style.css';
import SpecListComponent from './SpecListComponent';
import CampaignListComponent from '../CampaignListComponent';
import SpecContainer from '../../containers/SpecContainer';
import SelectedSpecsListComponent from './SelectedSpecsListComponent';

const SpecsComponent = ({ specs, campaign, urlPath, onAddSpec, onRemoveSpec, selectedSpecs, campaigns, onExport, onViewSpec, viewedSpec, onExportCampaign, onDeleteCampaignSpec }) => {
  return (
    <div className='actividades'>
      <div className='wrapper'>
        <div className={`track ${(viewedSpec && Object.keys(viewedSpec).length > 0) ? 'open-left' : ''}`}>
          <div className='col col--main'>
            <div className='container'>
              <header className='main'>
                <ul className='actions'>
                  <li>
                    <Link to={`/account/${campaign.account.id}`}>
                      <FontAwesomeIcon icon='chevron-left' /> ATRAS
                    </Link>
                  </li>
                  <li>
                    <Link to={`/create/${campaign.id}/medium`}>
                      CREAR <FontAwesomeIcon icon='pencil-alt' />
                    </Link>
                  </li>
                </ul>
                <img className='logo' src='/images/logospecs.png' alt='Specs' />
              </header>
              <section className='ultima-actividad'>
                <h3>CAMPAÑA</h3>
                <CampaignListComponent campaigns={[campaign]} urlPath={'campaign'} onExportCampaign={onExportCampaign} />
              </section>
            </div>
            <div className='container'>
              <section className='actividades-antiguas'>
                <header>
                  <h3>SPECS</h3>
                  <div className='field'>
                    <input type='text' name='search' required />
                    <label htmlFor='search'>Buscar</label>
                  </div>
                </header>
                <div className='container--spec-list frame'>
                  <SpecListComponent specs={specs} campaign={campaign} urlPath={urlPath}
                    onAddSpec={onAddSpec} onRemoveSpec={onRemoveSpec} onViewSpec={onViewSpec}
                    onDeleteCampaignSpec={onDeleteCampaignSpec} />
                </div>
              </section>
            </div>
          </div>
          <div id='more-info' className='col pull-left'>
            {(viewedSpec && Object.keys(viewedSpec).length > 0) ?
              <SpecContainer specId={viewedSpec.id} /> : <div></div>}
            {/*<Route path={'/campaign/:campaignId/spec/:specId'} render={props => <SpecContainer campaignId={parseInt(props.match.params.campaignId)} specId={parseInt(props.match.params.specId)} />} />*/}
          </div>
        </div>
      </div>
      <SelectedSpecsListComponent selectedSpecs={selectedSpecs} campaigns={campaigns} onRemoveSpec={onRemoveSpec} onExport={onExport} />
    </div>
  );
};

export default SpecsComponent;