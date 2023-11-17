import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"

const SingleReport = () => {
  
    const location = useLocation()
    const {title, body, station, date} = location.state
return (
    <>

    <Heading mb={4} ml={4}> Report </Heading>
    <Box p={4} backgroundColor='white' borderRadius='10px' >
      {/* Header */}
      <VStack align="start" spacing={2}>
        <Text fontSize="xl" fontWeight="bold">{station} Station</Text>
        <Text fontSize="lg" fontWeight="bold">{title}</Text>
      </VStack>

      {/* Email Body */}
      <Box mt={4} >
        <Text>{body}</Text>
      </Box>

      {/* Actions */}
      <HStack mt={4}>
        <Button colorScheme="teal">Comment</Button>
        {/* <Button colorScheme="red" variant="outline">Delete</Button> */}
      </HStack>
    </Box>
    </>
    )
}
    

export default SingleReport