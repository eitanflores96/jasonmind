import React from 'react';

import { Box, createTheme, ThemeProvider } from '@mui/material';

import './fonts.css'; // Import the CSS file for fonts
import Home from './components/Home';
import About from './components/About';
import Releases from './components/Releases';
import Youtube from './components/Youtube';

const theme = createTheme({
  typography: {
    fontFamily: 'Nexa, Arial, sans-serif',
  },
});



function App() {
  return (
    <ThemeProvider theme={theme}>

    <Box>
      <Home/>
      <About/>
      <Releases/>
      <Youtube/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
