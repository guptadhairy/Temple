import { Container, Heading, Stack, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import road from '../assets/road.mp4'
import train from '../assets/train.mp4'
import flight from '../assets/flight.mp4'
import map from '../assets/map.mp4'
const Reach = () => {
  return (
    <div>
        <Container maxW={'container.xl'} p={16}>
            <Heading py={2} w={'fit-content'} borderBottom={'2px solid'} margin={'auto'} color={'purple.600'}>How To Reach ?</Heading>
            <VStack mt={8}>
                <Stack direction={['column','row']} alignItems={'center'} >
                    <VStack justifySelf={'flex-start'}>
                        <Heading >Roadways</Heading>
                        <Text>Saharanpur is directly connected by road to Indore, Surat, Gwaliar, Pune, Mumbai, Ahmedabad, Jaipur, Udaypur, Nasik, Mathura.</Text>
                    </VStack>
                    <video className='road' autoPlay loop muted src={road}></video>
                </Stack>
                <Stack direction={['column','row']} alignItems={'center'} >
                <video className='road' autoPlay loop muted src={train}></video>
                    <VStack justifySelf={'flex-start'}>
                        <Heading >Railways</Heading>
                        <Text>Saharanpur is directly connected by railway line to Ahmedabad, Rajkot, Mumbai, Fouzabad, Lucknow,Dehradun, Delhi, Banaras, Kochin, Chennai, Bangalore, Hyderabad, Jaipur, Howrah and many more.</Text>
                    </VStack>
                    
                </Stack>
                <Stack direction={['column','row']} alignItems={'center'} >
                    <VStack justifySelf={'flex-start'}>
                        <Heading >Airways</Heading>
                        <Text>Nearest airport is Jolly Grant Airport in Dehradun (44 K.m.). Flights arriving from Mumbai, Delhi, Ahmedabad, Gwalior.</Text>
                    </VStack>
                    <video className='flight' autoPlay loop muted src={flight}></video>
                </Stack>
                <video className='map' src={map} autoPlay loop muted></video>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1547.1743834893202!2d77.55082674913442!3d29.989206927319454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eea7b1ffb920b%3A0x751149a3d313528!2sSardar%20Colony%2C%20Brij%20Vihar%20Colony%2C%20Saharanpur%2C%20Uttar%20Pradesh%20247001!5e0!3m2!1sen!2sin!4v1689967533097!5m2!1sen!2sin" title="Example Website" width="1000" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </VStack>
        </Container>
    </div>
  )
}

export default Reach
