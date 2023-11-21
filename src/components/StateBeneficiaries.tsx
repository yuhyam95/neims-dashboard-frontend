import { Box, Divider, HStack, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react"
import { GoDotFill } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Beneficiary } from "../services/beneficiary-service";
import apiClient from "../services/api-client";

interface Props {
    state?: string,
    station?: string
    zone?: string
}

const StateBeneficiaries = ({state}: Props) => {
    
const [beneficiariesData, setBeneficiariesData] = useState<Beneficiary | null>(null)

const fetchData = async () => {
    try {
      const response = await apiClient.get('/beneficiary', {
        params:{
            state: state
        }
      });
      setBeneficiariesData(response.data);

    } catch (error) {
      console.error(error);
    }
  };
    useEffect(() => {
        fetchData()
    }, [])

    const menCount = beneficiariesData?.men;
    const womenCount = beneficiariesData?.women;
    const childrenCount = beneficiariesData?.children;
    const householdCount = beneficiariesData?.children;
    const totalbeneficiaries = 
            (beneficiariesData?.men || 0) +
            (beneficiariesData?.women || 0) +
            (beneficiariesData?.children || 0);

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
    <Box bg="white" paddingBottom={5} borderRadius="20px">
        <HStack mb={6} justify="space-between" mt={2}>
            <HStack ml={4}>
            <IoLocationOutline />
            <Text as='b' alignSelf='flex-start' fontSize="lg">
                {state}
            </Text>
            </HStack>
            <Text as='b' alignSelf='flex-start' mr={4} fontSize="lg">
                {totalbeneficiaries}
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