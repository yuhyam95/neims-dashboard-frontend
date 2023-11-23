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

interface UserProps {
  data: DataProps
}

interface DataProps {
  head: string,
  mobile: number,
  location: string,
  areaofcoverage: string[]
}

export default function UserCard({ data}: UserProps) {
    console.log(data)
  //const {head, mobile, location} = data;

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
          {data?.head}
        </Heading>
        <Text fontWeight={600} color='white' fontSize={'sm'}>
          Head of Station
        </Text>
        </Stack>
        </HStack>
        
      <Flex direction='row' alignItems='center' justifyContent='space-between'>
      <Text fontWeight={600} fontSize='sm' color='white'>Mobile: </Text>
      <Text fontWeight={600} fontSize='sm' color='white'>0{data?.mobile}</Text>
      </Flex>
      <Flex direction='row' alignItems='center' justifyContent='space-between'>
      <Text fontWeight={600} fontSize='sm' color='white'>Location:</Text>
      <Text fontWeight={600} fontSize='sm' color='white'>{data?.location}</Text>
      </Flex>
        
        
        {/*           
          <Feature title="Mobile:" description={mobile}/>
          <Feature title="Location:" description={address}/> */}

        <HStack justifyContent="space-between" alignItems='center'>
        <Heading fontSize={'sm'} fontFamily={'body'} color='white'>
          Area of coverage:
        </Heading>
        <Stack align={'left'} justify={'center'} direction={'row'}>
        {data?.areaofcoverage.map((item, index) => (
              <Badge
                key={index} 
                px={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}
              >
                {item}
              </Badge>
            ))}        
        </Stack>
        </HStack>
        </Stack>
      </Box>
    </Center>
  )
}