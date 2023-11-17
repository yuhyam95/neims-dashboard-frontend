import { Box, Button, HStack, Heading, Input, Text, Textarea, VStack } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"

const SingleReport = () => {
  
    const location = useLocation()
    const {title, body, station, date} = location.state
return (
    <>

    <Heading mb={4} ml={4}> Report </Heading>
    <HStack justify='space-around'>
    <Box p={4} backgroundColor='white' borderRadius='10px' width="60%">
      {/* Header */}
      <VStack align="start" spacing={2}>
        <Text fontSize="xl" fontWeight="bold">{station} Station</Text>
        <Text fontSize="lg" fontWeight="bold">{title}</Text>
      </VStack>

      {/* Email Body */}
      <Box mt={4} >
        <Text>{body}</Text>
      </Box>
    </Box>

    <Box p={8} backgroundColor='white' borderRadius='10px' width="30%">
    <Textarea placeholder='Leave a Comment' />
    <HStack mt={4}>
        <Button colorScheme="teal">Comment</Button>
      </HStack>
    </Box>
    </HStack>
    </>
    )
}
    

export default SingleReport