
import { Heading } from '@chakra-ui/react'
import useUsers from '../hooks/useUser'
import { useState } from 'react';
import UsersTable from '../components/UsersTable';

const UserManagement = () => {
    const [queryParams, setQueryParams] = useState({});
    const {users} = useUsers(queryParams)

    console.log(users)
  return (    
    <>
    <Heading> User Management</Heading>
    <UsersTable users={users}/>    
    </>
  )
}

export default UserManagement