
import { Heading } from '@chakra-ui/react'
import { useState } from 'react';
import UsersTable from '../components/UsersTable';
import useUser from '../hooks/useUser';

const UserManagement = () => {
    const [queryParams, setQueryParams] = useState({});

    const {users} = useUser(queryParams)
  return (    
    <>
    <Heading> User Management</Heading>
    <UsersTable users={users}/>      
    </>
  )
}

export default UserManagement