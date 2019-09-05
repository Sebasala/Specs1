import React from 'react';
import { PropTypes } from 'prop-types';
import AccountItemComponent from './AccountItemComponent';
import { Link } from 'react-router-dom';
// import '../css/style.css';

const AccountListComponent = ({ accounts }) => {
  return (
    <div className="account-list-component">
      <div className='container--accounts-list'>
        <header className="light-bg">
          <img className='logo' src='images/logospecs.png' alt='Specs' />
          <h1>CUENTAS</h1>
          <Link to={`/account2/new`} className='button button--crear'>
            CREAR
        </Link>
        </header>
        <ul className='items'>
          {accounts.map(account =>
            <li className='item light-bg' key={account.id}>
              <AccountItemComponent
                id={account.id} name={account.name} logo={account.logo} />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

AccountListComponent.propTypes = {
  accounts: PropTypes.array.isRequired
};

export default AccountListComponent;