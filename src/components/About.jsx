import { Heading } from '@chakra-ui/react'
import React from 'react'
import about from '../assets/about.mp4'


const About = () => {
  return (
    <div>
      <Heading margin={'auto'}>About Temple</Heading>
      <video loop autoPlay muted src={about}></video>
    </div>
  )
}

export default About
