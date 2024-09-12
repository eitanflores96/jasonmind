import React from 'react';
import './Background.css';
import { Box, CardMedia, Typography } from '@mui/material';
import jm3 from '../assets/jm3.png'
const customColor = '#000000'; // Example: orange color

const Releases = () => {

  return (
    <Box sx={maincontainer}>
    <CardMedia
      component="img"
      image={jm3}
      alt="Background"
      sx={background}
    />
    <Box sx={{ display: 'flex', flex:1, margin: '5vw', flexDirection: 'column',  }}>
      <Box sx={container}>
        <Box></Box>

        <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Typography variant="h1" sx={title} >
              Latest Sets & Releases
            </Typography>
            <Box sx={repro}>   
                <iframe
                  title='a1'
                  style={{width:'35vw',height:'20vh'}}
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=https://soundcloud.com/jasonmind/sets/live-sets?si=8efa194fd11f417aaca1df19404892b0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&color=${customColor.replace('#', '')}`}
                ></iframe>
              </Box>

              <Box sx={repro}>
                <iframe
                  style={{width:'35vw',height:'20vh'}}
                  title='a3'
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=https://soundcloud.com/jasonmind/jason-mind-private-party-x-la-isla-producciones-080724?si=0312da4de08d4b499bb95dc9d7982b97&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&color=${customColor.replace('#', '')}`}
                ></iframe>
              </Box>

              <Box sx={repro}>
                <iframe
                  title='a4'
                  style={{width:'35vw',height:'20vh'}}
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=https://soundcloud.com/jasonmind/jason-mind-club-amerika-weekend-warriors-220624?si=c44f33b47baf4c04afa6b2f8ea7b343b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&color=${customColor.replace('#', '')}`}
                ></iframe>
              </Box>
        </Box>
            
      </Box>


      
    </Box>

  </Box>
  );
};

export default Releases;
const repro = { margin: '2vh' , display:'flex',justifyContent:'right'}
const container = { display: 'grid',
  gridTemplateColumns: '1fr 1fr', // Creates two equal columns
  height: '100vh', // Full viewport height
  width: '100%', // Full width}
}
const title = { fontSize: { lg: '4vh' }, fontWeight: 'bold', paddingBottom: '2vh', textTransform:'uppercase'}
const maincontainer  = { display: 'flex', flexDirection: 'row', height: '100vh', width: '100%', color: 'white' ,flex:1}
const  background ={
  position: 'absolute',
  width: '100%',
  height: '100vh',
  objectFit: 'cover',
  zIndex: -1,
}