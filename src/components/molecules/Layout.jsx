/* eslint-disable react/prop-types */
import React from 'react';

import Copyright from '../atoms/Copyright';

import AppHeader from './AppHeader';

function Layout(props) {
  const { children } = props;
  return (
    <>
      <AppHeader />
      {children}
      <Copyright />
    </>
  );
}

Layout.propTypes = {};

export default Layout;
