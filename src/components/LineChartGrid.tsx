
import { Box, Flex, HStack, Table, Tbody, Td, Text, Thead, Tr, useMediaQuery } from '@chakra-ui/react';
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

        <Flex direction="column"
              flex={isLargerThan768 ? 0.1 : 1} // Adjust the flex value for the desired size
              ml={isLargerThan768 ? 2 : 0} // Adjust the left margin for spacing
              bg="white"
              borderRadius="10px">
        <Text fontSize="lg" mb={1} ml={4}>
          Reports
        </Text>
          <Table variant="simple">
          <Tbody>
            {data.map((stateData, index) => (
              <Tr key={stateData.id}>
                <Td>
                  <MdOutlineEmail size="25px" color="#85A3BB" />
                </Td>
                <Td fontSize="md" color="black" isTruncated marginLeft="-25px">
                  {stateData.state} Office
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
      
      </Flex>
  );
};

export default LineChartGrid;





