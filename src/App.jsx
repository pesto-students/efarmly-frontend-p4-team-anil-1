import React from 'react';

import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Layout from './components/molecules/Layout';
import Routers from './pages/Routers';

const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <main className="main">
          <Routers />
        </main>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
