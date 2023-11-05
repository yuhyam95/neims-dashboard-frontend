
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import MyTable from './MyTable';
import MonthlyBeneficiariesChart from './MonthlyBeneficiariesChart';
import data from '../constants/mockData';

const ProductsGrid = () => {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");


  return (
      <Flex flex="1" padding="10px" justify="space-around" direction={isLargerThan768 ? "row" : "column"}>
         <Box flex={isLargerThan768 ? 2 : 1} mr={isLargerThan768 ? 4 : 0}>
          <MyTable showHeader={false} items={5} width="100%"/>
        </Box> 

        <Flex direction="column"
              flex={isLargerThan768 ? 0.5 : 0.5} // Adjust the flex value for the desired size
              ml={isLargerThan768 ? 1 : 0} // Adjust the left margin for spacing
              bg="white"
              borderRadius="10px"
              height={10}
              >
            <MonthlyBeneficiariesChart data={data} />
      </Flex>      
      </Flex>
  );
};

export default ProductsGrid;





