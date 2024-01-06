import { Card, CardBody, HStack, Stat, StatLabel, StatNumber } from "@chakra-ui/react"

interface Props {
    description: string,
    color: string,
    total: string,
  }

const TransactionCard = ({description, color, total,}: Props) => {

  return (
<Card bg={color}>
  <CardBody>
   <HStack justify='space-around'> 
    <Stat>
    <HStack>
    <StatLabel color="white" >{description}</StatLabel>
    </HStack>
    <StatNumber color="white" fontSize='50px'>₦{total}</StatNumber>
    </Stat>
    </HStack>
  </CardBody>
</Card>    
  )
}

export default TransactionCard