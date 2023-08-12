import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Button, Heading, Stack, VStack } from '@chakra-ui/react';
import temple from '../assets/temple.png';
import live from '../assets/live.png';
import pooja from '../assets/pooja.jpg'
import Gallery from './Gallery';
import Devoties from './Devoties';
import Members from './Members';
import shiv from '../assets/shivVdo.mp4'


const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Stack paddingY={'8'} minH={'50vh'} color={'yellow.400'} direction={['column', 'row']}>
                <VStack width={'full'} alignItems={'center'} justifyContent={'center'}>
                    <div className='box'>
                        <img className='temple' src={temple} alt='Visit The Temple' />
                    </div>
                    <Heading mt={4}>Visit The Temple</Heading>
                    <Button mt={4} colorScheme='purple'>
                        <Link to={'/visit'}>How To Reach?</Link>
                    </Button>
                </VStack>
                <VStack width={'full'} alignItems={'center'} justifyContent={'center'}>
                    <div className='box'>
                        <img className='temple' src={live} alt='Live Darshan' />
                    </div>
                    <Heading mt={4}>Online Darshan</Heading>
                    <Button mt={4} colorScheme='purple'>
                        <Link to={'/aarti'}>Aarti Videos</Link>
                    </Button>
                </VStack>
                <VStack width={'full'} alignItems={'center'} justifyContent={'center'}>
                    <div className='box'>
                        <img className='temple' src={pooja} alt='Book Pooja' />
                    </div>
                    <Heading mt={4}>Personalized Darshan</Heading>
                    <Button mt={4} colorScheme='purple'>
                        <Link to={'/booking'}>Book Pooja</Link>
                    </Button>
                </VStack>
            </Stack>
            <Gallery />
            <Devoties />
            <Members />
        </Box>
    );
};

const MyCarousel = () => (
    <div className="video-container">
        <video src={shiv} autoPlay muted loop></video>
        <div className="video-overlay">
            <Heading fontSize={['2rem','6rem']}>श्री रामेश्वर धाम</Heading>
        </div>
    </div>
)


export default Home