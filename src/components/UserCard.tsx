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

interface UserProps {
  data: DataProps
}

interface DataProps {
  head: string,
  mobile: number,
  address: string
}
const Feature = ({ title, description }: FeatureProps) => {
  return (
      <Flex direction='row' alignItems='center' justifyContent='space-between'>
      <Text fontWeight={600} fontSize='sm' color='white'>{title}</Text>
      <Text fontWeight={600} fontSize='sm' color='white'>{description}</Text>
      </Flex>
  )
}


export default function UserCard({ data}: UserProps) {
    //console.log(data)
    // const {head, mobile, address} = data;

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
            'https://www.freepik.com/free-vector/illustration-businessman_2606517.htm#query=user%20avatar&position=6&from_view=search&track=ais'
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
          Yusuf Habu
        </Heading>
        <Text fontWeight={600} color='white' fontSize={'sm'}>
          Head of Station
        </Text>
        </Stack>
        </HStack>
        
      <Flex direction='row' alignItems='center' justifyContent='space-between'>
      <Text fontWeight={600} fontSize='sm' color='white'>Mobile: </Text>
      <Text fontWeight={600} fontSize='sm' color='white'>08064763531</Text>
      </Flex>
      <Flex direction='row' alignItems='center' justifyContent='space-between'>
      <Text fontWeight={600} fontSize='sm' color='white'>Location:</Text>
      <Text fontWeight={600} fontSize='sm' color='white'>19, 21 road, 2nd Avenue Gwarinpa, FCT</Text>
      </Flex>
        
        
        {/*           
          <Feature title="Mobile:" description={mobile}/>
          <Feature title="Location:" description={address}/> */}

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