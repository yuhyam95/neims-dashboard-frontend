import { Card, CardBody, HStack, Stat, StatArrow, StatLabel, StatNumber } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

interface Props {
    name: string;
    total: number;
    color: string;
    stateName: string
  }

const CategoryCard = ({name, total, color, stateName}: Props) => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/productcategory', {state: {name, stateName, color, total}});
  };

  return (
<Card  bg={color} size='sm' onClick={handleClick}>
  <CardBody>
  <Stat>
    <HStack>
    <StatArrow type='increase' color="white"/>
    <StatLabel color="white">{name}</StatLabel>
    </HStack>
    <StatNumber color="white" fontSize='42px'>{total}</StatNumber>
    </Stat>
  </CardBody>
</Card>    
  )
}

export default CategoryCard