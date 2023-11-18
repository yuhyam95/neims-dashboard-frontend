import {
    Tr,
    Td,
    Text,
    Button,
  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";  
  
  interface Props {
    firstname: string,
    surname: string,
    email: string,
    station: string,
    role: string
  }
  
  function UserRows(props: Props) {
    const { firstname, surname, email, station, role} = props;
    
    const navigate = useNavigate();

    const handleClick = () => {
     console.log(firstname)
    };
    
    return (
      <Tr onClick={handleClick} backgroundColor='white'>
        <Td >
            <Text as='b'>
              {firstname} {surname}
        </Text>
        </Td>
        <Td>
          <Text>
            {role}
          </Text>
        </Td>
        <Td>
        <Text>
        {email}
        </Text>
        </Td>
        <Td>
        <Text>
        {station}
        </Text>
        </Td>
        <Td>
        <Button leftIcon={<FaRegEdit />} colorScheme='teal' variant='outline' size='sm' onClick={handleClick}>
            Edit
        </Button>
        </Td>
      </Tr>
    );
  }
  
  export default UserRows;
  
  