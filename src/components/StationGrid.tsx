import React, { useEffect, useState } from 'react';
import { SimpleGrid, Tab, TabList, Tabs } from '@chakra-ui/react';
import StateCard from './StateCard';
import useData from '../hooks/useData';
import useStation from '../hooks/useStation';
import apiClient from '../services/api-client';
import axios from 'axios';

interface StateData {
  id: number;
  state: string;
  change: string;
  type: string;
  category: CategoryItem[];
}

interface CategoryItem {
  id: number;
  name: string;
  color: string;
  total: number;
} 


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
    <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} padding="10px" spacing={6}>
      {filteredStateData?.map((state) => (
        <StateCard key={state.id} stateName={state.name} change={state.change}/>
      ))}
    </SimpleGrid>
  </>
  );

};

export default StationGrid;
