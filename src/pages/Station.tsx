

import { Flex } from '@chakra-ui/react';
import UserGrid from '../components/UserGrid';
import ProductsGrid from '../components/ProductsGrid';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import stationService, { Station } from '../services/station-service';



function Station() {

const location = useLocation()
const stationId = location.state.stationId
const [selectedStation, setSelectedStation] = useState<Station | any>(null)

useEffect(() => {
  const getById = (stationId: any) => {
    stationService.getById(stationId)
      .then((response) => {
        setSelectedStation(response)
      })
      .catch((error) => {
        console.error("Error getting station:", error);
      });
    }
    getById(stationId);

}, [])

  return (
    <div>
      <Flex> 
      <UserGrid data={selectedStation} />
      </Flex>
      <Flex>
      <ProductsGrid />
      </Flex>
    </div>
  );
}

export default Station;
