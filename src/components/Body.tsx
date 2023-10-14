
import StateGrid from './StateGrid';
import data from '../constants/mockData'
import { Flex } from '@chakra-ui/react';
import LineChartGrid from './LineChartGrid';
import MyTable from './MyTable';



function Body() {
  return (
    <div>
      <StateGrid stateData={data} />
      <Flex> 
      <LineChartGrid data={data} />
      </Flex>
      <MyTable />
    </div>
  );
}

export default Body;
