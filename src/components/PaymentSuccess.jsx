import { Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import pay from '../assets/pay.mp4';
import {motion} from 'framer-motion'
const PaymentSuccess = () => {
  return (
    <div>
        <motion.div initial={{
            y: '-100%',
            opacity: 0,
        }}
        whileInView={{
            y: 0,
            opacity: 1
        }}
        transition={{
            delay: 4
        }}>
            <Heading py={2} w={'fit-content'} margin={'auto'} color={'green.600'}>Payment Successfull</Heading>
        </motion.div>
      <VStack>
        <video src={pay} loop autoPlay muted></video>
      </VStack>
    </div>
  )
}

export default PaymentSuccess
