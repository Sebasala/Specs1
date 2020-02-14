import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../css/style.css';

const GifHomeComponent = ({ onBack, onVideoClick, onImagesClick }) => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <header className='main'>
          <ul className='actions'>
            <li>
              <Link to='gif'>
                <FontAwesomeIcon icon='chevron-left' /> ATRAS
              </Link>
            </li>
          </ul>
          <img className='logo' src='/images/logospecs.png' alt='Specs' />
        </header>
        <div className='select-field'>
          <Link to='#' onClick={onVideoClick}>
            Video <FontAwesomeIcon icon='chevron-right' />
          </Link>
        </div>
        <div className='select-field'>
          <Link to='#' onClick={onImagesClick}>
            Imágenes <FontAwesomeIcon icon='chevron-right' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GifHomeComponent;