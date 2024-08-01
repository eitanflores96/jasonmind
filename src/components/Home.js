import React from 'react';
import './Background.css';
import { Box, CardMedia } from '@mui/material';
import jm1 from '../assets/jm1.jpg'
import logo from '../assets/Logo.png'

const Home = () => {

  return (
    <Box sx={{display:'flex',flexDirection:'row',height:'100vh', width:'100%'}}>
          <CardMedia component="img" image={jm1} alt="Background"
              sx={{
                position: 'absolute',
                width: '100wh',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1,
              }}
          />
          <Box sx={{ 
              display: 'flex',
              width:'100%',
              padding: 2, 
              justifyContent:'left',
              alignItems:'center',
              overflow: 'hidden', // Hide overflow of the animated container
            }}>
           <CardMedia
                component="img"
                image={logo}
                alt="Logo"
                sx={{
                  width: '50vw', // Adjust width as needed
                  height: '50vh', // Maintain aspect ratio
                }}
              />
          </Box>
      </Box>
  );
};

export default Home;
