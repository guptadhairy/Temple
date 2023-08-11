import React from 'react'
import Marquee from "react-fast-marquee";
import god4 from '../assets/god4.jpg'
import god3 from '../assets/god3.avif'
import god5 from '../assets/god5.jpg'
import god6 from '../assets/god6.jpeg'
import temple from '../assets/temple.png';
import live from '../assets/live.png';
import pooja from '../assets/pooja.jpg'
import { Heading } from '@chakra-ui/react';
const Devoties = () => {
  return (
    <div>
      <Heading mt={4} py={2} w={'fit-content'} borderBottom={'2px solid'} margin={'auto'} color={'purple.600'}>
      Pranpratishtha's Poojan
      </Heading>
      <Marquee style={{marginTop: '30px'}} pauseOnHover={true} direction='left' gradient={true}>
        <div className='image_wraper' >
          <img src={temple} alt='marquee' />
        </div>
        <div className='image_wraper'>
          <img src={god3} alt='marquee' />
        </div>
        <div className='image_wraper'>
          <img src={god4} alt='marquee' />
        </div>
        <div className='image_wraper'>
          <img src={god5} alt='marquee' />
        </div>
        <div className='image_wraper'>
          <img src={god6} alt='marquee' />
        </div>
        <div className='image_wraper'>
          <img src={live} alt='marquee' />
        </div>
        <div className='image_wraper'>
          <img src={pooja} alt='marquee' />
        </div>
      </Marquee>
      <Marquee style={{marginTop: '30px'}} pauseOnHover={true} direction='right' gradient={true}>
        <div className='image_wraper' >
          <img src={temple} alt='marquee' />
        </div>
        <div className='image_wraper'>
          <img src={god3} alt='marquee' />
        </div>
        <div className='image_wraper'>
          <img src={god4} alt='marquee' />
        </div>
        <div className='image_wraper'>
          <img src={god5} alt='marquee' />
        </div>
        <div className='image_wraper'>
          <img src={god6} alt='marquee' />
        </div>
        <div className='image_wraper'>
          <img src={live} alt='marquee' />
        </div>
        <div className='image_wraper'>
          <img src={pooja} alt='marquee' />
        </div>
      </Marquee>
    </div>
  )
}

export default Devoties
