import { Heading, VStack, Text, Stack, Image, Container, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import temple from '../assets/temple.png'
import { RiWhatsappFill } from 'react-icons/ri'
import chat from '../assets/chat1.mp4'
import chat2 from '../assets/chat2.mp4'
const Booking = () => {
    return (
        <div>
            <VStack>
                <Heading py={2} w={'fit-content'} borderBottom={'2px solid'} margin={'auto'} color={'purple.600'}>
                    Online Pooja Booking.
                </Heading>
                <Text fontSize={'1rem'}>Looking to schedule a Pooja? Connect with our pandits via chat for hassle-free bookings.</Text>
            </VStack>
            <Stack paddingY={'8'} minH={'100vh'} color={'yellow.400'} direction={['column', 'row']} justifyContent={'space-evenly'}>
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
                    <VStack width={'full'} alignItems={'center'} justifyContent={'center'}>
                        <Image className='member' src={temple} alt='Visit The Temple' />
                        <Heading>PANDIT</Heading>
                        <Text style={{ fontSize: "1.3rem" }}>Shri Yogesh Dixit Ji</Text>
                        <Container maxW={'container.md'} minH={'10vh'} p={4}>
                            <HStack>
                                <video className='chat' src={chat} autoPlay muted loop></video>
                                <Text>Click to chat</Text>
                                <a href='https://wa.me/9897807009' target='blank'><RiWhatsappFill color='green' size={'40px'} /></a>
                            </HStack>
                        </Container>
                    </VStack>
                </motion.div>
                <motion.div initial={{
                    x: '100%',
                    opacity: 0,
                }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: '0.6'
                    }}>
                    <VStack width={'full'} alignItems={'center'} justifyContent={'center'}>
                        <Image className='member' src={temple} alt='Visit The Temple' />
                        <Heading>PUJARI</Heading>
                        <Text style={{ fontSize: "1.3rem" }}>Shri YXZ sharma ji</Text>
                        <Container maxW={'container.md'} minH={'10vh'} p={4}>
                            <HStack mx={16}>
                            <video className='chat' src={chat2} autoPlay muted loop></video>
                                <Text>Click to chat</Text>
                                <a href='https://wa.me/9897807009' target='blank'><RiWhatsappFill color='green' size={'40px'} /></a>
                            </HStack>
                        </Container>
                    </VStack>
                </motion.div>
            </Stack>
        </div>
    )
}

export default Booking
