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
  Text,
} from '@chakra-ui/react';
import { RiAddLine } from "react-icons/ri";
import { BiSearchAlt2, } from 'react-icons/bi';
import UserRows from './UserRows';
import useStations from '../hooks/useStation';
import useUser from '../hooks/useUser';
import useRole from '../hooks/useRole';


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
      const {roles} = useRole();
      const {createUser} = useUser()
      const [passwordError, setPasswordError] = useState("");

      const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        role: "",
        station: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
      };

      const handleRoleChange = (e: any) => {
        const { value } = e.target;
        setFormData((prevData) => ({ ...prevData, role: value }));
      };
    
      const handleStationChange = (e: any) => {
        const { value } = e.target;
        setFormData((prevData) => ({ ...prevData, station: value }));
      };
    
      const handleSubmit = () => {
        
        if (formData.password !== formData.confirmPassword) {
          setPasswordError("Passwords do not match");
          return;
        }
    
        const newUser = {
          firstname: formData.firstname,
          surname: formData.lastname,
          role:formData.role, 
          station: formData.station, 
          email: formData.email,
          password: formData.password
        };

        //console.log(newUser)
        createUser(newUser);
      };

      return (
        <Stack spacing={4}>
          <HStack>
            <Box>
              <FormControl id="firstname" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="text" size='md' onChange={handleChange} value={formData.firstname}/>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastname">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" size='md' onChange={handleChange} value={formData.lastname}/>
              </FormControl>
            </Box>
          </HStack>
          <Stack justify='space-around'>
            <Box>
              <FormControl id="role" isRequired>
              <Select placeholder='Role' size='md' onChange={handleRoleChange}>
              {roles?.map(role => (
                <option key={role?._id} value={role._id}>
                  {role?.name}
                </option>
              ))}
              </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="station">
              <Select placeholder='Station' size='md' onChange={handleStationChange}>
                {stations?.map(station => (
                <option key={station?._id} value={station._id} >
                  {station?.name}
                </option>
              ))}              
              </Select>
              </FormControl>
            </Box>
          </Stack>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" size='md' onChange={handleChange} value={formData.email}/>
          </FormControl>
          <HStack>
            <Box>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" size='md' onChange={handleChange} value={formData.password}/>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="confirmPassword" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input type="password" size='md'onChange={handleChange} value={formData.confirmPassword}/>
              </FormControl>
            </Box>
            {passwordError && (
            <Text color="red.500" fontSize="sm">
              {passwordError}
            </Text>
          )}

          </HStack>
          <Stack spacing={10} pt={2}>
            <Button
              onClick={handleSubmit}
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


