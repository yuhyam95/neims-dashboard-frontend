import { Flex, Heading } from '@chakra-ui/react';
import UserGrid from '../components/UserGrid';
import ProductsGrid from '../components/ProductsGrid';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import stationService, { Station } from '../services/station-service';
import useProducts from '../hooks/useProducts';



function StationPage() {
const location = useLocation()
const {stationId, stateName, type} = location.state
const [selectedStation, setSelectedStation] = useState<Station | any>(null)
const [queryParams, setQueryParams] = useState({stationName: stateName})
const { products } = useProducts(queryParams);
  

useEffect(() => {
  const getById = (stationId: any) => {
    stationService.getById(stationId)
      .then((response) => {
        setSelectedStation(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error getting station:", error);
      });
    }
    getById(stationId);

},[])

  return (
    <div>
    <Heading>
        {stateName} {type} Office
    </Heading>
      <Flex> 
      <UserGrid data={selectedStation} stateName={stateName} type={type}/>
      </Flex>
      <Flex>
      <ProductsGrid productData={products} showStation={false} showCategory={true}/>
      </Flex>
    </div>
  );
}

export default StationPage;
