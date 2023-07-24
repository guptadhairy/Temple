import { Button, Container, HStack, Heading, Input, VStack,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import login from '../assets/login.mp4'
import { Link } from 'react-router-dom'
const Login = () => {
  const [lpassword,setLpassword] = useState("");
  const [lemail,setLemail] = useState("");

  const loginHandler = (e)=>{
    e.preventDefault();
    setLemail("");
    setLpassword("");
  }
  return (
    <Container maxW={'container.xl'} minH={'50vh'} p={16}>
      <HStack>
        <VStack width={'full'} p={16}>
          <Heading color={'purple.600'}>Welcome Back</Heading>
          <form onSubmit={loginHandler}>
          <Input value={lemail} onChange={(e) =>setLemail(e.target.value)}  focusBorderColor='purple' placeholder='Enter Email Address' />
          <Input value={lpassword} onChange={(e) =>setLpassword(e.target.value)}  focusBorderColor='purple' placeholder='Enter Password' />
            <Button type='submit' mt={4} width={'full'} colorScheme='purple'>Log In</Button>
          </form>
          <Text>New User? <Link color='purple' to={'/signup'}>Sign Up</Link> </Text>
        </VStack>
        <VStack width={'full'}>
          <video style={{borderRadius: '5px'}} src={login} loop autoPlay muted></video>
        </VStack>
      </HStack>
    </Container>
  )
}

export default Login
