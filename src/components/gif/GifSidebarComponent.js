import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GifSidebarComponent = ({ gifData, onGifDownload }) => {
  return (
    <div className='sidebar sidebar--3'>
      <h1> </h1>
      <div className='fields-output'>
        <div className='field-output'>
          <p></p>
          <h2></h2>
        </div>
        <div className='field-output'>
          <p></p>
          <h2></h2>
        </div>
        <div className='field-output'>
          <p></p>
          <h2></h2>
        </div>
      </div>
      <br></br>
      <div className='row'>
        <div className='img-container'>
          {gifData ? (<img alt='Gif' style={{ 'maxWidth': '300px' }} src={gifData} />) : ``}
        </div>
      </div>
      {/*<button className='button' onClick={onGifDownload}>Descargar</button>*/}
      {(onGifDownload && gifData) ? (
        <div className='gif-container'>
          <div className='g-savetodrive'
            data-src={gifData}
            data-filename='gif.gif'
            data-sitename='My Company Name'>
          </div>
        </div>
      ) : ``}
    </div>
  );
};

export default GifSidebarComponent;