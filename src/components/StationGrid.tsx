
import { SimpleGrid } from '@chakra-ui/react';

import useStation, { Station } from '../hooks/useStation';
import StationCard from './StationCard';
import StationTabs from './StationTabs';
import { useState } from 'react';


interface Props{
  data: any[]
}

const StationGrid = ({data}: Props) => {
  
  return (
    <>
    <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} padding="10px" spacing={6}>
      {data?.map((station) => (
        <StationCard key={station.id} stateName={station.name} change={station.change}
                     total={station.total} category={station.category}/>
      ))}
    </SimpleGrid>
  </>
  );


  

};

export default StationGrid;

