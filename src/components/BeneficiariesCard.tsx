import { Card, CardBody, HStack, Icon, Stat, StatArrow, StatLabel, StatNumber } from "@chakra-ui/react"
import { IconType } from "react-icons"

interface Props {
    name: string,
    color: string,
    total?: number,
    icon?: IconType,
    size?: string,
    height?: number
  }

const BeneficiariesCard = ({name, color, total, icon, size, height}: Props) => {
  const formattedTotal = total?.toLocaleString("en-US")

  return (
<Card bg={color} size={size} height={height}>
  <CardBody>
   <HStack justify='space-around'> 
    <Stat>
    <HStack>
    <StatLabel color="white">Total {name}</StatLabel>
    </HStack>
    <StatNumber color="white" fontSize='42px'>{formattedTotal}</StatNumber>
    </Stat>
    {icon &&
        <Icon
        mr="4"
        color="white"
        boxSize={24}
        as={icon}
          />
    }
    </HStack>
  </CardBody>
</Card>    
  )
}

export default BeneficiariesCard