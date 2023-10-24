'use client'

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Badge,
  useColorModeValue,
  HStack,
  Flex,
  StackDivider,
} from '@chakra-ui/react'

interface FeatureProps {
  title: string
  description: string
}

const Feature = ({ title, description }: FeatureProps) => {
  return (
      <Flex direction='row' alignItems='center' justifyContent='space-between'>
      <Text fontWeight={600} fontSize='sm' color='white'>{title}</Text>
      <Text fontWeight={600} fontSize='sm' color='white'>{description}</Text>
      </Flex>
  )
}


export default function UserCard() {
  return (
    <Center py={4}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg="#014B84"
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
      <Heading fontSize={'2xl'} fontFamily={'body'} color='white' mb={2}>
          Office Information 
        </Heading>
        <Stack divider={
              <StackDivider borderColor='white' />
            }>
        <HStack alignItems="center" justifyContent="space-between">
        <Avatar
          size={'xl'}
          src={
            'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Stack>
        <Heading fontSize={'lg'} fontFamily={'body'} color='white'>
          Ibrahim Farinloye
        </Heading>
        <Text fontWeight={600} color='white' fontSize={'sm'}>
          station chief
        </Text>
        </Stack>
        </HStack>
          
          <Feature title="Mobile:" description='08064763531'/>
          <Feature title="Location:" description='No 145 Mobolaji Bank Anthony way, ikeja, Lagos State.'/>

        <HStack justifyContent="space-between" alignItems='center'>
        <Heading fontSize={'sm'} fontFamily={'body'} color='white'>
          Area of coverage:
        </Heading>
        <Stack align={'left'} justify={'center'} direction={'row'}>
          <Badge
            px={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            Lagos
          </Badge>
          <Badge
            px={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            Ondo
          </Badge>
          <Badge
            px={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            Oyo
          </Badge>
        </Stack>
        </HStack>
        </Stack>
      </Box>
    </Center>
  )
}