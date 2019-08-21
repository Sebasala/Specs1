import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AccountsListItemComponent = ({ id, name, urlPath }) => {
  return (
    <li>
      <Link to={`${urlPath}${id}`}><FontAwesomeIcon icon='user-tie' /> {name}</Link>
      {/*<figure><FontAwesomeIcon icon='user-tie' /> </figure>*/}
    </li>
  );
};

AccountsListItemComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default AccountsListItemComponent;