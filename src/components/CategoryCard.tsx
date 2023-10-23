import { Card, CardBody, HStack, Stat, StatArrow, StatLabel, StatNumber } from "@chakra-ui/react"

interface Props {
    name: string;
    total: number;
    color: string;
  }

const CategoryCard = ({name, total, color}: Props) => {
  return (
<Card bg={color} size='sm'>
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