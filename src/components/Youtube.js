import React from 'react';
import './Background.css';
import { Box, CardMedia, Typography } from '@mui/material';
import jm3 from '../assets/jm3.png'
import logo from '../assets/Logo.png'
const videoData = [
  { id: 1, url: 'https://www.youtube.com/embed/TjvapY09iN4?start=1' },
  { id: 2, url: 'https://www.youtube.com/embed/EL5ic6sQrmE?start=1' },
]
const Youtube = () => {

  return (
    <Box sx={maincontainer}>
    <CardMedia
      component="img"
      image={jm3}
      alt="Background"
      sx={background}
    />
    <Box sx={{ display: 'flex', flex:1, margin: '5vw', flexDirection: 'column', alignItems:'center' }}>
      
          <Typography variant="h1" sx={title} gutterBottom>
            Live Videos
          </Typography>

          <Box sx={mediaBox}>
           <CardMedia
                component="img"
                image={logo}
                alt="Logo"
                sx={logojm}
              />
          </Box>
        <Box sx={videoBox}>
            {videoData.map((video) => (
            <Box key={video.id} sx={{ width:{xl:'30vw',lg:'30vw',md:'30vw',sm:'10vw',xs:'50vw'}, maxWidth: 800, margin:'1vh' }}>
              <iframe
                width="100%"
                height="315"
                src={video.url}
                title={`YouTube video player ${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          ))}
        </Box>
  
      
    </Box>

  </Box>
  );
};

export default Youtube;
const repro = { margin: 4 , display:'flex',justifyContent:'right'}
const container = { 
  display: 'flex',
}
const title = { fontSize: { lg: '30px' }, fontWeight: 'bold', paddingBottom: '1vh', textTransform:'uppercase',textAlign:'center'}
const maincontainer  = { display: 'flex', flexDirection: 'row', height: '100vh', width: '100%', color: 'white' ,flex:1}
const  background ={
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -1,
}
const mediaBox = { 
  display: 'flex',
  width:'100%',
  padding: 2, 
  justifyContent:'center',
  alignItems:'center',
  textAlign:'center'
}
const logojm = {
  width: {xl:'20vw',lg:'20vw',md:'17vw',sm:'16vw',xs:'15vw'}, 
  height: {xl:'10vh',lg:'10vh',md:'8vh',sm:'7vh',xs:'7vh'},
}
const videoBox = {display:'flex', flexDirection:{xl:'row',lg:'row',md:'row',sm:'column',xs:'column'},justifyContent:'center',alignItems:'center',marginTop:'2vh'}