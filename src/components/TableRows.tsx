import {
  Tr,
  Td,
  Flex,
  Text,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";


interface Props {
  name: string;
  quantity: number;
  reason: string;
  station: string;
  date: string;
}
  

function TableRows(props: Props) {
  const {  name, quantity, reason, station, date } = props;
  
  return (
    <Tr>
      <Td >
          <Text>
            {name}
          </Text>
      </Td>
      <Td>
        <Box borderWidth="0.5px" borderRadius="10px" width="25%" display="flex" justifyContent="center" alignItems="center">
        <Text>
          {quantity}
        </Text>
        </Box>
      </Td>
      <Td>
      <Box borderWidth="0.5px" borderRadius="10px" width="50%" bg={reason === 'restock' ? '#BAF2E0' : '#FBD8D8' } display="flex" justifyContent="center" alignItems="center">
        <Text color={reason === 'restock' ? '#2FD197' : '#EB4547' }>
          {reason}
        </Text>
        </Box>
      </Td>
      <Td>
       {station}
      </Td>
      <Td>
        {date}
      </Td>
    </Tr>
  );
}

export default TableRows;

