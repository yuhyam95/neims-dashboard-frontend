import { Card, CardBody, HStack, Stat, StatLabel, StatNumber } from '@chakra-ui/react'


interface Props {
    title: string,
    body?: string | number 
}

const ReportStat = ({title, body}: Props) => {
  return (
<Card size='md'>
  <CardBody>
  <Stat>
    <HStack>
    <StatLabel color="gray">{title}</StatLabel>
    </HStack>
    <StatNumber color="black">{body}</StatNumber>
    </Stat>
  </CardBody>
</Card>
  )
}

export default ReportStat