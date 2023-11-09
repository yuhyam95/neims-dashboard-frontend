import {
  Tr,
  Td,
  Text,
  Box,
} from "@chakra-ui/react";


interface Props {
  name: string;
  quantity: number;
  reason: string;
  station: string;
  date: string;
  category: string,
  showStation: boolean
  showCategory: boolean
  
}
  

function TableRows(props: Props) {
  const {  name, quantity, reason, station, date, category, showStation, showCategory } = props;
  
  return (
    <Tr>
      <Td >
          <Text>
            {name}
          </Text>
      </Td>
      <Td>
        <Box borderWidth="0.5px" borderRadius="10px" width="50%" display="flex" justifyContent="center" alignItems="center">
        <Text>
          {quantity}
        </Text>
        </Box>
      </Td>
      <Td>
      <Box borderWidth="0.5px" borderRadius="10px" width="80%" bg={reason == 'restock' ? '#BAF2E0' : '#FBD8D8' } display="flex" justifyContent="center" alignItems="center">
        <Text color={reason === 'restock' ? '#2FD197' : '#EB4547' }>
          {reason === 'restock' ? "RESTOCK" : "DISTRIBUTION"}
        </Text>
        </Box>
      </Td>
      {showStation &&
      <Td>
       {station}
      </Td>}
      {showCategory &&
      <Td>
       {category}
      </Td>}
      <Td>
        {date}
      </Td>
    </Tr>
  );
}

export default TableRows;

