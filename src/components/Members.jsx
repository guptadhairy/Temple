import { Heading, Stack, VStack,Image, Text } from '@chakra-ui/react'
import React from 'react'
import temple from '../assets/temple.png'

import { motion } from 'framer-motion'
const Members = () => {
  return (
    <>
    <Heading mt={16}  py={16} w={'fit-content'} margin={'auto'} color={'purple.600'}>Committee Members Of Shri Rameshwar Dham</Heading>
    <Stack paddingY={'8'}  minH={'100vh'} color={'yellow.400'} direction={['column','row']} justifyContent={'space-between'}>
        <motion.div initial={{
            x: '-100%',
            opacity: 0,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        transition={{
            delay: '0.3'
        }}>
        <VStack width={'full'}  alignItems={'center'} justifyContent={'center'}>
        <Image className='member' src={temple} alt='Visit The Temple' />
        <Heading>PRADHAN</Heading>
        <Text style={{fontSize:"1.3rem"}}>Shri Madhukar Kashyap</Text>
        <Text>(Madhukar Katrers)</Text>
        </VStack>
        </motion.div>
        <motion.div initial={{
            x: '-100%',
            opacity: 0,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        transition={{
            delay: '0.6'
        }}>
        <VStack width={'full'}  alignItems={'center'} justifyContent={'center'}>
        <Image className='member' src={temple} alt='Visit The Temple' />
        <Heading>MANTRI</Heading>
        <Text style={{fontSize:"1.3rem"}}>Shri Devendra Kumar Gupta</Text>
        <Text>(Raghav Departmental Store)</Text>
        </VStack>
        </motion.div>
        <motion.div initial={{
            x: '-100%',
            opacity: 0,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        transition={{
            delay: '0.9'
        }}>
        <VStack width={'full'}  alignItems={'center'} justifyContent={'center'}>
        <Image className='member' src={temple} alt='Visit The Temple' />
        <Heading>KOSHADHYAKSH</Heading>
        <Text style={{fontSize:"1.3rem"}}>Shri Pankaj Malhotra</Text>
        <Text>(Property Dealer)</Text>
        </VStack>
        </motion.div>
    </Stack>
    </>
  )
}

export default Members
