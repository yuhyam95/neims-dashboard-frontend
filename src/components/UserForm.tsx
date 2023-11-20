import useStations from '../hooks/useStation';
import useUser from '../hooks/useUser';
import useRole from '../hooks/useRole';
import { useEffect, useState } from "react";
import { Alert, AlertIcon, Box, Button, FormControl, FormLabel, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";

interface UserFormProps {
    showForm: boolean;
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
 const UserForm = ({  showForm, setShowForm }: UserFormProps) => {
        
    const [queryParams, setQueryParams] = useState({});
        const {stations} = useStations(queryParams);
        const {roles} = useRole();
    
        const {createUser, createError, success, resetSuccess} = useUser()
    
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

        const resetForm = () => {
            setFormData({
                firstname: "",
                lastname: "",
                role: "",
                station: "",
                email: "",
                password: "",
                confirmPassword: "",
              })
        }
  
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
      
        const handleSubmit = async () => {
          
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
          try {
            await createUser(newUser);


          } catch (error) {
            console.log(error)
          }
        };

        useEffect(() => {
            if (success) {
              setTimeout(() => {
                resetSuccess();
                resetForm();
              }, 3000);
            }
          }, [success]);
        

        return (
          <Stack spacing={4}>
           {showForm && 
           <>
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
            </HStack>
            {passwordError && (
              <Text color="red.500" fontSize="sm">
                {passwordError}
              </Text>
            )}
  
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
                   </>}
            {success && 
              <Alert status='success'>
              <AlertIcon />
              User created successfully
            </Alert>
            }
  
            {createError && 
              <Alert status='error'>
                <AlertIcon />
                Error creating user! Try again
              </Alert>
            }
          </Stack>
        )
      }
  
      export default UserForm;