import { useState } from 'react';
import {
  Table,
  Tbody,
  Tr,
  Td,
  Input,
  TableCaption,
  TableContainer,
  Flex,
  Button, 
  InputGroup,
  InputLeftElement,
  HStack,
  Stack,
  Thead,
  Th,
  Box,
  FormControl,
  FormLabel,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Select,
} from '@chakra-ui/react';
import { RiAddLine } from "react-icons/ri";
import { BiSearchAlt2, } from 'react-icons/bi';
import UserRows from './UserRows';
import useStations from '../hooks/useStation';
import useUser from '../hooks/useUser';


interface User {
  users: UserItem[]
}

 interface UserItem {
    _id: string,
    firstname: string,
    surname: string,
    email: string
    role: Role,
    station: Station
}

interface Role {
    name: string
}

interface Station {
    name: string
}

const itemsPerPage = 10;


    const userForm = () => {
      const {stations} = useStations();

      return (
        <Stack spacing={4}>
          <HStack>
            <Box>
              <FormControl id="firstname" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastname">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
          </HStack>
          <Stack justify='space-around'>
            <Box>
              <FormControl id="role" isRequired>
              <Select placeholder='Role' size='lg'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
              </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="station">
              <Select placeholder='Station' size='lg'>
                {stations?.map(station => (
                <option key={station?._id} value={station._id}>
                  {station.name}
                </option>
              ))}              
              </Select>
              </FormControl>
            </Box>
          </Stack>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Sign up
            </Button>
          </Stack>
        </Stack>
      
      )
    }




const UsersTable = () => {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [queryParams, setQueryParams] = useState({});
  const {users} = useUser(queryParams)
  
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSearchTextChange = (event: any) => {
    setSearchText(event.target.value);
    setCurrentPage(1);   
  };

  const filteredUsers = searchText === ''
    ? users
    : users?.filter((users) => {
        return Object.values(users).some((value) =>
          String(value).toLowerCase().includes(searchText.toLowerCase())
        );
      });

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers?.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const totalPages = Math.ceil(filteredUsers?.length / itemsPerPage);


  return (
    <div style={{ width: '100%', backgroundColor: 'white', borderRadius: '10px'}}>
      <Stack mb={4}>
      <HStack mb={4} mt={4} justify='space-around'>
          <InputGroup ml={4}>
          <InputLeftElement pointerEvents='none'>
            <BiSearchAlt2 color='gray.300' />
          </InputLeftElement>
          <Input        
            type="text"
            placeholder="Search Users..."
            value={searchText}
            onChange={handleSearchTextChange}
            width='50%' />
        </InputGroup>
        <Button leftIcon={<RiAddLine />} colorScheme='teal' variant='solid' size='sm' mr={8} onClick={onOpen}>
            Add User
        </Button>
        </HStack>
        </Stack>
    <TableContainer bg="#FAFAFA" borderRadius="10px">
      <Table size='lg'>
      <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Role</Th>
            <Th>E-mail</Th>
            <Th>Station</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
      <TableCaption>Users</TableCaption>
            <Tbody>
              {currentUsers.map((user, index) => (
                <UserRows
                    firstname={user?.firstname}
                    surname={user?.surname}
                    role={user?.role.name}
                    email={user?.email}
                    station={user?.station.name}
                />
              ))}
            </Tbody>
            <tfoot>
              <Tr>
                <Td colSpan={5}>
                  <Flex justifyContent="center">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <Button
                        key={index}
                        size="sm"
                        variant="solid"
                        colorScheme={index + 1 === currentPage ? 'blue' : 'gray'}
                        onClick={() => setCurrentPage(index + 1)}
                        borderRadius="full"
                        mx={1}
                      >
                        {index + 1}
                      </Button>
                    ))}
                  </Flex>
                </Td>
              </Tr>
            </tfoot>
          </Table>
          </TableContainer>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {userForm()}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div> 
  );
};

export default UsersTable;


