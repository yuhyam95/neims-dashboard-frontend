import { Box, HStack, Heading } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Station } from '../services/station-service';
import useProducts from '../hooks/useProducts';
import apiClient from '../services/api-client';
import BeneficiariesChart from '../components/BeneficiariesChart';
import MyTable from '../components/MyTable';
import CategoryGrid from '../components/CategoryGrid';
import CategoryColumnChart from "../components/CategoryColumnChart";
import UserCard from '../components/UserCard';


function StationPage() {

const location = useLocation()
const {stationId, stateName, type} = location.state
const [selectedStation, setSelectedStation] = useState<Station | any>(null)
const queryParams = {stationName: stateName};
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

},[])

const category = selectedStation?.category;

  return (
    <div>
    <Heading mb={2}>
        {stateName} {type} Office
    </Heading>
      <CategoryGrid key={selectedStation?._id} data={category} stateName={stateName} type={type}/>
      <HStack mt={4}>
       <Box flex={2}>   
      <CategoryColumnChart station={selectedStation}/>
       </Box>
       <Box>
        <UserCard data={selectedStation}/>
       </Box>
      </HStack>
      <HStack alignItems="flex-start">
       <Box flex={2}> 
      <MyTable showHeader={false} items={5} width="100%" productData={products} showStation={false} showCategory={true}/>
      </Box>
      <Box>
      <BeneficiariesChart />
      </Box>
      </HStack>
    </div>
  );
}

export default StationPage;
