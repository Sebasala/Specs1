import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../css/style.css';

const GifVideoComponent = ({ onBack, onVideoChange }) => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <header className='main'>
          <ul className='actions'>
            <li>
              <Link to='#' onClick={onBack}>
                <FontAwesomeIcon icon='chevron-left' /> ATRAS
              </Link>
            </li>
          </ul>
          <img className='logo' src='/images/logospecs.png' alt='Specs' />
        </header>
        <div className='select-field'>
          <input type='file' name='image' onChange={onVideoChange} />
        </div>
      </div>
    </div>
  );
};

export default GifVideoComponent;