import { Heading, VStack, Text, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, HStack, Input, Button, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import qr from '../assets/qr.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { server } from '..';
import { toast } from 'react-hot-toast';
const Donate = () => {
    const [name, setDname] = useState("");
    const [email, setDemail] = useState("");
    const [phone,setDphone] = useState("");
    const [amount, setDamount] = useState("");
    const [transaction, setTrans] = useState("");
    const navigate = useNavigate();

    const donateHandler = async(e)=>{
        e.preventDefault();

        try {
            const {data} = await axios.post(`${server}/payment`,{
                name,email,phone,amount,transaction
            },
            {
                headers:{
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });
            toast.success(data.message);
        } catch (error) {
            toast.error("Some internal error");
            console.log(error);
        }
        setDname("");
        setDemail("");
        setDphone("");
        setDamount("");
        setTrans("");
        navigate('/paymentsuccess');
    }
    return (
        <div>
            <VStack mt={16}>
                <Heading py={2} w={'fit-content'} borderBottom={'2px solid'} margin={'auto'} color={'purple.600'}>
                    DONATION
                </Heading>
                <Text mt={8} fontSize={'1rem'}>There are several options to make a donation to Shri Rameshwar Dham Temple Trust like Cheques & Demand Drafts, Cash Cardsand Internet Banking (Net Banking).</Text>
                <Text mt={4} fontSize={'1rem'}>Please deposit Cash in the Hundis(Dan Patr) which have been kept in the Temple premises.</Text>
                <Text fontSize={'2rem'}>Do not hand over cash to any person.</Text>
                <Text px={16} fontSize={'1rem'} mt={4}>Cheques, Demand Drafts and Pay Orders in ANY CURRENCY have to be made in favour of Shri Rameshwar Dham Temple Trust and handed over at the Office on the first floor of the Temple. The Office will issue a donation receipt.</Text>
                <Heading mt={8}>Bank Details</Heading>
                <TableContainer bgColor={'purple.400'}>
                    <Table>
                        <TableCaption>Bank Details For Net Banking</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Bank Name</Th>
                                <Th>Branch</Th>
                                <Th>Account Number</Th>
                                <Th>IFSC Code</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Union Bank Of India</Td>
                                <Td>Kanhaiyalal Cloth Market, Saharanpur, 247001</Td>
                                <Td>398302010566658</Td>
                                <Td>UBIN0540935</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Heading mt={8}>Donate Online</Heading>
                <HStack>
                    <VStack width={'full'} p={16}>
                        <Heading color={'purple.600'}>Scan QR Code</Heading>
                        <form onSubmit={donateHandler} className='signup'>
                            <Input value={name} onChange={(e) =>setDname(e.target.value)} type='text' placeholder='Enter Your Name' />
                            <Input value={email} onChange={(e) =>setDemail(e.target.value)} type='email' placeholder='Enter Email Address' />
                            <Input value={phone} onChange={(e) =>setDphone(e.target.value)} type='number' placeholder='Enter Your Phone Number' />
                            <Input value={amount} onChange={(e) =>setDamount(e.target.value)} type='number' placeholder='Enter The Amount' />
                            <Text color={'red.400'}>* Please Enter the Transaction Id of the payment. So that we can store it in the database.</Text>    
                            <Input value={transaction} onChange={(e) =>setTrans(e.target.value)} required type='number' placeholder='Enter Transaction Id' />
                            <Button type='submit' mt={4} width={'full'} colorScheme='purple'>Donate Now</Button>
                            <Text color={'green.700'} mt={4}>Please Don't fill the fake details.</Text>
                        </form>
                    </VStack>
                    <VStack width={'full'}>
                        <Image src={qr} alt='QR Code' />
                    </VStack>
                </HStack>
            </VStack>

        </div>
    )
}

export default Donate
