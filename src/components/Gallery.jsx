import { Stack, VStack, Image, Heading, Text, Button } from '@chakra-ui/react'
import React from 'react'
import gallery from '../assets/gallery.png'
import { Link } from 'react-router-dom'
import Typewriter from "typewriter-effect";
const Gallery = () => {
  return (
    <Stack paddingY={'8'}  minH={'40vh'} color={'purple.400'} direction={['column','row']}>
        <VStack  width={'full'}  alignItems={'center'} justifyContent={'center'}>
            <Image className='gallery' src={gallery} alt='See Our Galary' />
        </VStack>
        <VStack px={16} width={'full'} alignItems={'center'} justifyContent={'center'}>
            <Heading>
            <Typewriter
            options={{
              strings: ["Our Gallery", "Creative Heaven","Exhibit Space"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
            </Heading>
            <Text style={{fontSize: '1.8rem'}}>Browse through our extensive gallery of high quality images of Shri Rameshwar Dham Temple.</Text>
            <Button colorScheme='purple'>
                <Link to={'/gallery'}>Browse</Link>
            </Button>
        </VStack>
    </Stack>
  )
}

export default Gallery
