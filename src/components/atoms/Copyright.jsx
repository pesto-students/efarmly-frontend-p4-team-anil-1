/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Typography, Link } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link href="#" underline="none">
        Working Wallet{' '}
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

Copyright.propTypes = {};

export default Copyright;
