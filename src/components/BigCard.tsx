import { Card, CardBody, HStack, Icon, Stack, Stat, StatLabel, StatNumber } from "@chakra-ui/react"
import { IconType } from "react-icons"

interface Props {
    name: string,
    color: string,
    total: number,
    icon?: IconType,
    size?: string,
    height?: number
  }

const BigCard = ({name, color, total, icon, size, height}: Props) => {
  const formattedTotal = total?.toLocaleString("en-US")

  return (
<Card bg={color} size={size} height={height}>
  <CardBody>
   <Stack justify='space-around' alignItems="center"> 
   {icon &&
        <Icon
        color="white"
        boxSize={36}
        as={icon}
          />
    }
    <Stat>
    <HStack>
    <StatLabel color="white" fontSize='20px'>{name}</StatLabel>
    </HStack>
    <StatNumber color="white" fontSize='55px' alignSelf='center'>{formattedTotal}</StatNumber>
    </Stat>
    </Stack>
  </CardBody>
</Card>    
  )
}

export default BigCard