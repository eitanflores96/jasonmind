import React from 'react';
import './Background.css';
import { Box, CardMedia } from '@mui/material';
import jm1 from '../assets/jm1.jpg'
import logo from '../assets/Logo.png'

const Home = () => {

  return (
    <Box sx={{display:'flex',flexDirection:'row',height:'100vh', width:'100%'}}>
          <CardMedia component="img" image={jm1} alt="Background"sx={background}/>
          <Box sx={mediaBox}>
           <CardMedia
                component="img"
                image={logo}
                alt="Logo"
                sx={logojm}
              />
          </Box>
      </Box>
  );
};

export default Home;
const background = {
  position: {lg:'absolute',xs:'fixed'},
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -1,
}
const mediaBox = { 
  display: 'flex',
  width:'100%',
  padding: 2, 
  justifyContent:'left',
  alignItems:'center',
}
const logojm = {
  width: {xl:'50vw',lg:'50vw',md:'57vw',sm:'64vw',xs:'87vw'}, 
  height: {xl:'50vh',lg:'42vh',md:'12vh',sm:'25vh',xs:'19vh'},
}