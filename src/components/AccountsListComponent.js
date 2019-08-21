import React from 'react';
import PropTypes from 'prop-types';
import AccountsListItemComponent from './AccountsListItemComponent';

const AccountsListComponent = ({ accounts, urlPath }) => {
  return (
    <ul>
      {accounts.map(account => (
        <AccountsListItemComponent
          key={account.id}
          id={account.id}
          name={account.name}
          urlPath={urlPath}
        />
      ))}
    </ul>
  );
}

AccountsListComponent.propTypes = {
  accounts: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default AccountsListComponent;