import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const UserItemComponent = ({ id, name, email, permissionLevel, onDelete, onEditDeleteClick, onBack, confirmation }) => {
  let confirmationClass = "";

  if (confirmation) {
    confirmationClass = "confirmation light-bg";
  }
  
  return (
    <div className={confirmationClass} >
      <div className='info'>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>Nivel de permiso: {permissionLevel}</p>
      </div>
      {(onDelete) ? (
        <div className="container--buttons" >
          <Link to='#' className='button' onClick={() => onDelete(id)}>
            ELIMINAR
          </Link>
          <Link to='#' className='button' onClick={onBack}>
            ATRAS
          </Link>
        </div>) :
        (
        <div className="container--buttons">
          <Link to={`/user/${id}`} onClick={() => onEditDeleteClick(id)} className='button'>
            EDITAR
          </Link>
          <Link to={`/user/delete/${id}`} onClick={() => onEditDeleteClick(id)} className='button'>
            ELIMINAR
          </Link>
        </div>)
      }
    </div>
  );
};

UserItemComponent.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  permissionLevel: PropTypes.number.isRequired,
  confirmation: PropTypes.bool.isRequired
};

export default UserItemComponent;