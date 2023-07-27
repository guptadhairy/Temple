import { HStack, Heading, Input, Stack, VStack,Text,Image, Container, Button} from '@chakra-ui/react'
import React, { useState } from 'react';
import call from '../assets/call.mp4'
import { FaRegPaperPlane,FaYoutube,FaFacebook,FaInstagram } from 'react-icons/fa';
import axios from 'axios';
import gallery from '../assets/gallery.png' 
import { server } from '..';
import { toast } from 'react-hot-toast';

const Footer = () => {
    const [email,setEmail] = useState("");
    const formHandler = async(e)=>{
        e.preventDefault();

        try {
            const {data} = await axios.post(`${server}/newsletter`,{
                email
            },
            {
                headers:{
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });
            toast.success(data.message);
        } catch (error) {
            toast.error("Some error");
            console.log(error);
        }
        setEmail("");
    }
  return (
    <>
    <Container className='short_footer' maxW={'container.md'} minH={'10vh'} p={4} bgColor={'blackAlpha.900'}>
        <HStack>
            <video className='chat' src={call} autoPlay muted loop></video>
            <VStack width={'full'}>
            <Heading py={2} w={'fit-content'} borderBottom={'2px solid'} margin={'auto'} color={'whiteAlpha.900'}>Having Any Issues ?</Heading>
            <Text color={'whiteAlpha.900'}>Call Us..</Text>
            </VStack>
            <Heading color={'white'}>9997993023</Heading>
        </HStack>
    </Container>
    <Stack paddingY={'16'} bgColor={'blackAlpha.900'} minH={'50vh'} color={'yellow.400'} direction={['column','row']}>
        <VStack width={'full'} borderRight={'2px'} alignItems={'center'} justifyContent={'center'}>
        <HStack>
            <form onSubmit={formHandler}>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} focusBorderColor='yellow' width={'300px'} placeholder='Subscribe for NewsLetter' />
            <Button colorScheme='purple' mx={4} type='submit'><FaRegPaperPlane /></Button>
            </form>
        </HStack>
        <Text>All Rights Reserved</Text>
        <Text>shrirameshwardham@gmail.com</Text>
        </VStack>
        <VStack width={'full'} borderRight={'2px'} alignItems={'center'} justifyContent={'center'}>
            <Heading> RAMESHWAR DHAM</Heading>
            <Image height={'50px'} width={'50px'} borderRadius={'100%'} src={gallery} alt='Founder'/>
            <Text>Created By : DHAIRYA GUPTA </Text>
            <Text>Unlock Your Potential, Learn Anywhere, Anytime</Text>
            
        </VStack>
        <VStack width={'full'} alignItems={'center'} justifyContent={'center'}>
            <Heading margin={'8'}>FOLLOW US</Heading>
            <HStack>
                <a href='https://linkedin.com' target='blank'><FaYoutube size={'40px'} /></a>
                <Text fontSize={'20px'}>Youtube</Text>
            </HStack>
            <HStack>
            <a href='https://facebook.com' target='blank'><FaFacebook size={'40px'} /></a>
                <Text fontSize={'20px'}>Facebook</Text>
            </HStack>
            <HStack>
            <a href='https://instagram.com' target='blank'><FaInstagram size={'40px'} /></a>
                <Text fontSize={'20px'}>Instagram</Text>
            </HStack>
        </VStack>
    </Stack>
    </>
  )
}

export default Footer

