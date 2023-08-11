import { HStack, Stack, VStack, Text, Button, Input } from '@chakra-ui/react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {FaYoutube,FaInstagram,FaFacebook,FaRegPaperPlane} from 'react-icons/fa'
import { server } from '..';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const Footer2 = () => {
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
    <hr style={{color: "black",height:"3px"}} />
    <Stack direction={['column','row']} p={10} justifyContent={'space-between'}>
        <VStack>
            <HStack>
                <Link to={'/'}>Home |</Link>
                <Link to={'/donate'}>Donate |</Link>
                <Link to={'/about'}>About Us |</Link>
                <Link to={'/contact'}>Contact Us</Link>
            </HStack>
            <Text fontWeight={'semibold'} mt={['5px','20px']} alignSelf={['center','flex-start']}>© 2023 | www.shrirameshwardham.com</Text>
        </VStack>
        <VStack >
        <HStack>
            <form onSubmit={formHandler}>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} focusBorderColor='yellow' width={'230px'} placeholder='Subscribe for NewsLetter' />
            <Button colorScheme='purple' mx={4} type='submit'><FaRegPaperPlane /></Button>
            </form>
        </HStack>
        <Text fontWeight={'semibold'} marginLeft={'-40px'}>Shri Rameshwar Dham Trust</Text>
        </VStack>
        <VStack>
            <HStack>
                <Button variant={'unstyled'}><FaYoutube size={'30px'} /></Button>
                <Button variant={'unstyled'}><FaInstagram size={'30px'} /></Button>
                <Button variant={'unstyled'}><FaFacebook size={'30px'} /></Button>
            </HStack>
            <Text>developed by Dhairya Gupta</Text>
        </VStack>
    </Stack>
    </>
  )
}

export default Footer2

