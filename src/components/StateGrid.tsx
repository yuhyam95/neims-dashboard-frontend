import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import StateCard from './StateCard';

interface StateListProps {
  stateData: StateData[];
}

interface StateData {
  id: number;
  state: string;
  warehouse: WarehouseItem[];
}

interface WarehouseItem {
  id: number;
  category: string;
  color: string;
  total: number;
}

const StateList: React.FC<StateListProps> = ({ stateData }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} spacing={2} >
      {stateData.map((state) => (
        <StateCard key={state.id} stateName={state.state} warehouseData={state.warehouse} />
      ))}
    </SimpleGrid>
  );
};

export default StateList;
