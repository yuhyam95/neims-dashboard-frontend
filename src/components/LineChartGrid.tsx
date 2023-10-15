
import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import LineChart from './LineChart'; 
import Reports from './Reports';

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

        <Flex direction="column"
              flex={isLargerThan768 ? 0.5 : 1}
              ml={isLargerThan768 ? 2 : 0} 
              bg="white"
              borderRadius="10px">
        <Text fontSize="lg" mb={1} ml={4}>
          Reports
        </Text>
        <Reports data={data}/>  
      </Flex>      
      </Flex>
  );
};

export default LineChartGrid;





