import { Card, CardBody, HStack, Stack, Stat, StatLabel, StatNumber, Text } from '@chakra-ui/react'


interface Props {
    title: string,
    body?: string | number 
}

const ReportStat = ({title, body}: Props) => {
  return (
    <Card marginTop="10px">
        <CardBody>
        <HStack justifyContent="space-around">
        <Stack justifyContent="space-around">
          <Text fontSize="md" color="gray">{title}</Text>
          <HStack justifyContent='space-around'>
          <Stat>
          <HStack>  
            <StatNumber>{body}</StatNumber>
        </HStack>
            </Stat>
          </HStack> 
           </Stack>
          <Stack>
          </Stack> 
          </HStack>
        </CardBody>
      </Card>
  )
}

export default ReportStat