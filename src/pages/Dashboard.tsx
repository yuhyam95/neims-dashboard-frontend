
import StationGrid from '../components/StationGrid';
import data from '../constants/mockData'
import { Flex } from '@chakra-ui/react';
import LineChartGrid from '../components/LineChartGrid';
import ProductsGrid from '../components/ProductsGrid';



function Dashboard() {

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

export default Dashboard;
