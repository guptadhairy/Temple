import { Button, Container, HStack, Heading, Input, VStack,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import signup from '../assets/signup.mp4'
import { Link } from 'react-router-dom'
const Signup = () => {
  const [spassword,setSpassword] = useState("");
  const [semail,setSemail] = useState("");
  const [sname,setSname] = useState("");
  const [snumber,setSnumber] = useState("");

  const loginHandler = (e)=>{
    e.preventDefault();
    setSname("");
    setSemail("");
    setSpassword("");
    setSnumber("");
  }
  return (
    <Container maxW={'container.xl'} minH={'50vh'} p={16}>
      <HStack>
        <VStack width={'full'} p={16}>
          <Heading color={'purple.600'}>Create Account</Heading>
          <form className='signup' onSubmit={loginHandler}>
          <Input value={sname} onChange={(e) =>setSname(e.target.value)} placeholder='Enter Your Name' />
          <Input value={semail} onChange={(e) =>setSemail(e.target.value)}   placeholder='Enter Email Address' />
          <Input value={spassword} onChange={(e) =>setSpassword(e.target.value)}  placeholder='Enter Password' />
          <Input value={snumber} onChange={(e) =>setSnumber(e.target.value)} type='number' placeholder='Enter Phone Number'/>
            <Button type='submit' mt={4} width={'full'} colorScheme='purple'>Sign Up</Button>
          </form>
          <Text>Already Signed up ? <Link color='purple' to={'/login'}>Log In</Link> </Text>
        </VStack>
        <VStack width={'full'}>
          <video style={{borderRadius: '5px'}} src={signup} loop autoPlay muted></video>
        </VStack>
      </HStack>
    </Container>
  )
}

export default Signup
