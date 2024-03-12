'use client'

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from '@chakra-ui/react'
import { useState } from 'react';
import apiClient from '../services/api-client';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { jwtDecode } from 'jwt-decode';
import nemalogo from '../assets/nema-logo1.png'
import warehouse from '../assets/warehouse.jpg'

export default function Login() {

  const navigate = useNavigate()
  const {login} = useAuth()
  const [showError, setShowError] = useState(false);
  const [isLoading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  
  const handleLogin = async (e: any) => {
    e.preventDefault(); 
    try {
      setLoading(true)
      const response = await apiClient.post('/auth/login', formData);
      if (response.status === 200) {
        const { _id } = jwtDecode(response.data.token) as { _id: string, role: {_id: string, name: string} };
        await login(_id);
        setLoading(false)
        navigate('/');
      } 
    } catch (error) {
      console.error('Error during login:', error);
      setShowError(true)
      setLoading(false)
    }
  };

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Image 
            boxSize='300px'
            objectFit='cover'
            src={nemalogo}/>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={handleInputChange}/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={handleInputChange}/>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'blue.500'}>Forgot password?</Text>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'} isLoading={isLoading}
                    loadingText='Logging in' onClick={handleLogin}>
              Sign in
            </Button>
          </Stack>
          {showError && <Text color={'red.500'}>Login Failed, try again</Text>}
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            warehouse
          }
        />
      </Flex>
    </Stack>
  )
}