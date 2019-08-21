import React from 'react';
import { PropTypes } from 'prop-types';
// import './css/style.css';
import AccountsListComponent from './AccountsListComponent';

const AccountsComponent = ({ accounts, urlPath }) => {

  return (
    <div className='cuentas'>
      <div className='container'>
        <img className='logo' src='images/logospecs.png' alt='Specs' />
        <section className='cuentas'>
          <h1>Cuentas</h1>
          <AccountsListComponent accounts={accounts} urlPath={urlPath} />
        </section>
      </div>
    </div>
  );
};

AccountsComponent.propTypes = {
  accounts: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default AccountsComponent;