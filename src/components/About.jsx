import { Heading } from '@chakra-ui/react'
import React from 'react'
import about from '../assets/about.mp4'


const About = () => {
  return (
    <div>
      <Heading py={2} w={'fit-content'} borderBottom={'2px solid'} margin={'auto'} color={'purple.600'}>About The Temple</Heading>
      <video loop autoPlay muted src={about}></video>
    </div>
  )
}

export default About
