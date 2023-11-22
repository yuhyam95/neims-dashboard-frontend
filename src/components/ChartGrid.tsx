import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import ColumnChart from './ColumnCharts';
import BeneficiariesChart from './BeneficiariesChart';

interface Product {
  station: {
    name: string;
  };
  category: {
    name: string;
  };
  quantity: number;
}

interface StackedColumnChartProps {
  productData: Product[];
}

const ChartGrid = ({productData}: StackedColumnChartProps) => {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
      <Flex flex="1" padding="10px" justify="space-around" direction={isLargerThan768 ? "row" : "column"}>
         <Box flex={isLargerThan768 ? 2 : 1} mr={isLargerThan768 ? 4 : 0}>
          <ColumnChart productData={productData} />
        </Box> 
        <Flex direction="column"
              flex={isLargerThan768 ? 0.5 : 0.5} 
              ml={isLargerThan768 ? 1 : 0} 
              bg="white"
              borderRadius="10px"
              height={15}
              >
           <BeneficiariesChart />
      </Flex>
      </Flex>
  );
};

export default ChartGrid;





