import React from 'react';

import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  AppBar, IconButton, Toolbar, Typography,
} from '@mui/material';

import theme from '../../styles/theme';

function AppHeader() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography component="h1" variant="h5" noWrap sx={{ flexGrow: 1 }}>
          eFarmly
        </Typography>
        <IconButton color="inherit">
          {/* <Badge badgeContent={4} color="secondary"> */}
          <NotificationsIcon />
          {/* </Badge> */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
