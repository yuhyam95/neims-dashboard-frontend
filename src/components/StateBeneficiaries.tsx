import { Box, Divider, HStack, List, ListIcon, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react"
import useBeneficiaries from "../hooks/useBeneficiaries"
import { GoDotFill } from "react-icons/go";


const StateBeneficiaries = () => {
    
    const queryParams = ''
    const {beneficiaries} = useBeneficiaries(queryParams)

    const menCount = beneficiaries?.men;
    const womenCount = beneficiaries?.women;
    const childrenCount = beneficiaries?.children;
    const householdCount = beneficiaries?.children;

    const data = [
        {
            id: 1, 
            name: "Men",
            count: menCount
        },
        {
            id: 2, 
            name: "Women",
            count: womenCount
        },
        {
            id: 3, 
            name: "Children",
            count: childrenCount
        },
        {
            id: 4, 
            name: "Households",
            count: householdCount
        },
        
    ]

    return (
    <Box bg="white" width="20%" paddingBottom={5} borderRadius="20px">
        <HStack mb={6} justify="space-between">
            <Text as='b' alignSelf='flex-start' ml={4} fontSize="lg" mt={2}>
                Bauchi
            </Text>
            <Text as='b' alignSelf='flex-start' mr={4} fontSize="lg" mt={2}>
                10678
            </Text>
        </HStack>
        {data.map((item, index) => (
            <>
            <Stack key={item.id} mb={4}>
                <HStack justify='space-between' alignItems="center">
                    <HStack>   
                        <List>
                            <ListItem color="gray.900" ml={4}>
                            <ListIcon as={GoDotFill} color='teal' />    
                                {item.name}
                            </ListItem>
                        </List>
                    </HStack>
                    <Text color="gray.900" mr={4}>{item.count}</Text>
                </HStack>   
            </Stack>
            {index < data.length - 1 && <Divider borderColor="gray.300" />}
            </>
        ))} 
    </Box>
  )
}

export default StateBeneficiaries