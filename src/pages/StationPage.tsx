import { Box, Flex, Heading } from '@chakra-ui/react';
import UserGrid from '../components/UserGrid';
import ProductsGrid from '../components/ProductsGrid';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Station } from '../services/station-service';
import useProducts from '../hooks/useProducts';
import apiClient from '../services/api-client';
import BeneficiariesChart from '../components/BeneficiariesChart';
import MyTable from '../components/MyTable';



function StationPage() {
const location = useLocation()
const {stationId, stateName, type} = location.state
const [selectedStation, setSelectedStation] = useState<Station | any>(null)
const [queryParams, setQueryParams] = useState({});
const { products } = useProducts(queryParams);
  

useEffect(() => {
  const getById = (stationId: any) => {
    apiClient.get(`/station/${stationId}`)
      .then((response) => {
        setSelectedStation(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error getting station:", error);
      });
    }
    getById(stationId);

},[stationId])


  return (
    <div>
    <Heading>
        {stateName} {type} Office
    </Heading>
      <Flex> 
      <UserGrid data={selectedStation} stateName={stateName} type={type}/>
      </Flex>
      <Flex justifyContent="space-between">
      <MyTable showHeader={false} items={5} width="78.5%" productData={products} showStation={false} showCategory={true}/>
      <Box>
      <BeneficiariesChart />
      </Box>
      </Flex>
    </div>
  );
}

export default StationPage;
