import React from 'react';
import { Card, CardBody, List, ListItem, ListIcon, HStack, Text, Stack, Stat, StatNumber, StatHelpText, StatArrow, } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import PieChart from './PieChart';


interface StateCardProps {
  stateName: string;
  category: Category[];
  change: string;
  total: number
}

interface Category {
  id: number;
  name: string;
  color: string;
  total: number;
}

const StationCard = ({ stateName, change, total, category }: StateCardProps) => {

    
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
            <StatNumber>{total}</StatNumber>
            </HStack>
            <StatHelpText>
                Total Number of Items
            </StatHelpText>
            </Stat>
          </HStack> 
          <List>
            {category.map((categoryItem) => (
              <ListItem key={categoryItem.id} fontSize="xx-small" color="gray">
                <ListIcon
                  as={MdCheckCircle}
                  color={categoryItem.color}
                />
                {categoryItem.name}
              </ListItem>
            ))}
          </List>
          </Stack>
          <Stack>
          <PieChart categoryData={category} />
          </Stack> 
          
          </HStack>
        </CardBody>
      </Card>
    
  );
};

export default StationCard;
