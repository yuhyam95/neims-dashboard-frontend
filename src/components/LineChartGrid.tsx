
import { Box, Flex, HStack, Spacer, Text, useMediaQuery } from '@chakra-ui/react';
import LineChart from './LineChart'; // Import your LineChart component
import {MdOutlineEmail} from 'react-icons/md'

interface StateData {
    id: number;
    state: string;
    months: {
      id: number;
      name: string;
      total: number;
    }[];
  }
  
  interface Props {
    data: StateData[];
  }
  
const LineChartGrid = ({data}: Props) => {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");


  return (
      <Flex flex="1" padding="10px" justify="space-around" direction={isLargerThan768 ? "row" : "column"}>
         <Box flex={isLargerThan768 ? 2 : 1} mr={isLargerThan768 ? 4 : 0}>
          <LineChart data={data} />
        </Box> 
        {/* <Spacer /> */}

        <Flex direction="column" flex={isLargerThan768 ? 0.5 : 2} ml={isLargerThan768 ? 4 : 0} bg="white" borderRadius="10px">
        <Text fontWeight="bold" mb={2} ml={2}>
          Reports
        </Text>
        {data.map((stateData, index) => (
          <Flex
            key={stateData.id}
            alignItems="center"
            justifyContent="center"
            mb={2}
            borderBottom={index !== data.length - 1 ? '0.5px solid gray' : 'none'}
          >
            <HStack spacing="50px">
            <MdOutlineEmail size="20px" color="#85A3BB"/>
            <Text fontSize="sm" color="black" noOfLines={1}>{stateData.state} Office</Text>
            </HStack>
          </Flex>
        ))}
      </Flex>
      
      </Flex>
  );
};

export default LineChartGrid;





