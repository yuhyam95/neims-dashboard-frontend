import { Card, CardBody, HStack, Stat, StatNumber } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

interface Props {
    name: string;
    total: number;
    color: string;
    stateName: string,
    type?: string
  }

const CategoryCard = ({name, total, color, stateName, type}: Props) => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/productcategory', {state: {name, stateName, color, total, type}});
  };
  //const formattedTotal = total.toLocaleString("en-US")
  
  return (
<Card  bg={color} size='md' onClick={handleClick}>
  <CardBody>
  <Stat>
    <HStack>
    {/* <StatArrow type='increase' color="white"/> */}
    {/* <StatLabel color="white">{name}</StatLabel> */}
    </HStack>
    <StatNumber color="white" fontSize='36px'>{name}</StatNumber>
    </Stat>
  </CardBody>
</Card>    
  )
}

export default CategoryCard