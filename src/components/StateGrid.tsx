import React, { useState } from 'react';
import { SimpleGrid, Tab, TabList, Tabs } from '@chakra-ui/react';
import StateCard from './StateCard';

interface StateListProps {
  stateData: StateData[];
}

interface StateData {
  id: number;
  state: string;
  change: string;
  type: string;
  warehouse: WarehouseItem[];
}

interface WarehouseItem {
  id: number;
  category: string;
  color: string;
  total: number;
} 

const StateList: React.FC<StateListProps> = ({ stateData }) => {
  const [selectedTab, setSelectedTab] = useState('Territorial');

  const filteredStateData = stateData.filter((state) => {
    if (selectedTab === 'Territorial') {
      return state.type === 'Territorial';
    } else if (selectedTab === 'Zonal') {
      return state.type === 'Zonal';
    } else if (selectedTab === 'Operational') {
      return state.type === 'Operational';
    }
    return true; // Show all if none is selected
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
    <SimpleGrid columns={{ base: 1, md: 1, lg: selectedTab == 'Territorial' ? 2 : 3 }} padding="10px" spacing={6}>
      {filteredStateData.map((state) => (
        <StateCard key={state.id} stateName={state.state} warehouseData={state.warehouse} change={state.change}/>
      ))}
    </SimpleGrid>
  </>
  );
};

export default StateList;
