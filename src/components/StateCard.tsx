import React from 'react';
import { Box, Card, CardBody, List, ListItem, ListIcon, HStack, Text, Stack, } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import PieChart from './PieChart';
import  { BsFillArrowUpSquareFill } from 'react-icons/bs'
import RPieChart from './RPieChart';

interface StateCardProps {
  stateName: string;
  warehouseData: WarehouseItem[];
}

interface WarehouseItem {
  id: number;
  category: string;
  color: string;
  total: number;
}

const StateCard: React.FC<StateCardProps> = ({ stateName, warehouseData }) => {
    const cumulativeTotal = warehouseData.reduce(
        (acc, item) => acc + item.total,
        0
      );
    
  return (
    <Box marginTop="10px">
      <Card>
        <CardBody>
        <HStack justifyContent="space-around">
        <Stack justifyContent="space-around">
          <Text fontSize="md" color="gray">{stateName}</Text>
          <HStack justifyContent='space-around'>
            <BsFillArrowUpSquareFill />
            <Text fontSize="2xl" color="gray">{cumulativeTotal}</Text>  
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
    </Box>
  );
};

export default StateCard;
