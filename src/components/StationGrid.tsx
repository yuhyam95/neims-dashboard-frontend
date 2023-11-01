import { useState } from 'react';
import { SimpleGrid, Tab, TabList, Tabs } from '@chakra-ui/react';

import useStation from '../hooks/useStation';
import StationCard from './StationCard';


const StationGrid = () => {
  
  const [selectedTab, setSelectedTab] = useState('Territorial');
  const {data} = useStation();

  console.log(data)
  const filteredStateData = data?.filter((state) => {
    if (selectedTab === 'Territorial') {
      return state.type === 'Territorial Office';
    } else if (selectedTab === 'Zonal') {
      return state.type === 'Zonal Office';
    } else if (selectedTab === 'Operational Office') {
      return state.type === 'Operational';
    }
    return true; 
  });

  return (
    <>
  <Tabs variant='unstyled' align="center" bg="white" borderRadius="10px" width="50%" defaultIndex={0}>
  <TabList>
    <Tab _selected={{ color: 'blue.500', bg: 'gray.100', fontStyle: 'bold' }}
       onClick={() => setSelectedTab('Territorial')}
          >Territorial Offices</Tab>
    <Tab _selected={{ color: 'blue.500', bg: 'gray.100' }}  onClick={() => setSelectedTab('Zonal')} >Zonal Offices</Tab>
    <Tab _selected={{ color: 'blue.500', bg: 'gray.100' }}  onClick={() => setSelectedTab('Operational')}>Operational Offices</Tab>
  </TabList>
</Tabs>
    <SimpleGrid columns={{ base: 1, md: 1, lg: selectedTab == "Territorial" ? 2 : 3 }} padding="10px" spacing={6}>
      {filteredStateData?.map((station) => (
        <StationCard key={station.id} stateName={station.name} change={station.change}
                     total={station.total} category={station.category}/>
      ))}
    </SimpleGrid>
  </>
  );

};

export default StationGrid;
