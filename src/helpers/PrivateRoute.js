import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, render: Render, ...rest }) => {
  return (<Route { ...rest }
    render={props =>
      localStorage.getItem('jwtToken')
        ? Render ? Render(props) : <Component {...props} />
        : <Redirect to='/login' />
    }
  />)
};