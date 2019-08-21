import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarComponent = ({ campaign, medium, adFormat, creative, contents, content, onContentClick, contentView, onSaveSpec, onAddSpec }) => {
  return (
    <div className='sidebar sidebar--3'>
      {(campaign && campaign.name) ? (
        <h1>
          CAMPAÑA: <span>{campaign.name}</span>
        </h1>) :
        (<h1> </h1>)
      }
      <div className='fields-output'>
        <div className='field-output'>
          <p>Medio</p>
          {(medium && medium.name) ? <h2>{medium.name}</h2> : ``}
        </div>
        <div className='field-output'>
          <p>Formato</p>
          {(adFormat && adFormat.name) ? <h2>{adFormat.name}</h2> : ``}
        </div>
        <div className='field-output'>
          <p>Creativo</p>
          {(creative && creative.name) ? <h2>{creative.name}</h2> : ``}
        </div>
      </div>
      <br></br>
      {(contents && Object.keys(contents).length > 0) ? Object.values(contents).map(content => {
        return (<div key={content.contentType.id} className='fields-output'>
          <div className='field-output'>
            <Link to='#' onClick={() => onContentClick(content.contentType.id)}>
              <p>{content.contentType.name} <FontAwesomeIcon icon='chevron-right' /></p>
            </Link>
          </div>
        </div>)}) : ``
      }
      <div className='row'>
        <div className='img-container'>
          {(creative && creative.image) ? (<img alt='Creative example' style={{ 'maxWidth': '300px' }} src={`data:${creative.image.contentType};base64,${Buffer.from(creative.image.data.data, 'base64').toString('base64')}`} />) : ``}
        </div>
        {(contents && contents[contentView]) ? (
          <section className='observaciones'>
            <h2>
              OBSERVACIONES
          </h2>
            <div className='content'>
              <p>Tipo de archivo:</p>
              <p>{contents[contentView].contentFormat.name}</p>
              <p>Tamaño de archivo máximo:</p>
              <p>{contents[contentView].weight}</p>
              <p>Duración del video:</p>
              <p>{contents[contentView].length}</p>
              <p>Dimensiones:</p>
              <p>{contents[contentView].size}</p>
              <p>Observación</p>
              <p>{contents[contentView].observation}</p>
              <Link to='#' className='button' onClick={() => onContentClick()}>
                <p>CERRAR</p>
              </Link>
            </div>
          </section>
        ) : ``}
        {(content || creative) ? (
          <section className='observaciones'>
            <h2>
              OBSERVACIONES
          </h2>
            <div className='content'>
              {(creative) ? (
              <div>
                <p>Longitud de título:</p>
                <p>{creative.title}</p>
                <p>Longitud de texto:</p>
                <p>{creative.text}</p>
                <p>Longitud de descripción:</p>
                <p>{creative.description}</p>
              </div>
              ) : ``}
              {(content) ? (
              <div>
                <p>Tipo de archivo:</p>
                <p>{content.contentFormat.name}</p>
                <p>Tamaño de archivo máximo:</p>
                <p>{content.weight}</p>
                <p>Duración del video:</p>
                <p>{content.length}</p>
                <p>Dimensiones:</p>
                <p>{content.size}</p>
                <p>Observación</p>
                <p>{content.observation}</p>
              </div>
              ) : ``}
            </div>
          </section>
        ) : ``}
      </div>
      {onSaveSpec ? (
        <li className='button-container'><Link to='#' className='button' onClick={() => onSaveSpec()}>AGREGAR</Link></li>
      ) : ``}
      {/*onAddSpec ? (
        <li className='button-container'><Link to='#' className='button' onClick={() => onAddSpec()}>AGREGAR SPEC</Link></li>
      ) : ``*/}
    </div>
  );
};

SidebarComponent.propTypes = {
  campaign: PropTypes.object,
  medium: PropTypes.object,
  adFormat: PropTypes.object,
  creative: PropTypes.object,
};

export default SidebarComponent;