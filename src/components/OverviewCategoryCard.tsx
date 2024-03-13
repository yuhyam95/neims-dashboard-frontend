import { Card, CardBody, CardHeader, HStack, Stat, StatLabel, Table, Tbody, Td, Tr } from "@chakra-ui/react"



interface Props {
    name: string,
    total: number,
    color: string
}

const OverviewCategoryCard = ({name, total, color}: Props) => {
  return (
    <Card size='md'>
    <CardHeader bg={color} borderTopRadius={4}>
    <Stat width="100%">
      <HStack alignItems={'center'} justifyContent={'space-between'}>
      <StatLabel color="white" fontWeight="bold" fontSize={'lg'}>{name}</StatLabel>
      <StatLabel color="white" fontWeight='bold' fontSize={'lg'}>{total}</StatLabel>
      </HStack>
      </Stat>
    </CardHeader>
    <CardBody>
      <Table>
      <Tbody>
      <Tr>
        <Td>Rice (25KG BAGS)</Td>
        <Td isNumeric>2540</Td>
      </Tr>
      <Tr>
        <Td>Cement (5KG BAGS)</Td>
        <Td isNumeric>3048</Td>
      </Tr>
    </Tbody>
    </Table>
    </CardBody>
  </Card>
  )
}

export default OverviewCategoryCard