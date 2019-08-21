import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, render: Render, user, ...rest }) => {
  return (<Route { ...rest }
    render={props => (user && user.accessToken) ? (
      Render ? Render(props) :
        <Component {...props} />
    ) : (
      <Redirect to='/login' />
    )}
  />)
};