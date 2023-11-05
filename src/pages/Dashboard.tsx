
import StationGrid from '../components/StationGrid';
import { Flex } from '@chakra-ui/react';
import LineChartGrid from '../components/LineChartGrid';
import ProductsGrid from '../components/ProductsGrid';
import StationTabs from '../components/StationTabs';
import { useState } from 'react';
import useStation, { Station } from '../hooks/useStation';



function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('Territorial');
  const {data} = useStation();

  const filteredStateData = data?.filter((state) => {
    if (selectedTab === 'Territorial') {
      return state.type === 'Territorial Office';
    } else if (selectedTab === 'Zonal') {
      return state.type === 'Zonal Office';
    } else if (selectedTab === 'Operational Office') {
      return state.type === 'Operational';
    }
    return true; 
  });

  return (
    <div>
      <StationTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <StationGrid data={filteredStateData}/>
      <Flex> 
      {/* <LineChartGrid data={data} /> */}
      </Flex>
      <Flex>
      <ProductsGrid />
      </Flex>
    </div>
  );
}

export default Dashboard;
