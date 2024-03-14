
import StationGrid from '../components/StationGrid';
import { Flex } from '@chakra-ui/react';
import ProductsGrid from '../components/ProductsGrid';
import StationTabs from '../components/StationTabs';
import { useState } from 'react';
import useStations from '../hooks/useStation';
import useProducts from '../hooks/useProducts';
import ChartGrid from '../components/ChartGrid';
import OverviewGrid from '../components/OverviewGrid';




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
    else if (selectedTab === 'Categories') {
      return station.type === 'Categories';
    }
    return true; 
  }); 

  const { products } = useProducts(queryParams);

  return (
    <div>
      <StationTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      
      {selectedTab === "Categories" &&
      <Flex mt={4}>
      <OverviewGrid />
      </Flex>
      }

      {selectedTab === "Overview" &&
      <> 
      <ProductsGrid productData={products} showStation={true} showCategory={false} showHeader={true} showTotal={true}/>
      <ChartGrid productData={products} />
      </>
      }

      <StationGrid data={filteredStateData} selectedTab={selectedTab} />
    </div> 
  );
}

export default Dashboard;
