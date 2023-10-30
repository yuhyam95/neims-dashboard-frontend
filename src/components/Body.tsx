
import StationGrid from './StationGrid';
import data from '../constants/mockData'
import { Flex } from '@chakra-ui/react';
import LineChartGrid from './LineChartGrid';
import ProductsGrid from './ProductsGrid';



function Body() {

  return (
    <div>
      <StationGrid />
      <Flex> 
      <LineChartGrid data={data} />
      </Flex>
      <Flex>
      <ProductsGrid />
      </Flex>
    </div>
  );
}

export default Body;
