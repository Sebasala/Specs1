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

const SpecsComponent = ({ specs, campaign, urlPath, onAddSpec, onRemoveSpec, selectedSpecs, campaigns, onExport, onViewSpec, viewedSpec, onExportCampaign }) => {
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
                  <SpecListComponent specs={specs} campaign={campaign} urlPath={urlPath} onAddSpec={onAddSpec} onRemoveSpec={onRemoveSpec} onViewSpec={onViewSpec} />
                </div>
              </section>
            </div>
          </div>
          <div id='more-info' className='col pull-left'>
            {(viewedSpec && Object.keys(viewedSpec).length > 0) ?
              <SpecContainer campaignId={campaign.id} specId={viewedSpec.id} /> : <div></div>}
            {/*<Route path={'/campaign/:campaignId/spec/:specId'} render={props => <SpecContainer campaignId={parseInt(props.match.params.campaignId)} specId={parseInt(props.match.params.specId)} />} />*/}
          </div>
        </div>
      </div>
      <SelectedSpecsListComponent selectedSpecs={selectedSpecs} campaigns={campaigns} onRemoveSpec={onRemoveSpec} onExport={onExport} />
      {/*<div id='containergris'>
        <div id='firstspecs'>
          <div className='creator'>
            <table align='center'>
              <tbody>
                <tr>
                  <th>
                    <Link to={`/account/${campaign.accountId}`} className='buttona'>
                      <FontAwesomeIcon icon='chevron-left' /> ATRAS
                    </Link>
                  </th>
                  <th>
                    <Link to={`/create/campaign`} className='buttonb'>
                      CREAR <FontAwesomeIcon icon='pencil-alt' />
                    </Link>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='title'>
            <img src='/images/logospecs.png' alt='logotipo specs' width='100'/>
          </div>
          <div id='first2'>
            <h4>CAMPAÑA</h4>
            <CampaignListComponent campaigns={[campaign]} urlPath={'campaign'} />
          </div>
          <div id='first5'>
            <h4>SPECS</h4>
            <div className='act2'>
              <SpecListComponent specs={specs} campaign={campaign} urlPath={urlPath} onAddSpec={onAddSpec} onRemoveSpec={onRemoveSpec} />
            </div>
          </div>
        </div>
        <div id='fourthspecs'>
          <div id='fourth'>
            <div id='third'>
              <div id='third2'>
                <h3>SELECCIÓN</h3>
                <SelectedSpecsListComponent selectedSpecs={selectedSpecs} campaigns={campaigns}/>
              </div>
              <div id='third3'>
                <input type='submit' onClick={onExport} value='EXPORTAR'/>
              </div>
            </div>
            <div id='fourth2'>
              <Route path={'/campaign/:campaignId/spec/:specId'} render={props => <SpecContainer campaignId={parseInt(props.match.params.campaignId)} specId={parseInt(props.match.params.specId)} />} />
            </div>
          </div>
        </div>
      </div>*/}
    </div>
  );
};

export default SpecsComponent;