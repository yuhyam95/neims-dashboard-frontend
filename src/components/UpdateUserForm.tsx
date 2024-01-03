import useStations from '../hooks/useStation';
import useUser from '../hooks/useUser';
import useRole from '../hooks/useRole';
import { useEffect, useState } from "react";
import { Alert, AlertIcon, Box, Button, FormControl, FormLabel, HStack, Input, Select, Stack, Switch } from "@chakra-ui/react";

interface UserFormProps {
    _id: string,
    firstname: string,
    role: string,
    station: string,
    surname: string,
    email: string,
    status: boolean
  }
  
 const UpdateUserForm = ({ _id, firstname, surname, email, status, role, station }: UserFormProps) => {
        //const [queryParams, setQueryParams] = {}
        const {stations} = useStations('');
        const {roles} = useRole();
    
        const {updateUser, createError, success, resetSuccess} = useUser()
        
        const [formData, setFormData] = useState({
          firstname: firstname,
          surname: surname,
          role: role,
          station: station,
          email: email,
          status: status
        });

  
        const handleChange = (e: any) => {
          const { id, value } = e.target;
          //const fieldValue = type === 'checkbox' ? checked : value;

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
        
        const handleSubmit = async () => {
          
          const updatedUser = {
            _id: _id,
            firstname: formData.firstname,
            surname: formData.surname,
            role:formData.role, 
            station: formData.station, 
            email: formData.email
          };
          try {
            await updateUser(updatedUser);

          } catch (error) {
            console.log(error)
          }
        };

        useEffect(() => {
            if (success) {
              setTimeout(() => {
                resetSuccess();
              }, 3000);
            }
          }, [success]);
        

        return (
          <Stack spacing={4}>
           <>
            <HStack>
              <Box>
                <FormControl id="firstname" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" size='md' onChange={handleChange} value={formData.firstname}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="surname">
                  <FormLabel> Surname</FormLabel>
                  <Input type="text" size='md' onChange={handleChange} value={formData.surname}/>
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
            <FormControl id="status" isRequired>
            <FormLabel htmlFor='status'>Status:</FormLabel>
            <Switch id="status"
                  size="lg"
                  colorScheme="teal"
                  onChange={handleChange}
                  isChecked={formData.status ? true : false} />    
            </FormControl>
  
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
                Update
              </Button>
            </Stack>
              </>
            {success && 
              <Alert status='success'>
              <AlertIcon />
              User updated successfully
            </Alert>
            }
  
            {createError && 
              <Alert status='error'>
                <AlertIcon />
                Error updating user! Try again
              </Alert>
            }
          </Stack>
        )
      }
  
      export default UpdateUserForm;