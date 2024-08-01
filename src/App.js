import React from 'react';

import { Box, CardMedia, createTheme, ThemeProvider, Typography } from '@mui/material';

import jm2 from './assets/jm2.jpg'
import './fonts.css'; // Import the CSS file for fonts
import Home from './components/Home';
import About from './components/About';
import Releases from './components/Releases';

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
    </Box>
    </ThemeProvider>
  );
}

export default App;
const cubeBox = {
  border: '3px solid white',
  padding: 2,
  margin:4,
  width:'16vw',
  height:'16vh',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:'40px'
}