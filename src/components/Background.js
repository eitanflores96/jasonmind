import React from 'react';
import './Background.css';
import { Box } from '@mui/material';

const Background = ({ image }) => {
  return (
    <Box
    sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'black',
      backgroundImage:`url(${image})`
    }}
  >
  </Box>
  );
};

export default Background;
