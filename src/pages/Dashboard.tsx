
import StationGrid from '../components/StationGrid';
import { Flex } from '@chakra-ui/react';
import LineChartGrid from '../components/LineChartGrid';
import ProductsGrid from '../components/ProductsGrid';
import StationTabs from '../components/StationTabs';
import { useEffect, useState } from 'react';
import useStations from '../hooks/useStation';
import useProducts from '../hooks/useProducts';
import apiClient from '../services/api-client';




function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('Territorial');
  const [queryParams, setQueryParams] = useState({});
  const { stations } = useStations(queryParams);
  const { products } = useProducts(queryParams);    
  const [categories, setCategories] = useState([])
  
  const fetchCategories = async () => {
    try {
      const response = await apiClient.get('/category', {
      });
      setCategories(response.data);

    } catch (error) {
      console.error(error);
    }
  };
    useEffect(() => {
        fetchCategories()
    }, [])

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
      <LineChartGrid productData={products} />
      </Flex>
      <Flex>
      <ProductsGrid productData={products} showStation={true} showCategory={true}/>
      </Flex>
    </div> 
  );
}

export default Dashboard;
