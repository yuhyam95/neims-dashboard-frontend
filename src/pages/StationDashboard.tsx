import { Box, HStack, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Station } from '../services/station-service';
import useProducts from '../hooks/useProducts';
import apiClient from '../services/api-client';
import BeneficiariesChart from '../components/BeneficiariesChart';
import MyTable from '../components/MyTable';
import CategoryGrid from '../components/CategoryGrid';
import CategoryColumnChart from "../components/CategoryColumnChart";
import UserCard from '../components/UserCard';
//import { useAuth } from '../context/AuthContext';


function StationDashboard() {
// const {user} = useAuth()
const userString = localStorage.getItem('user');
const user = userString ? JSON.parse(userString) : null;
const stationId = user?.station.id;
//const stationId = user?.station.id;
const [selectedStation, setSelectedStation] = useState<Station | any>(null)
const queryParams = {stationName: user?.station.name};
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

const category = selectedStation?.category;

  return (
    <div>
    <Heading mb={2}>
        {selectedStation?.name} {selectedStation?.type} Office
    </Heading>
      <CategoryGrid key={selectedStation?._id} data={category} stateName={selectedStation?.name} type={selectedStation?.name}/>
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
      <BeneficiariesChart station={selectedStation?.name}/>
      </Box>
      </HStack>
    </div>
  );
}

export default StationDashboard;
