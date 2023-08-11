import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, VStack, HStack} from '@chakra-ui/react';
import {BiMenuAltLeft} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import om from '../assets/om.mp4';
import '../components/header.css';
const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure()
  return (
    <>
    <Button zIndex={'overlay'} onClick={onOpen} pos={'fixed'} top={4} left={4} colorScheme='purple' p={0} h={10} w={10} borderRadius={'full'}><BiMenuAltLeft /></Button>
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
                <HStack>
                <video className='om' autoPlay loop src={om}></video>
                <h1 className='heading'>RAMESHWAR DHAM</h1>
                </HStack>
            </DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'}>
                    <Button  onClick={onClose} colorScheme='purple' variant={'ghost'}>
                        <Link to={'/'} >Home</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                        <Link to={'/about'}>About</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                        <Link to={'/contact'}>Contact</Link>
                    </Button>
                    
                    <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                        <Link to={'/donate'}>Donate</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                        <Link to={'/booking'}>Booking +</Link>
                    </Button>
                </VStack>
                <HStack pos={'absolute'} bottom={10} justifyContent={'space-evenly'} width={'full'} left={0}>
                    <Button onClick={onClose} colorScheme='purple'>
                        <Link to={'/login'}>Log In</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                        <Link to={'/signup'}>Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header
