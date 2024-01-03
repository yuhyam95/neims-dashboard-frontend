
import StationGrid from '../components/StationGrid';
import { Flex } from '@chakra-ui/react';
import ProductsGrid from '../components/ProductsGrid';
import StationTabs from '../components/StationTabs';
import { useState } from 'react';
import useStations from '../hooks/useStation';
import useProducts from '../hooks/useProducts';
import ChartGrid from '../components/ChartGrid';




function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('Territorial');
  const queryParams = "";
  const { stations } = useStations(queryParams);
  const { products } = useProducts(queryParams);    

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
      <ChartGrid productData={products} />
      </Flex>
      <Flex>
      <ProductsGrid productData={products} showStation={true} showCategory={true}/>
      </Flex>
    </div> 
  );
}

export default Dashboard;
