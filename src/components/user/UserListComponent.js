import React from 'react';
import { PropTypes } from 'prop-types';
import UserItemComponent from './UserItemComponent';
import { Link } from 'react-router-dom';
import '../css/style.css';

const UserListComponent = ({ users, onEditDeleteClick, onBack }) => {
  return (
    <div>
      <ul className='items'>
        {users.map(user =>
          <li className='item' key={user.id}>
            <UserItemComponent
              id={user.id} name={`${user.firstName} ${user.lastName}`}
              email={user.email} permissionLevel={user.permissionLevel}
              onEditDeleteClick={onEditDeleteClick} onBack={onBack} />
          </li>
        )}
      </ul>
      <Link to={`/user/new`} className='button'>
        CREAR
      </Link>
    </div>
  );
};

UserListComponent.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserListComponent;