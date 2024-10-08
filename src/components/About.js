import React, { useEffect } from 'react';
import './Background.css';
import { Box, CardMedia, Typography } from '@mui/material';
import { useSprings, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import jm2 from '../assets/jm2.jpg';
import cube1 from '../assets/Insta.png';
import cube2 from '../assets/Soundcloud.png';
import cube3 from '../assets/Drive.png';
import cube4 from '../assets/Spoty.png';
import cube5 from '../assets/Mail2.png'
import cube6 from '../assets/youtube.png'
const About = () => {
  const texts = [
    "Jason Mind is a talented DJ emerging from the Buenos Aires electronic music scene.",
    "His genre-defying sets seamlessly blend Afro House, Melodic Techno, and Indie Dance, creating a unique musical journey. Known for his versatility, Jason arranges each set to highlight the best music, ensuring an unforgettable experience every time.",
    "With an uprising career, Jason has shared the booth with international artists like Adriatique, Colyn, Stephan Jolk, Sparrow & Barbossa, MoBlack, Technasia, ID ID, Vomee, as well as national talents such as Øostil, Brigado Crew, Bob Tosh, This&That, NonCitizens, Marcelo Vasami, John Cosani, Fernando Ferreyra, Nim, Matias Sundblad, Muter, FrancoBA, KeyCity, and many others."
    ,'Visit his digital profiles'
  ];

  const [ref, inView] = useInView({  threshold: 0.3 });

  const [springs, api] = useSprings(texts.length, index => ({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0px)' : 'translateY(20px)' },
    delay: index *200,
    config: { tension: 200, friction: 20 },
  }));

  useEffect(() => {
    if (inView) {
      api.start(index => ({
        opacity: 1,
        transform: 'translateY(0px)',
        delay: index * 200,
        config: { tension: 400, friction: 50 }, // Adjusted for faster animation
      }));
    } else {
      api.start(index => ({
        opacity: 0,
        transform: 'translateY(20px)',
      }));
    }
  }, [inView, api]);


  return (
    <Box sx={aboutBox} ref={ref}>
      <CardMedia component="img" image={jm2} alt="Background" sx={background2} />
      <Box sx={textContainer}>
        <Box>
          {springs.map((styles, index) => (
            <animated.div key={index} style={styles}>
              <Typography variant="h5" sx={{ fontSize: { lg: '12px',md:'10px',xl:'20px' }, paddingBottom: '2vh' }} gutterBottom>
                <Box component="span" sx={index === 0 ? { fontWeight: 'bold' } : {}}>
                  {texts[index]}
                </Box>
              </Typography>
            </animated.div>
          ))}
        </Box>
        {/*<Typography variant="h5" sx={{fontSize: { lg: '12px',md:'10px',xl:'20px' },}}>Visit his digital profiles</Typography>*/}

        <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '1vh',marginLeft:'5vh' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <CardMedia
              component="img"
              image={cube5}
              alt="Logo"
              sx={logo}
              onClick={() => window.location = 'mailto:yourmail@domain.com'}
            />
          <CardMedia
              component="img"
              image={cube3}
              alt="Logo"
              sx={logo}
              onClick={() => {
                window.open('https://drive.google.com/drive/folders/10Tw0ZmqXdLcFEa40CInxH9Uu6TGUJHzH');
              }}   
            />

          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row',marginLeft:'5vh' }}>
        <CardMedia
            component="img"
            image={cube6}
            alt="Logo"
            sx={logo}
            onClick={() => {
              window.open('https://www.youtube.com/@jasonmind');
            }}            
          />
          <CardMedia
            component="img"
            image={cube1}
            alt="Logo"
            sx={logo}
            onClick={() => {
              window.open('https://www.instagram.com/jasonmind1/');
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column',marginLeft:'5vh' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <CardMedia
              component="img"
              image={cube2}
              alt="Logo"
              sx={logo}
              onClick={() => {
                window.open('https://soundcloud.com/jasonmind');
              }}
            />
            <CardMedia
              component="img"
              image={cube4}
              alt="Logo"
              sx={logo}
            />
          </Box>
        </Box>

      </Box>
      <Box sx={spaceBox}>
      </Box>
    </Box>
  );
};

export default About;
const spaceBox ={ flex: 1, padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'end' }
const aboutBox = { display: 'flex', flexDirection: 'row', height: '100vh', width: '100%', color: 'white' };
const background2 = { position: 'absolute', width: '100%', height: '100vh', objectFit: 'cover', zIndex: -1 };
const textContainer = { display: 'flex', flex: 1, margin: '5vw', flexDirection: 'column' };
const logo = {
  width: '11vw', height: 'auto', margin: 2,
  transition: 'background-color 0.3s, transform 0.3s',
  '&:hover': {
    backgroundColor: 'transparent',
    transform: 'scale(1.05)',
    filter: 'brightness(0) invert(1)',
  },
};
