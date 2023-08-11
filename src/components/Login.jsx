import { Button, HStack, Heading, Input, VStack, Text, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import login from '../assets/login.mp4';
import { Link } from 'react-router-dom';

const Login = () => {
  const [lpassword, setLpassword] = useState('');
  const [lemail, setLemail] = useState('');

  const loginHandler = (e) => {
    e.preventDefault();
    setLemail('');
    setLpassword('');
  };

  return (
    <>
      <Heading color={'purple.500'} height={'100px'} display={'flex'} justifyContent={'center'} alignItems={'center'} margin={'auto'}>
        Welcome Back
      </Heading>
      <Stack direction={['column', 'column', 'row']} minH={'60vh'} p={['4', '16']}>
        <HStack width="100%" justifyContent={['center', 'center', 'flex-start']}>
          <VStack width={['full', 'full', 'auto']} p={[4, 8, 16]} maxWidth={['100%', '100%', '100%']}>
            <form onSubmit={loginHandler}>
              <Input
                value={lemail}
                onChange={(e) => setLemail(e.target.value)}
                focusBorderColor="purple"
                placeholder="Enter Email Address"
              />
              <Input
                marginTop={'10px'}
                value={lpassword}
                onChange={(e) => setLpassword(e.target.value)}
                focusBorderColor="purple"
                placeholder="Enter Password"
                type="password"
              />
              <Button type="submit" mt={4} width={'full'} colorScheme="purple">
                Log In
              </Button>
            </form>
            <Text>
              New User? <Link color="purple" to={'/signup'}>
                Sign Up
              </Link>{' '}
            </Text>
          </VStack>
        </HStack>
        <VStack display={'block'} flexShrink={0}>
          <video style={{ borderRadius: '5px' }} src={login} loop autoPlay muted></video>
        </VStack>
      </Stack>
    </>
  );
};

export default Login;
