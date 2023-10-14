import React from 'react';
import { Card, CardBody, List, ListItem, ListIcon, HStack, Text, Stack, Stat, StatNumber, StatHelpText, StatArrow, } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import PieChart from './PieChart';


interface StateCardProps {
  stateName: string;
  warehouseData: WarehouseItem[];
  change: string;
}

interface WarehouseItem {
  id: number;
  category: string;
  color: string;
  total: number;
}

const StateCard: React.FC<StateCardProps> = ({ stateName, warehouseData, change }) => {
    const cumulativeTotal = warehouseData.reduce(
        (acc, item) => acc + item.total,
        0
      );
    
  return (
      <Card marginTop="10px">
        <CardBody>
        <HStack justifyContent="space-around">
        <Stack justifyContent="space-around">
          <Text fontSize="md" color="gray">{stateName}</Text>
          <HStack justifyContent='space-around'>
  
          <Stat>
          <HStack>  
          <StatArrow type={change == 'increase' ? 'increase' : 'decrease'} boxSize={10} />
            <StatNumber>{cumulativeTotal}</StatNumber>
            </HStack>
            <StatHelpText>
                Total Number of Items
            </StatHelpText>
            </Stat>
          </HStack> 
          <List>
            {warehouseData.map((warehouseItem) => (
              <ListItem key={warehouseItem.id} fontSize="xx-small" color="gray">
                <ListIcon
                  as={MdCheckCircle}
                  color={warehouseItem.color}
                />
                {warehouseItem.category}
              </ListItem>
            ))}
          </List>
          </Stack>
          <Stack>
          <PieChart warehouseData={warehouseData} />
          </Stack>
          
          </HStack>
        </CardBody>
      </Card>
    
  );
};

export default StateCard;
