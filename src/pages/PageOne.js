import React from 'react';

import './PageOne.css';
import backgroundImage from '../assets/ason mind boceto.png';
import Background from '../components/Background';
import { Box, Typography } from '@mui/material';

const PageOne = () => {
  return (

      <Box sx={{display:'flex',flexDirection:'row',width:'100vw',height:'100vh',background: 'linear-gradient(to right, #4a0069, #000000)'}}>
          <Box sx={{ 
              display: 'flex',
              flex: 1,
              padding: 2, 
              justifyContent:'center',
              alignItems:'center',
              padding:'5vh', 
            }}>
            <Typography variant="h1" sx={{fontSize:{xs:'60px',sm:'60px',md:'80px',lg:'100px'}}} gutterBottom>
               jasonmind
            </Typography>
          </Box>
          <Box sx={{ flex: 1, padding: 2, display:{lg:'initial',xs:'none'} }}>
            
          </Box>
      </Box>
  );
};

export default PageOne;