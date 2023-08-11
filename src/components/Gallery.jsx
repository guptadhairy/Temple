import { Stack, VStack, Image, Heading, Text, Button } from '@chakra-ui/react';
import React from 'react';
import gallery from '../assets/gallery.png';
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";

const Gallery = () => {
  return (
    <Stack mt={8} paddingX={['6','0']} paddingY={['6', '8']} minH={'40vh'} color={'purple.400'} direction={['column', 'row']}>
      <VStack width={['full', '50%']} alignItems={'center'} justifyContent={'center'}>
        <Image width={['300px','450px']} className='gallery' src={gallery} alt='See Our Galary' />
      </VStack>
      <VStack px={[4, 16]} width={['full', '50%']} alignItems={['center', 'flex-start']} justifyContent={'center'}>
        <Heading>
          <Typewriter
            options={{
              strings: ["Our Gallery", "Creative Heaven", "Exhibit Space"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
        </Heading>
        <Text mt={4} style={{ fontSize: '1.4rem', textAlign: ['center', 'left'] }}>
          Browse through our extensive gallery of high quality images of Shri Rameshwar Dham Temple.
        </Text>
        <Button mt={4} colorScheme='purple'>
          <Link to={'/gallery'}>Browse</Link>
        </Button>
      </VStack>
    </Stack>
  );
}

export default Gallery;
