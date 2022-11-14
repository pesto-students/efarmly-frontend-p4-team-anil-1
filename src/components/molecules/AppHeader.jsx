import React from 'react';

import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

function AppHeader() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography component="h1" variant="h5" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Wallet Support System
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
