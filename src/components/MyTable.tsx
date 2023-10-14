import { Table, Thead, Tbody, Tr, Th, TableContainer, Td, Tfoot } from "@chakra-ui/react";

function MyTable() {

  return (
  <TableContainer bg="white" borderRadius="10px">
  <Table size='lg'>
    <Thead>
      <Tr>
        <Th>Item</Th>
        <Th>Quantity</Th>
        <Th>Reason</Th>
        <Th>Station</Th>
        <Th>Date</Th>
      </Tr>
    </Thead>
    <Tbody>
    </Tbody>
  </Table>
</TableContainer>
  )
}

export default MyTable;
