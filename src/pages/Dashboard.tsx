
import StationGrid from '../components/StationGrid';
import { Flex } from '@chakra-ui/react';
import LineChartGrid from '../components/LineChartGrid';
import ProductsGrid from '../components/ProductsGrid';
import StationTabs from '../components/StationTabs';
import { useState } from 'react';
import useStations from '../hooks/useStation';



function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('Territorial');
  const { stations, error, isLoading, setStations, setError } = useStations();

  const filteredStateData = stations.filter((station: any) => {
    if (selectedTab === 'Territorial') {
      return station.type === 'Territorial Office';
    } else if (selectedTab === 'Zonal') {
      return station.type === 'Zonal Office';
    } else if (selectedTab === 'Operational Office') {
      return station.type === 'Operational';
    }
    return true; 
  });

  return (
    <div>
      <StationTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <StationGrid data={filteredStateData}/>
      <Flex> 
      {/* <LineChartGrid data={filteredStateData} /> */}
      </Flex>
      <Flex>
      <ProductsGrid />
      </Flex>
    </div>
  );
}

export default Dashboard;
