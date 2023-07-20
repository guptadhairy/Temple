import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import Typewriter from "typewriter-effect";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Box,Button,Container,HStack,Heading,Image, Stack, VStack } from '@chakra-ui/react';
import god4 from '../assets/god4.jpg'
import god3 from '../assets/god3.avif'
import god5 from '../assets/god5.jpg'
import god6 from '../assets/god6.jpeg'
import peace from '../assets/peace.mp4';
import temple from '../assets/temple.png';
import live from '../assets/live.png';
import pooja from '../assets/pooja.jpg'
import Gallery from './Gallery';
import Devoties from './Devoties';
import Members from './Members';


const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '90%',
    transform: 'translate(-50%, -50%)',
    p: '4',
    size: '2xl'
}

const Home = () => {
  return (
    <Box>
        <MyCarousel />
        <Container maxW={'container.xl'} minH={'50vh'} p={16}>
            <VStack>
            <Heading py={2} w={'fit-content'} borderBottom={'2px solid'} justifySelf={'flex-start'} color={'purple.600'}>
            <Typewriter
            options={{
              strings: ["Experience The Grace", "Discover the Elegance","Encounter the Beauty"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          Of Shri Rameshwar Dham
            </Heading>
            <HStack mt={10}>
            <Button colorScheme='purple' right={16} >
                <Link to={'/about'}>About Us</Link>
            </Button>
            <motion.div initial={{
                x: "200%",
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}>
            <video className='peace' src={peace} autoPlay loop controls ></video>
            </motion.div>
            </HStack>
            </VStack>
        </Container>
        <Stack paddingY={'8'}  minH={'50vh'} color={'yellow.400'} direction={['column','row']}>
        <VStack width={'full'}  alignItems={'center'} justifyContent={'center'}>
        <Image className='temple' src={temple} alt='Visit The Temple' />
        <Heading>Visit The Temple</Heading>
        <Button colorScheme='purple'>
            <Link to={'/visit'}>How To Reach?</Link>
        </Button>
        </VStack>
        <VStack width={'full'}  alignItems={'center'} justifyContent={'center'}>
            <Image className='temple' src={live} alt='Live Darshan' />
            <Heading>Online Darshan</Heading>
            <Button colorScheme='purple'>Aarti Videos</Button>
        </VStack>
        <VStack width={'full'} alignItems={'center'} justifyContent={'center'}>
            <Image className='temple' src={pooja} alt='Book Pooja' />
            <Heading>Personalized Darshan</Heading>
            <Button colorScheme='purple'>Book Pooja</Button>
        </VStack>
    </Stack>
    <Gallery />
    <Devoties />
    <Members />
    </Box>
  );
};

const MyCarousel = () =>(
    <Carousel autoPlay className='car'
    infiniteLoop interval={2000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w={'full'} h={'90vh'}>
            <Image  src={god4} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>SHRI RAM</Heading>
        </Box>
        <Box w={'full'} h={'90vh'}>
            <Image src={god3} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>SHIVA</Heading>
        </Box>
        <Box w={'full'} h={'90vh'}>
            <Image src={god5} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>KRISHN</Heading>
        </Box>
        <Box w={'full'} h={'90vh'}>
            <Image src={god6} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>HANUMAN</Heading>
        </Box>
    </Carousel>
)

export default Home
