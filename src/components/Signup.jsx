import { Button, Heading, Input, VStack,Text, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import signup from '../assets/signup.mp4'
import { Link } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast'
import { server } from '..';
const Signup = () => {
  const [password,setSpassword] = useState("");
  const [email,setSemail] = useState("");
  const [name,setSname] = useState("");


  const loginHandler = async(e)=>{
    e.preventDefault();

    try {
      const {data} = await axios.post(`${server}/new`,{
        name,email,password
      },
      {
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials: true
      });
      toast.success(data.message);
    } catch (error) {
      toast.error("Some error");
      console.log(error);
    }
    setSname("");
    setSemail("");
    setSpassword("");
  }
  return (
    <Stack direction={['column','row']} minH={'50vh'} p={16}>
        <VStack width={'full'} p={[4, 8, 16]} maxWidth={['100%', '100%', '100%']}>
          <Heading justifyContent={'center'} color={'purple.600'}>Create Account</Heading>
          <form className='signup' onSubmit={loginHandler}>
          <Input value={name} onChange={(e) =>setSname(e.target.value)} placeholder='Enter Your Name' />
          <Input value={email} onChange={(e) =>setSemail(e.target.value)}   placeholder='Enter Email Address' />
          <Input value={password} onChange={(e) =>setSpassword(e.target.value)}  placeholder='Enter Password' />
            <Button type='submit' mt={4} width={'full'} colorScheme='purple'>Sign Up</Button>
          </form>
          <Text>Already Signed up ? <Link color='purple' to={'/login'}>Log In</Link> </Text>
        </VStack>
        <VStack width={'full'} display={'block'}>
          <video style={{borderRadius: '5px'}} src={signup} loop autoPlay muted></video>
        </VStack>
    </Stack>
  )
}

export default Signup