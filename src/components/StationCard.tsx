import { Card, CardBody, List, ListItem, ListIcon, HStack, Text, Stack, Stat, StatNumber, StatHelpText, StatArrow, Button, } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import PieChart from './PieChart';
import { Link, useNavigate } from 'react-router-dom';

interface StateCardProps {
  stationId: string,
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

const StationCard = ({ stationId, stateName, change, total, category }: StateCardProps) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/station');
  };

  
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
          <Button variant="link" colorScheme='blue' alignSelf='flex-end' onClick={handleClick}>
            Details
          </Button>
          </Stack> 
          
          </HStack>
        </CardBody>
      </Card>
    
  );
};

export default StationCard;
