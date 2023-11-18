import { Box, Button, Divider, HStack, Heading, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"




const comments = [
  {
      id: 1,
      user: "Yusuf Habu",
      comment: "I will review and get back to you."  
  },
  {
    id: 2,
    user: "Aisha Sambo",
    comment: "Okay Sir, Awaiting your response"  
}
]


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

      <Box mt={4} >
        <Text>{body}</Text>
      </Box>
    </Box>

    <Box p={8} backgroundColor='white' borderRadius='10px' width="30%">
      <Text fontStyle='italic' mb={4} fontSize='xl'>
        Comments
      </Text>
      {comments.map((comment, index) => (
        <VStack key={comment.id} align="start" spacing={1}>
          <Text fontWeight="bold" fontStyle='italic' color="gray.500">{comment.user}</Text>
          <Text>{comment.comment}</Text>
          {index < comments.length - 1 && <Divider w="100%" mb={2}/>}
        </VStack>
      ))}
    <Stack mt={10}>
    <Textarea placeholder='Leave a Comment' />
      <Button colorScheme="teal">Comment</Button>
    </Stack>
    </Box>
    </HStack>
    </>
    )
}
    

export default SingleReport