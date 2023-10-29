import { Table, Thead, Tbody, Tr, Th, TableContainer, TableCaption } from "@chakra-ui/react";
import data from '../constants/mockData';
import TableRows from "./TableRows";

function MyTable() {
  return (
  <TableContainer bg="white" borderRadius="10px">
  <Table size='lg'>
  <TableCaption>Product List</TableCaption>
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
        {data[0].products.map((data, index) => (
          <TableRows
            key={index}
            name={data.name}
            station={data.station}
            reason={data.reason}
            quantity={data.quantity}
            date={data.date}
          />
        ))}
    </Tbody>
  </Table>
</TableContainer>

  )
}

export default MyTable;
