import React from 'react';
import { PropTypes } from 'prop-types';
import UserItemComponent from './UserItemComponent';
import { Link } from 'react-router-dom';
// import '../css/style.css';

const UserListComponent = ({ users, onEditDeleteClick, onBack }) => {
  return (
    <div className="user-list-component">
      <div className='container--users-list'>
        <header className="light-bg">
          <img className='logo' src='images/logospecs.png' alt='Specs' />
          <h1>USUARIOS</h1>
          <Link to={`/user/new`} className='button button--crear'>
          CREAR
          </Link>
        </header>
        <ul className='items'>
          {users.map(user =>
            <li className='item light-bg' key={user.id}>
              <UserItemComponent
              id={user.id} name={`${user.firstName} ${user.lastName}`}
              email={user.email} permissionLevel={user.permissionLevel}
              onEditDeleteClick={onEditDeleteClick} onBack={onBack} />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

UserListComponent.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserListComponent;