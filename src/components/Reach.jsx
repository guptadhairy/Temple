import { Container, Heading, Stack, VStack, Text, HStack } from '@chakra-ui/react';
import React from 'react';
import road from '../assets/road.mp4';
import train from '../assets/train.mp4';
import flight from '../assets/flight.mp4';

const Reach = () => {
  return (
    <div>
      <Container maxW={'container.xl'} p={[16, 8, 16]}>
        <Heading py={2} w={'fit-content'} borderBottom={'2px solid'} margin={'auto'} color={'purple.600'}>
          How To Reach ?
        </Heading>
        <VStack mt={8} spacing={4}>
          {/* Roadways */}
          <Stack direction={['column', 'row']} alignItems={['center', 'flex-start']}>
            <VStack justifySelf={['center', 'flex-start']} textAlign={['center', 'left']}>
              <Heading>Roadways</Heading>
              <Text>Saharanpur is directly connected by road to Indore, Surat, Gwaliar, Pune, Mumbai, Ahmedabad, Jaipur, Udaypur, Nasik, Mathura.</Text>
            </VStack>
            <video className='road' autoPlay loop muted src={road}></video>
          </Stack>

          {/* Railways */}
          <Stack direction={['column', 'row']} alignItems={['center', 'flex-start']}>
            <video className='road' autoPlay loop muted src={train}></video>
            <VStack justifySelf={['center', 'flex-start']} textAlign={['center', 'left']}>
              <Heading>Railways</Heading>
              <Text>Saharanpur is directly connected by railway line to Ahmedabad, Rajkot, Mumbai, Fouzabad, Lucknow, Dehradun, Delhi, Banaras, Kochin, Chennai, Bangalore, Hyderabad, Jaipur, Howrah and many more.</Text>
            </VStack>
          </Stack>

          {/* Airways */}
          <Stack direction={['column', 'row']} alignItems={['center', 'flex-start']}>
            <VStack justifySelf={['center', 'flex-start']} textAlign={['center', 'left']}>
              <Heading>Airways</Heading>
              <Text>Nearest airport is Jolly Grant Airport in Dehradun (44 K.m.). Flights arriving from Mumbai, Delhi, Ahmedabad, Gwalior.</Text>
            </VStack>
            <video className='flight' autoPlay loop muted src={flight}></video>
          </Stack>

          {/* Map */}
          <Heading>Directions</Heading>
          <Stack direction={['column','row']}>
            <VStack justifyContent={'flex-start'} p={['2','16']} alignItems={'flex-start'} width={'full'}>
                <HStack marginTop={'20px'} >
                
                <Text fontSize={'1.2rem'}>India</Text>
                </HStack>
                <HStack marginTop={'20px'}>
               
                <Text fontSize={'1.2rem'}>shivaayaweddings@gmail.com</Text>
                </HStack>
                <HStack marginTop={'20px'}>
                
                <Text fontSize={'1.2rem'}>9997993023</Text>
                </HStack>
            </VStack>
            <VStack width={'full'} p={['0','16']}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55304.75461316368!2d77.51522726343369!3d29.963701401581144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eea921f841f45%3A0x39baf780903811f!2sSaharanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1691348004528!5m2!1sen!2sin" title='destination wedding' width="500" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </VStack>
        </Stack>
        </VStack>
      </Container>
    </div>
  );
};

export default Reach;
