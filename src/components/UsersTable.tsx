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
} from '@chakra-ui/react';

import { BiSearchAlt2, } from 'react-icons/bi';
import UserRows from './UserRows';


interface UserProps {
  users: UserItem[],
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

const UsersTable = ({users}: UserProps) => {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

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
      <HStack mb={4} mt={4} >
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
    </div> 
  );
};

export default UsersTable;


