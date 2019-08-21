import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './css/style.css';
import CampaignListComponent from './CampaignListComponent';
import SelectedSpecsListComponent from './specs/SelectedSpecsListComponent';

const CampaignsComponent = ({ campaigns, lastCampaign, urlPath, selectedSpecs, account, onRemoveSpec, onExport, onExportCampaign }) => {
  return (
    <div className='actividades'>
      <div className='wrapper'>
        <div className='track'>
          <div className='col col--main'>
            <div className='container'>
              <header className='main'>
                <ul className='actions'>
                  <li>
                    <Link to={`/accounts`}>
                      <FontAwesomeIcon icon='chevron-left' /> ATRAS
                    </Link>
                  </li>
                  <li>
                    <Link to={`/create/campaign`}>
                      CREAR <FontAwesomeIcon icon='pencil-alt' />
                    </Link>
                  </li>
                </ul>
                <img className='logo' src='/images/logospecs.png' alt='Specs' />
                <h1>{account.name}</h1>
              </header>
              <section id='ultima-actividad'>
                <h3>ÚLTIMA ACTIVIDAD</h3>
                <CampaignListComponent campaigns={lastCampaign} urlPath={urlPath} onExportCampaign={onExportCampaign} />
              </section>
            </div>
            {/*div.dropdown-section */}
            <div className='container'>
              <section id='actividades-antiguas'>
                <header>
                  <h3>ACTIVIDADES ANTIGUAS</h3>
                  <div className='field'>
                    <input type='text' name='search' required/>
                    <label htmlFor='search'>Buscar</label>
                  </div>
                </header>
                <div className='frame'>
                  <CampaignListComponent campaigns={campaigns} urlPath={urlPath} onExportCampaign={onExportCampaign} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <SelectedSpecsListComponent selectedSpecs={selectedSpecs} campaigns={campaigns.concat(lastCampaign)} onRemoveSpec={onRemoveSpec} onExport={onExport} />
      {/*<section id='seleccion'>
        <div className='container'>
          <h3>SELECCIÓN</h3>
          <SelectedSpecsListComponent selectedSpecs={selectedSpecs} campaigns={campaigns.concat(lastCampaign)} />
          <Link to={'#'} onClick={() => console.log('Export')}>
            <FontAwesomeIcon icon='chevron-left' /> ATRAS
          </Link>
        </div>
      </section>*/}
    </div>
  );
};

export default CampaignsComponent;