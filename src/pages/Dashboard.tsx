
import StationGrid from '../components/StationGrid';
import { Flex } from '@chakra-ui/react';
import ProductsGrid from '../components/ProductsGrid';
import StationTabs from '../components/StationTabs';
import { useState } from 'react';
import useStations from '../hooks/useStation';
import useProducts from '../hooks/useProducts';
import ChartGrid from '../components/ChartGrid';




function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('Overview');
  const queryParams = "";
  const { stations } = useStations(queryParams); 

  const filteredStateData = stations.filter((station: any) => {
    
    if (selectedTab === 'Overview') {
      return station.type === '';
    }
    else if (selectedTab === 'Territorial') {
      return station.type === 'Territorial';
    } else if (selectedTab === 'Zonal') {
      return station.type === 'Zonal';
    } else if (selectedTab === 'Operational') {
      return station.type === 'Operational';
    }
    return true; 
  }); 

  const { products } = useProducts(queryParams); 

  return (
    <div>
      <StationTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab !== 'Overview' &&
        <StationGrid data={filteredStateData} selectedTab={selectedTab} />}
      <Flex>
      <ProductsGrid productData={products} showStation={true} showCategory={false} showHeader={true} showTotal={true}/>
      </Flex>
  {selectedTab === "Overview" &&   
     <Flex> 
      <ChartGrid productData={products} />
      </Flex>}
    </div> 
  );
}

export default Dashboard;
