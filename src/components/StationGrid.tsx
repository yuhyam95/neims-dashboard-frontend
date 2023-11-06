
import { SimpleGrid } from '@chakra-ui/react';
import StationCard from './StationCard';


interface Props{
  data: any[]
}

const StationGrid = ({data}: Props) => {
  
  return (
    <>
    <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} padding="10px" spacing={6}>
      {data?.map((station) => (
        <StationCard key={station._id} stateName={station.name} change={station.change}
                     total={station.total} category={station.category} stationId={station._id}/>
      ))}
    </SimpleGrid>
  </>
  );


  

};

export default StationGrid;

