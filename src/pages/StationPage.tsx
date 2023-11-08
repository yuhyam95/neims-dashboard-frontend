import { Flex, Heading } from '@chakra-ui/react';
import UserGrid from '../components/UserGrid';
import ProductsGrid from '../components/ProductsGrid';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import stationService, { Station } from '../services/station-service';



function StationPage() {

const location = useLocation()
const stationId = location.state.stationId
const stateName = location.state.stateName
const [selectedStation, setSelectedStation] = useState<Station | any>(null)

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
        {stateName} Territorial Office
    </Heading>
      <Flex> 
      <UserGrid data={selectedStation} />
      </Flex>
      <Flex>
      <ProductsGrid productData={selectedStation?.product}/>
      </Flex>
    </div>
  );
}

export default StationPage;
