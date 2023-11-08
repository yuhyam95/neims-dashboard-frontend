
import StationGrid from '../components/StationGrid';
import { Flex } from '@chakra-ui/react';
import LineChartGrid from '../components/LineChartGrid';
import ProductsGrid from '../components/ProductsGrid';
import StationTabs from '../components/StationTabs';
import { useState } from 'react';
import useStations from '../hooks/useStation';



function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('Territorial');
  const [queryParams, setQueryParams] = useState({});
  const { stations } = useStations(queryParams);
  
  const handleQueryParamChange = (newParams: any) => {
    setQueryParams(newParams);
  }
  console.log(stations)
    

  const filteredStateData = stations.filter((station: any) => {
    if (selectedTab === 'Territorial') {
      return station.type === 'Territorial';
    } else if (selectedTab === 'Zonal') {
      return station.type === 'Zonal';
    } else if (selectedTab === 'Operational') {
      return station.type === 'Operational';
    }
    return true; 
  });

  return (
    <div>
      <StationTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <StationGrid data={filteredStateData} selectedTab={selectedTab} />
      <Flex> 
      {/* <LineChartGrid data={filteredStateData} /> */}
      </Flex>
      <Flex>
      <ProductsGrid productData={filteredStateData}/>
      </Flex>
    </div> 
  );
}

export default Dashboard;
