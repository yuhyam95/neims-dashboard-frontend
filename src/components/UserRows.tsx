import {
    Tr,
    Td,
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useDisclosure,
    Switch,
    HStack,
  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";  
import UpdateUserForm from "./UpdateUserForm";
  
  interface Props {
    firstname: string,
    surname: string,
    email: string,
    station: string,
    role: string,
    status: string
  }
  
  function UserRows(props: Props) {
    const { firstname, surname, email, station, role, status} = props;
    const { isOpen, onOpen, onClose } = useDisclosure()

    const navigate = useNavigate();

  
    
    return (
      <>
      <Tr backgroundColor='white'>
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
        <HStack spacing={4}> 
        <Button leftIcon={<FaRegEdit />} colorScheme='teal' variant='outline' size='sm' onClick={onOpen}>
            Edit
        </Button>
        {status == 'active' ? <Switch  isChecked colorScheme='teal' size='lg'/> : <Switch isFocusable isDisabled colorScheme='teal' size='lg'/>}
        </HStack>
        </Td>
      </Tr>

      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> Update User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <UpdateUserForm firstname={firstname} surname={surname} email={email} status={status}/>
        </ModalBody>
      </ModalContent>
      </Modal>
      </>
    );
  }
  
  export default UserRows;
  
  