import React from 'react';
import { PropTypes } from 'prop-types';
import AccountItemComponent from './AccountItemComponent';
import { Link } from 'react-router-dom';
// import '../css/style.css';

const AccountListComponent = ({ accounts }) => {
  return (
    <div>
      <ul className='Items'>
        {accounts.map(account =>
          <li className='item' key={account.id}>
            <AccountItemComponent
              id={account.id} name={account.name} logo={account.logo} />
          </li>
        )}
      </ul>
      <Link to={`/account2/new`} className='button'>
        CREAR
      </Link>
    </div>
  );
};

AccountListComponent.propTypes = {
  accounts: PropTypes.array.isRequired
};

export default AccountListComponent;