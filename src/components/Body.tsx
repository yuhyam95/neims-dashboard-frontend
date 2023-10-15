
import StateGrid from './StateGrid';
import data from '../constants/mockData'
import { Flex } from '@chakra-ui/react';
import LineChartGrid from './LineChartGrid';
import ProductsGrid from './ProductsGrid';



function Body() {
  return (
    <div>
      <StateGrid stateData={data} />
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
