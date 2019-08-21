import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const UserItemComponent = ({ id, name, email, permissionLevel, onDelete, onEditDeleteClick, onBack }) => {
  return (
    <div>
      <h2>Nombre: {name}</h2>
      <p>Correo: {email}</p>
      <p>Nivel de permiso: {permissionLevel}</p>
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
        <p>
          <Link to={`/user/${id}`} onClick={() => onEditDeleteClick(id)} className='button'>
            EDITAR
          </Link>
          <Link to={`/user/delete/${id}`} onClick={() => onEditDeleteClick(id)} className='button'>
            ELIMINAR
          </Link>
        </p>)
      }
    </div>
  );
};

UserItemComponent.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  permissionLevel: PropTypes.number.isRequired,
};

export default UserItemComponent;