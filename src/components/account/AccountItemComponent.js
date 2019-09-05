import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const AccountItemComponent = ({ id, name, logo, onDelete, onBack }) => {
  return (
    <div className="account-item-component">
      <div className='info'>
        <h2>{name}</h2>
        {logo ? (<img className="logo logo--account" alt='Account logo' style={{ 'maxWidth': '100px' }} src={`data:${logo.contentType};base64,${Buffer.from(logo.data.data, 'base64').toString('base64')}`} />) : ``}
      </div>
      {(onDelete) ? (
        <p>
          <Link to='#' className='button' onClick={() => onDelete(id)}>
            ELIMINAR
          </Link>
          <Link to='#' className='button' onClick={onBack}>
            ATRAS
          </Link>
        </p>) :
        (
        <div className="container--buttons" >
          <Link to = {`/account2/${id}`} className='button'>
            EDITAR
          </Link>
          <Link to={`/account2/delete/${id}`} className='button'>
            ELIMINAR
          </Link>
        </div>)
      }
    </div>
  );
};

AccountItemComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AccountItemComponent;