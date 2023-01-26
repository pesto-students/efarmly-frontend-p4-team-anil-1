import React from 'react';

import { Box, CssBaseline } from '@mui/material';
import { styled, ThemeProvider } from '@mui/material/styles';

import Layout from './components/molecules/Layout';
import Routers from './pages/Routers';
import theme from './styles/theme';

const MuBox = styled(Box)(({ theme }) => ({
  background: theme.palette.gradient.pageBackground,
  opacity: 0.2,
}
));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <MuBox className="main">
          <Routers />
        </MuBox>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
